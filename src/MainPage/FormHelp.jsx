import { useState, useRef, useEffect } from "react"; // 🔁 añadido useEffect
import { Spinner } from "../Utils/Spinner";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import "../App.css";

export const FormHelp = () => {
  const [captchaToken, setCaptchaToken] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  const captchaRef = useRef(null);
  const toastTimeoutRef = useRef(null); // ✅ NUEVO

  const [formData, setFormData] = useState({
    tipo: "",
    base: "",
    nombre: "",
    telefono: "",
    mensaje: "",
    website: "",
  });

  // 🔁 NUEVO: limpiar timeout al desmontar componente
  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  const showToast = (msg) => {
    setToast(msg);

    // 🔁 NUEVO: evita múltiples timeouts
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }

    toastTimeoutRef.current = setTimeout(() => {
      setToast("");
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      tipo: "",
      base: "",
      nombre: "",
      telefono: "",
      mensaje: "",
      website: "",
    });

    setCaptchaToken("");
    captchaRef.current?.resetCaptcha?.();
  };

  // ✅ NUEVO: validación centralizada
  const validateForm = () => {
    // honeypot
    if (formData.website) {
      showToast("Spam detectado ❌");
      return false;
    }

    // teléfono
    const phoneRegex = /^[0-9+\s()-]{6,20}$/;

    if (!phoneRegex.test(formData.telefono.trim())) {
      showToast("Teléfono inválido ❌");
      return false;
    }

    // mensaje mínimo
    if (formData.mensaje.trim().length < 10) {
      showToast("Describe mejor el problema ❌");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (!captchaToken) {
      showToast("Completa el captcha");
      return;
    }

    // 🔁 NUEVO
    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tipo: formData.tipo,
          base: formData.base,
          nombre: formData.nombre.trim(),
          telefono: formData.telefono.trim(),
          mensaje: formData.mensaje.trim(),
          website: formData.website,
          token: captchaToken,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        resetForm();
        setVisible(false);
        showToast("Enviado ✅");
      } else {
        showToast(data?.message || "Error ❌");
      }
    } catch (error) {
      showToast("Error de conexión ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="box-btn-form">
      {loading && <Spinner />}

      {toast && <div className="text-toast">{toast}</div>}

      <button type="button" onClick={() => setVisible(true)} className="btn-form">
        Formulario
      </button>

      {visible && (
        <div className="overlay" onClick={() => setVisible(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>

            <div className="form-header">
              <h2>Formulario de ayuda</h2>

              <button
                className="close-button"
                onClick={() => setVisible(false)}
                type="button" // 🔁 NUEVO
                aria-label="Cerrar formulario" // 🔁 NUEVO
              >
                ✕
              </button>
            </div>

            <form className="form-body" onSubmit={handleSubmit}>

              {/* honeypot */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
              />

              <label>Tipo de solicitud</label>
              <select
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="Reclamaciones">Reclamaciones</option>
                <option value="Revision de nominas">Revisión de nóminas</option>
                <option value="Gestiones de documentacion">Gestiones de documentación</option>
                <option value="Descuentos en nomina">Descuentos en nómina</option>
                <option value="Conciliaciones">Conciliaciones</option>
                <option value="Sanciones">Sanciones</option>
                <option value="Informacion general">Información general</option>
              </select>

              <label>Base</label>
              <select
                name="base"
                value={formData.base}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="Miravete">Miravete</option>
                <option value="San Epi">San Epi</option>
                <option value="Ventas">Ventas</option>
                <option value="Vaguada">Vaguada</option>
                <option value="Vistalegre">Vistalegre</option>
                <option value="Madrid Rio">Madrid Río</option>
              </select>

              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                maxLength={80}
                required
              />

              <label>Teléfono</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                maxLength={20}
                required
              />

              <label>Descripción</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                maxLength={1000}
                required
              />

              {/* CAPTCHA */}
              <div
                style={{ transform: "scale(0.77)", transformOrigin: "0 0" }}
                className="wrapper"
              >
                <HCaptcha
                  theme="dark"
                  sitekey={import.meta.env.VITE_HCAPTCHA_SITE_KEY} // 🔁 NUEVO (antes hardcodeado)
                  onVerify={(token) => setCaptchaToken(token)}
                  onExpire={() => setCaptchaToken("")} // 🔁 NUEVO
                  ref={captchaRef}
                />
              </div>

              <button type="submit" disabled={loading}>
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};