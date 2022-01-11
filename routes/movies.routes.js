// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here are localhost/movies

const sendTest = async function (req, res, next){
    console.log(req.body)
    res.send("ok")
}

router.get("/",sendTest)


module.exports = router;