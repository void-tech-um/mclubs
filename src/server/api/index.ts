import express from "express";
import authRouter from "./routes/auth.routes";
import clubRouter from "./routes/club.routes";
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
router.use("/clubs", clubRouter);

export default router;
