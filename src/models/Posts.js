const { DataTypes } = require("sequelize")
const { sequelize } = require("../db/connection")

const Posts = sequelize.define('Posts', {
    post_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    price: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    images: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    make: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    model: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    drivechain: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    manufacture_year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    miles: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    colour: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    num_doors: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    text: {
      type: DataTypes.STRING(5000),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Posts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "post_id" },
        ]
      },
    ]
});

module.exports = Posts