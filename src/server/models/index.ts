import { Sequelize } from "sequelize";
import sequelize from "./db";

import * as user from "./user.repository";
import * as club from "./club.repository";

const db = {
  sequelize,
  Sequelize,
  user,
  club,
};

export default db;
