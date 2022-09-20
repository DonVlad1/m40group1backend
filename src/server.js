const express = require("express");
require("./db/connection");
const cors = require("cors")
const userRouter = require("./users/userRoutes")
const movieRouter = require("./movies/movieRouter")
const { tokenCheck } = require("./middleware");

const app = express();
const port = process.env.PORT || 5000

// app.use(express.static("public"))
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(movieRouter);
app.get("/", tokenCheck, (req, res) => {
	res.status(200).send({ message: "You should only see if this if you are logged in" });
  });

app.listen(port, () => {
	console.log(`listening on port ${port}`)
})

app.get("/health", (req, res) => {
	res.status(200).send({ message: "Api working" });
  });
