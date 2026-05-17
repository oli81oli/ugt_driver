
import nodemailer from "nodemailer";

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
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    const { token, tipo, base, nombre, telefono, mensaje, website } = JSON.parse(event.body);

    // 🧨 HONEYPOT
    if (website) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Bot detectado" }),
      };
    }

    // 🧨 VALIDACIÓN CAMPOS
    if (!token || !tipo || !base || !nombre || !telefono || !mensaje) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Faltan campos" }),
      };
    }

    // 🔴 VALIDAR HCAPTCHA
    const captcha = await verifyHCaptcha(token);
    if (!captcha.success) {
      return {
        statusCode: 403,
        body: JSON.stringify({
          message: "Captcha inválido",
          details: captcha,
        }),
      };
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
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Base inválida" }),
      };
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
        <p><strong>Tipo:</strong> ${tipo}</p>
        <p><strong>Base:</strong> ${base}</p>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Email enviado correctamente",
      }),
    };
  } catch (error) {
    console.error("ERROR:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: "Error interno del servidor",
      }),
    };
  }
};