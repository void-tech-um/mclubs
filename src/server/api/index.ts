import express from "express";
import authRouter from "./routes/auth.routes";
import db from "../models";

const router = express.Router();

/** @route GET /api */
router.get("/", (req, res) => {
  res.send({
    items: "/api/items",
    auth: "/api/auth",
    url: req.originalUrl,
  });
});

router.use("/auth", authRouter);

export default router;
