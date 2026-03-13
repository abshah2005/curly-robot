import express from "express";
import pool from "../config/db.js";
import redisClient from "../config/redis.js";

const router = express.Router();

router.get("/", async (req, res) => {

  try {

    await pool.query("SELECT 1");

    await redisClient.ping();

    res.status(200).json({
      status: "healthy",
      uptime: process.uptime()
    });

  } catch (err) {

    res.status(500).json({
      status: "unhealthy",
      error: err.message
    });

  }

});

export default router;