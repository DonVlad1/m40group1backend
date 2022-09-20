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

