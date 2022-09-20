const { Router } = require("express")
const {addPost, listPosts, updatePost, deletePost} = require("./postControllers")
const postRouter = Router()

postRouter.get("/posts", listPosts);
postRouter.post("/posts", addPost);
postRouter.post("/posts/update", updatePost);
postRouter.delete("/posts", deletePost);

module.exports = postRouter