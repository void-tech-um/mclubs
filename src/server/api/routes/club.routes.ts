import express from "express";
import * as controller from "../controller/club.controller";
import { authenticateToken } from "../middleware";

const clubRouter = express.Router();

clubRouter.post("/create", authenticateToken, controller.createClubController);

clubRouter.get("/get", controller.getClubsController);

clubRouter.get("/get/:clubUid", controller.getClubsController);

export default clubRouter;
