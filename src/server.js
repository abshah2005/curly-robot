import express from "express";
import dotenv from "dotenv";
import healthRoutes from "./routes/health.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/health", healthRoutes);

app.get("/", (req, res) => {
  res.send("Node API running");
});

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

process.on("SIGTERM", () => {

  console.log("SIGTERM received");

  server.close(() => {

    console.log("Server closed");

    process.exit(0);

  });

});