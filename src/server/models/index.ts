import { Sequelize } from "sequelize";
import sequelize from "./db";

import * as user from "./user.repository";

sequelize.sync();

const db = {
  sequelize,
  Sequelize,
  user,
};

export default db;
