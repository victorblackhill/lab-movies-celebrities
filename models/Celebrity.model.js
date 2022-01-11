//  Add your code here
const { model, Schema } = require("mongoose");

const celebritySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    enum: ["actor", "singer", "comedian", "unknown"],
  },
  catchPhrase: String,
});

const Celebrity = model("celebrities",celebritySchema);

const celebrity =[{

  name:"person",
  occupation:"actor",
  catchPhrase:"a phrase"
}]

const insert = async () => {
try{
const input = await Celebrity.create(celebrity)
console.log("INSERTED---> > > ",input)
}catch(err){console.error(err)}
}

insert()

module.exports = Celebrity;