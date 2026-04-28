require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const contactRouter = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 4000;

// Security headers
app.use(helmet());

// CORS — allow frontend origin
const allowedOrigins = (process.env.ALLOWED_ORIGINS ?? "http://localhost:3000")
  .split(",")
  .map((o) => o.trim());

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
      cb(new Error(`CORS: origin ${origin} not allowed`));
    },
    methods: ["GET", "POST"],
    optionsSuccessStatus: 200,
  })
);

// Body parsing
app.use(express.json({ limit: "10kb" }));

// Global rate limiter
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: { success: false, message: "Demasiadas peticiones. Inténtalo más tarde." },
  })
);

// Health check
app.get("/health", (_req, res) => res.json({ status: "ok" }));

// Routes
app.use("/api/contact", contactRouter);

// 404
app.use((_req, res) => res.status(404).json({ success: false, message: "Ruta no encontrada" }));

// Global error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ success: false, message: "Error interno del servidor" });
});

app.listen(PORT, () => {
  console.log(`PlastIndustrial API running on port ${PORT}`);
});
