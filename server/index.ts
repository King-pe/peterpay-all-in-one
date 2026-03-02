import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { pool } from "./db";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  // Check database connection
  try {
    await pool.query('SELECT 1');
    console.log('PostgreSQL connected successfully');
  } catch (err) {
    console.error('PostgreSQL connection error:', err);
  }

  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));
  app.use(express.json());

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Example API route to get users
  app.get("/api/users", async (_req, res) => {
    try {
      const result = await pool.query('SELECT * FROM users');
      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch users" });
    }
  });

  // Example API route to get transactions
  app.get("/api/transactions", async (_req, res) => {
    try {
      const result = await pool.query('SELECT * FROM transactions');
      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch transactions" });
    }
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
