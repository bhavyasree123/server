const router = require("express").Router();
const { publicPosts, privatePosts } = require("../db");
const checkAuth = require("../middleware/checkAuth");

router.get("/public", (req, res) => {
  res.json(publicPosts);
});

router.get("/private", checkAuth, (req, res) => {
  console.log(req.user);   // you can put all the actual logic inside here or
  res.json(privatePosts);  //can make other routes using the same middlewarre
  
});

module.exports = router;
