const router = require("express").Router();
const Post = require("../model/Post");

router.post("/post", (req, res) => {
  const { title, des } = req.body;

  if (!title) {
    return res.status(422).json({ error: "Please add post title" });
  }

  if (!des) {
    return res.status(422).json({ error: "Please add post des" });
  }

  const postdata = Post({
    title,
    des,
  });

  Post.create(postdata)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/getposts", (req, res) => {
  Post.find({})
    .sort({ date: "DESC" })
    .limit(500)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
