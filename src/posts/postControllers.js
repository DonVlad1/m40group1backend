const Posts  = require("../models/Posts")

exports.listPosts = async (req, res) =>
{
    try
    {
        const list = await Posts.findAll()
        // console.table(await list.map(value => value.dataValues));
        res.status(200).send(list);
    }
    catch (error)
    {
        console.log(error)
    }
}

exports.addPost = async (req, res) => {
    try {
        const post = await Posts.create(req.body)
        res.status(201).send({ message: "Post created" });
    } catch (error) {
        if (error.code === 11000){
            res.status(409).send({error: error});
        }
        else {
            res.status(500).send({error: error});
        }
    };
}

exports.updatePost = async (req, res) => {
    try {
        await Posts.update({ $set: req.body }, {
            where: {
                post_id: req.body.post_update
            }
        });
        res.status(200).send({message: "Successfully updated post"})
    } catch (error) {
        console.log(error)
        res.status(500).send({message: error})
    }
}

exports.deletePost = async (req, res) => {
    try {
        await Posts.destroy({
            where: {
                post_id: req.body.post_delete
            }
        });
        res.status(200).send({message: "successsfully removed"})
    } catch (error) {
        console.log(error)
        res.status(500).send({message: error})
    }
}