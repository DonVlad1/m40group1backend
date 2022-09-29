const { DataTypes } = require("sequelize")
const { sequelize } = require("../db/connection")

// module.exports = function(sequelize, DataTypes) 
const Users = sequelize.define('Users', {
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "username"
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "email"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    bio: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    darkmode: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'Users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "username",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
      {
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "bio",
        unique: false,
        using: "BTREE",
        fields: [
          { name: "bio" },
        ]
      },
      {
        name: "darkmode",
        unique: false,
        using: "BTREE",
        fields: [
          { name: "darkmode" },
        ]
      },
      
    ]
});


module.exports = Users