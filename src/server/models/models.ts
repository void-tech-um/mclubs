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
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  //declare items?: NonAttribute<Item[]>;

  declare static associations: {
    clubs: Association<User, Club>;
    favorites: Association<User, FavoriteClubs>;
  };
}

/** @desc Initialize Item model */
export class Club extends Model<
  InferAttributes<Club>,
  InferCreationAttributes<Club>
> {
  //declare id: CreationOptional<number>;
  declare clubUid: string;
  declare name: string;
  declare imageUrl: string;
  declare description: string;
  declare owner: ForeignKey<User["username"]>;

  declare static associations: {
    favorites: Association<Club, FavoriteClubs>;
  };
}

export class FavoriteClubs extends Model<
  InferAttributes<FavoriteClubs>,
  InferCreationAttributes<FavoriteClubs>
> {
  declare id: CreationOptional<number>;
  declare clubUid: ForeignKey<Club["clubUid"]>;
  declare username: ForeignKey<User["username"]>;
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
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
  }
);
Club.init(
  {
    clubUid: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Club",
    tableName: "clubs",
    createdAt: false,
    updatedAt: false,
  }
);

FavoriteClubs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  {
    sequelize,
    modelName: "FavoriteClubs",
    tableName: "favoriteclubs",
    createdAt: false,
    updatedAt: false,
  }
);
//hasMany: nothing created in user but the many clubs have foreign key that references this user
User.hasMany(Club, {
  sourceKey: "username",
  foreignKey: "owner",
  as: "clubs",
});
// //belongsTo: foreign key created in club that references the user
// Club.belongsTo(User, {
//   targetKey: "username",
// });

Club.belongsToMany(User, { through: FavoriteClubs });
