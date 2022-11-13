import sequelize from "./db";
import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  NonAttribute,
  Association,
  ForeignKey,
} from "sequelize";

/** @desc Initialize User model */
export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  declare username: string;
  declare password: string;
  declare email: string;

  get userName(): NonAttribute<string> {
    return this.username;
  }

  //declare items?: NonAttribute<Item[]>;

  //declare static associations: { items: Association<User, Item> };
}

/** @desc Initialize Item model */
export class Club extends Model<
  InferAttributes<Club>,
  InferCreationAttributes<Club>
> {
  //declare id: CreationOptional<number>;
  declare name: string;
  declare pictureLink: string;
  declare description: string;
  declare details: string;
  declare ownerId: ForeignKey<User["username"]>;
  declare owner?: NonAttribute<User>;
}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
  }
);
