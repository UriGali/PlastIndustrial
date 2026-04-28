const { Router } = require("express");
const { body, validationResult } = require("express-validator");
const rateLimit = require("express-rate-limit");
const nodemailer = require("nodemailer");

const router = Router();

// Stricter rate limit for contact endpoint (5 per hour per IP)
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: { success: false, message: "Límite de mensajes alcanzado. Inténtalo en 1 hora." },
});

// Validation rules
const validateContact = [
  body("name")
    .trim()
    .notEmpty().withMessage("El nombre es obligatorio.")
    .isLength({ max: 100 }).withMessage("El nombre no puede superar los 100 caracteres."),

  body("email")
    .trim()
    .notEmpty().withMessage("El email es obligatorio.")
    .isEmail().withMessage("Introduce un email válido.")
    .normalizeEmail(),

  body("phone")
    .optional({ checkFalsy: true })
    .trim()
    .matches(/^[\d\s\+\-\(\)]{7,20}$/).withMessage("Formato de teléfono no válido."),

  body("company")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 150 }).withMessage("El nombre de empresa es demasiado largo."),

  body("message")
    .trim()
    .notEmpty().withMessage("El mensaje es obligatorio.")
    .isLength({ min: 10, max: 2000 }).withMessage("El mensaje debe tener entre 10 y 2000 caracteres."),
];

// Create transporter — configure via env vars
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT ?? "587", 10),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

router.post("/", contactLimiter, validateContact, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: "Datos no válidos.",
      errors: errors.array().map((e) => ({ field: e.path, msg: e.msg })),
    });
  }

  const { name, email, phone, company, message } = req.body;

  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: `"PlastIndustrial Web" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECIPIENT ?? process.env.SMTP_USER,
      replyTo: email,
      subject: `Nuevo contacto web: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #234374; padding: 24px 32px;">
            <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 600;">
              PlastIndustrial Group — Nuevo mensaje de contacto
            </h1>
          </div>
          <div style="padding: 32px; background: #f8f9fa; border: 1px solid #e9ecef;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6c757d; font-size: 13px; width: 120px;">Nombre</td>
                <td style="padding: 8px 0; color: #212529; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6c757d; font-size: 13px;">Email</td>
                <td style="padding: 8px 0; color: #212529;">${email}</td>
              </tr>
              ${phone ? `<tr><td style="padding: 8px 0; color: #6c757d; font-size: 13px;">Teléfono</td><td style="padding: 8px 0; color: #212529;">${phone}</td></tr>` : ""}
              ${company ? `<tr><td style="padding: 8px 0; color: #6c757d; font-size: 13px;">Empresa</td><td style="padding: 8px 0; color: #212529;">${company}</td></tr>` : ""}
            </table>
            <hr style="border: none; border-top: 1px solid #dee2e6; margin: 24px 0;" />
            <p style="color: #6c757d; font-size: 13px; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Mensaje</p>
            <p style="color: #212529; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <div style="padding: 16px 32px; background: #e9ecef;">
            <p style="color: #adb5bd; font-size: 11px; margin: 0; text-align: center;">
              Enviado desde el formulario de PlastIndustrialGroup.com
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log(`[contact] email from ${email} sent OK`);
    return res.status(200).json({
      success: true,
      message: "Mensaje enviado correctamente. Nos pondremos en contacto pronto.",
    });
  } catch (err) {
    console.error("[contact] email error:", err.message);
    return res.status(500).json({
      success: false,
      message: "No se pudo enviar el mensaje. Inténtalo de nuevo o contáctanos directamente.",
    });
  }
});

module.exports = router;
