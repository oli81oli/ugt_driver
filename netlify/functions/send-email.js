
import nodemailer from "nodemailer";

const json = (statusCode, data) => ({
  statusCode,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});

const escapeHtml = (value = "") =>
  String(value).replace(/[&<>'"]/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[char]);

// 🔴 VERIFICAR HCAPTCHA
const verifyHCaptcha = async (token) => {
  const res = await fetch("https://hcaptcha.com/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      secret: process.env.HCAPTCHA_SECRET,
      response: token,
    }),
  });

  return res.json();
};

export const handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return json(405, { success: false, message: "Method Not Allowed" });
    }

    const requiredEnv = [
      "HCAPTCHA_SECRET",
      "EMAIL_USER",
      "EMAIL_PASS",
      "EMAIL_TO",
      "VENTAS_EMAIL_TO",
      "SECONDARY_EMAIL_TO",
    ];
    const missingEnv = requiredEnv.filter((key) => !process.env[key]);
    if (missingEnv.length) {
      console.error("Faltan variables de entorno:", missingEnv.join(", "));
      return json(500, {
        success: false,
        message: "El servidor no está configurado correctamente",
      });
    }

    const { token, tipo, base, nombre, telefono, mensaje, website } = JSON.parse(event.body);

    // 🧨 HONEYPOT
    if (website) {
      return json(400, { success: false, message: "Bot detectado" });
    }

    // 🧨 VALIDACIÓN CAMPOS
    if (!token || !tipo || !base || !nombre || !telefono || !mensaje) {
      return json(400, { success: false, message: "Faltan campos" });
    }

    // 🔴 VALIDAR HCAPTCHA
    const captcha = await verifyHCaptcha(token);
    if (!captcha.success) {
      return json(403, { success: false, message: "Captcha inválido" });
    }

    // 📧 DESTINOS
    const emailsPorBase = {
      Miravete: process.env.VENTAS_EMAIL_TO,
      "San Epi": process.env.SECONDARY_EMAIL_TO,
      Ventas: process.env.VENTAS_EMAIL_TO,
      Vaguada: process.env.EMAIL_TO,
      Vistalegre: process.env.SECONDARY_EMAIL_TO,
      "Madrid Rio": process.env.EMAIL_TO,
    };

    const destino = emailsPorBase[base];
    if (!destino) {
      return json(400, { success: false, message: "Base inválida" });
    }

    // 📩 EMAIL
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // ✅ usar App Password de Gmail
      },
    });

    await transporter.sendMail({
      from: `"Formulario UGT" <${process.env.EMAIL_USER}>`,
      to: destino,
      subject: `Nuevo formulario recibido: ${tipo} - ${base}`,
      html: `
        <h2>Nuevo mensaje</h2>
        <p><strong>Tipo:</strong> ${escapeHtml(tipo)}</p>
        <p><strong>Base:</strong> ${escapeHtml(base)}</p>
        <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(telefono)}</p>
        <p><strong>Mensaje:</strong> ${escapeHtml(mensaje)}</p>
      `,
    });

    return json(200, {
      success: true,
      message: "Email enviado correctamente",
    });
  } catch (error) {
    console.error("ERROR:", error);

    return json(500, {
      success: false,
      message: "Error interno del servidor",
    });
  }
};