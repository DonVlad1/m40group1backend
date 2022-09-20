const { sequelize } = require("./db/connection")
const express = require("express");
require("./db/connection");
const cors = require("cors")
// const userRouter = require("./users/userRoutes")

// const { tokenCheck } = require("./middleware");


const port = process.env.PORT || 5000

// app.use(express.static("public"))
// app.use(userRouter);
// app.get("/", tokenCheck, (req, res) =>
// {
// 	res.status(200).send({ message: "You should only see if this if you are logged in" });
// });

// app.listen(port, () =>
// {
// 	console.log(`listening on port ${port}`)
// })

// app.get("/health", (req, res) =>
// {
// 	res.status(200).send({ message: "Api working" });
// });

const app = async (yargsObject) =>
{
	try
	{
		await sequelize.sync()
		console.log("connection successful")
		sequelize.close()
	}

	catch (error)
	{
		console.log("Error happened, plz help")
		console.log(error)
	}

}

app()