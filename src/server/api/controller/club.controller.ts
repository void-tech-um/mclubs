import * as model from "../../models/club.repository";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

export const createClubController = async (
  req: any,
  res: any
): Promise<void> => {
  const club = req.body;
  console.log(club);
  club.popularity = 0;
  const createdClub = await model.createClub(club).catch((e) => {
    console.log(e);
    return res.status(400).send({
      message: "Club already exists",
    });
  });
  return res.send({
    createdClub: createdClub,
    url: req.originalUrl,
  });
};

export const getClubController = async (req: any, res: any): Promise<void> => {
  const club = req.params.club;
  const foundClub = await model.getClub(club).catch((e) => {
    console.log(e);
    return res.status(400).send({
      message: "Club does not exist",
    });
  });
  return res.send({
    club: foundClub,
    url: req.originalUrl,
  });
};

export const getClubsController = async (req: any, res: any): Promise<void> => {
  const foundClub = await model.getClubs().catch((e) => {
    console.log(e);
    return res.status(400).send({
      message: "Club does not exist",
    });
  });
  return res.send({
    clubs: foundClub,
    url: req.originalUrl,
  });
};

export const updateClubController = async (
  req: any,
  res: any
): Promise<void> => {
  const update = req.body;
  const updatedClub = await model.updateClub(update).catch((e) => {
    console.log(e);
    return res.status(400).send({
      message: "Club does not exist",
    });
  });
  return res.send({
    success: true,
    url: req.originalUrl,
  });
};

export const queryClubsController = async (
  req: any,
  res: any
): Promise<void> => {
  const query = req.query;
  const foundClubs = await model.queryClubs(query).catch((e) => {
    console.log(e);
    return res.status(400).send({
      message: "Club does not exist",
    });
  });
  return res.send({
    clubs: foundClubs,
    url: req.originalUrl,
  });
};
