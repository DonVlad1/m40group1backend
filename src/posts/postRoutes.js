const { Router } = require("express")
const {addPost, listPosts, updatePost} = require("./postControllers")
const postRouter = Router()

postRouter.get("/posts", listPosts);
postRouter.post("/posts", addPost);
postRouter.post("/posts/update", updatePost);

module.exports = postRouter