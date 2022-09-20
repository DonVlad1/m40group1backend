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

exports.addPosts = async (req, res) => {
    try {
        console.log(req.body)
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