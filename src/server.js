const { sequelize } = require("./db/connection")
const express = require("express");
require("./db/connection");
const cors = require("cors")
const app = express()
const userRouter = require("./users/userRoutes")
const postRouter = require("./posts/postRoutes");
const Posts = require("./models/Posts");
const Users = require("./models/Users");
const Sales = require("./models/Sales");

// const { tokenCheck } = require("./middleware");


const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(userRouter);
app.use(postRouter);
// app.get("/", tokenCheck, (req, res) =>
// {
// 	res.status(200).send({ message: "You should only see if this if you are logged in" });
// });



app.get("/health", (req, res) =>
{
	res.status(200).send({ message: "Api working" });
});

// const carApp = async () =>
// {
// 	try
// 	{
// 		await sequelize.sync()
// 		console.log("connection successful")
// 		// sequelize.close()
// 	}

// 	catch (error)
// 	{
// 		console.log("Error happened, plz help")
// 		console.log(error)
// 	}
// }

// carApp()

app.listen(port, async () =>
{
	console.log(`listening on port ${port}`)
	await Posts.sync({alter: true})
	await Users.sync({alter: true})
	await Sales.sync({alter: true})
})