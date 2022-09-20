const { Router } = require("express")
const {listPosts} = require("./postControllers")
const postRouter = Router()

postRouter.get("/posts", listPosts);
postRouter.post("/posts", listPosts);

module.exports = postRouter