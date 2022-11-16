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
router.post("/", async (req, res) => {
  console.log(req.body);
  const newUser = await db.user.createUser(req.body);
  res.send(newUser);
});

router.use("/auth", authRouter);

export default router;
