import express from "express";
import * as controller from "../controller/club.controller";
import { authenticateToken, checkClubOwner } from "../middleware";

const clubRouter = express.Router();

clubRouter.post("/create", authenticateToken, controller.createClubController);

clubRouter.get("/get", controller.getClubsController);

clubRouter.get("/get/:clubUid", controller.getClubsController);

clubRouter.get("/query", controller.queryClubsController);

clubRouter.put(
  "/update/:clubUid",
  authenticateToken,
  checkClubOwner,
  controller.updateClubController
);

export default clubRouter;
