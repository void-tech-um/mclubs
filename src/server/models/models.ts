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
  declare applicationRequired: boolean;
  declare applicationFormLink: string;
  declare linkedIn: string;
  declare facebook: string;
  declare instagram: string;
  declare twitter: string;
  declare website: string;
  declare slack: string;
  declare photoBucket: string;
  declare coverPhoto: string;
  declare bannerPhoto: string;
  declare dues: number;
  declare duesFrequency: string;
  declare popularity: number;
  // declare createdAt: CreationOptional<Date>;
  // declare updatedAt: CreationOptional<Date>;

  declare static associations: {
    favorites: Association<Club, FavoriteClubs>;
    filters: Association<Club, Filters>;
    meetingTimes: Association<Club, MeetingTimes>;
    leadership: Association<Club, Leadership>;
  };
}

export class FavoriteClubs extends Model<
  InferAttributes<FavoriteClubs>,
  InferCreationAttributes<FavoriteClubs>
> {
  declare id: string;
  declare clubUid: ForeignKey<Club["clubUid"]>;
  declare username: ForeignKey<User["username"]>;
}

export class Filters extends Model<
  InferAttributes<Filters>,
  InferCreationAttributes<Filters>
> {
  declare technology: boolean;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare clubUid: ForeignKey<Club["clubUid"]>;
  declare id: string;
}

export class MeetingTimes extends Model<
  InferAttributes<MeetingTimes>,
  InferCreationAttributes<MeetingTimes>
> {
  declare id: string;
  declare clubUid: ForeignKey<Club["clubUid"]>;
  declare day: string;
  declare startTime: string;
  declare endTime: string;
  declare location: string;
}

export class Leadership extends Model<
  InferAttributes<Leadership>,
  InferCreationAttributes<Leadership>
> {
  declare id: string;
  declare clubUid: ForeignKey<Club["clubUid"]>;
  declare name: string;
  declare position: string;
  declare email: string;
  declare linkedIn: string;
}

Leadership.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    linkedIn: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Leadership",
    tableName: "leadership",
  }
);

MeetingTimes.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    clubUid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    day: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "MeetingTimes",
    tableName: "meetingTimes",
  }
);

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
    // createdAt: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    // },
    // updatedAt: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    // },
    applicationRequired: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    applicationFormLink: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    linkedIn: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    facebook: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    instagram: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    twitter: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    slack: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    photoBucket: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    coverPhoto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bannerPhoto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dues: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    duesFrequency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    popularity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Club",
    tableName: "clubs",
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
    createdAt: true,
    updatedAt: true,
  }
);

Filters.init(
  {
    technology: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
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
    modelName: "Filters",
    tableName: "filters",
    createdAt: true,
    updatedAt: true,
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
Club.hasMany(MeetingTimes, {
  sourceKey: "clubUid",
  foreignKey: "clubUid",
  as: "meetingTimes",
});
MeetingTimes.belongsTo(Club, {
  targetKey: "clubUid",
  foreignKey: "clubUid",
});

Leadership.belongsTo(Club, {
  foreignKey: "clubUid",
  targetKey: "clubUid",
});
Club.hasMany(Leadership, {
  foreignKey: "clubUid",
  sourceKey: "clubUid",
});

Filters.belongsTo(Club, { targetKey: "clubUid", foreignKey: "clubUid" });

Club.belongsToMany(User, { through: FavoriteClubs });
