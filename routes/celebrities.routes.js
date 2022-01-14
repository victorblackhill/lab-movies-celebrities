// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const res = require("express/lib/response");
const { find } = require("./../models/Celebrity.model");
const Celebrity = require("./../models/Celebrity.model");


//helper function that will help me render stuff easily
const renderView = (myRoute, myParams = {}) => {
  return async function (req, res, next) {
    try {
      console.log("rendering view >>>", myRoute);
      res.render(myRoute, myParams);
    } catch (err) {
      next(err);
    }
  };
};

// all your routes here are localhost/celebrities

const sendTest = function (req, res, next) {
  res.send("OK");
};

const renderBody = function (req, res, next) {
  console.log(req.body);
  res.send(req.body);
};

const createCelebrity = async function (req, res, next) {
  try {
    const newCelebrity = { ...req.body };
    const createdCelebrity = await Celebrity.create(req.body);
    console.log("created actor >>>>", createdCelebrity)
    next();
  } catch (err) {
    next(err);
  }
};

const redirectHome = async function (req, res , next){
  try{
    res.redirect("/celebrities")
  }catch(err){
    console.error(err)
  }
}

// List of routes

//these are the parameters to be used in the renders
const occupation = { occupation: ["actor", "singer", "comedian", "unknown"] };

router.get("/", renderView("celebrities/celebrities.hbs"))
router.get("/create", renderView("celebrities/new-celebrity.hbs", occupation));
router.post("/create",createCelebrity,redirectHome);

module.exports = router;
