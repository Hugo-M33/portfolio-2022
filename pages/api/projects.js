// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let model = require("../../db/models")
let mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URL)


export default function handler(req,res) {
  console.log("QUERY")
  model.Project.find({}).then(result => {
    console.log(result)
    return res.status(200).json(result);
  }).catch(e => {
    console.log(e)
    return res.status(500).text(e);
  }) 
    
}
