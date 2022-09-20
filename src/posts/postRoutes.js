const { Router } = require("express")
const {addPosts, listPosts} = require("./postControllers")
const postRouter = Router()

postRouter.get("/posts", listPosts);
postRouter.post("/posts", addPosts);

module.exports = postRouter