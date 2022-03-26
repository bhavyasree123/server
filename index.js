const express = require("express")

const app = express();

app.use(express.json())

app.use('/auth', require("./routes/auth"))
app.use('/posts', require("./routes/posts"))

app.get('/' , (req, res) => {
    res.send("server started");  
  });

app.listen((4000), () => {
    console.log("Listening on port 4000")
})