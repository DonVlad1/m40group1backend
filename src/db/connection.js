require("dotenv").config();
const { Sequelize } = require("sequelize");

// exports.sequelize = new Sequelize(process.env.DATABASE_URL)

let sequelize;

if (process.env.NODE_ENV === "production")
{

    module.exports.sequelize = new Sequelize(`${process.env.DATABASE_URL} ? sslmode = require`, {
        url: process.env.DATABASE_URI,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false,
            }
        }
    });

} else
{

    module.exports.sequelize = new Sequelize(process.env.DATABASE_URL);
}