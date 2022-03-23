// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let model = require("../../../db/models");
let mongoose = require("mongoose");
import formidable from "formidable";
import { resolve } from "path";
mongoose.connect(process.env.MONGODB_URL);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const projectID = req.query.pid;
  if (req.method === "POST") {
    const data = await new Promise((resolve, reject) => {
      const form = new formidable.IncomingForm();
      form.parse(req, (err, fields, files) => {
        fields.desc = fields.description
        delete fields.description
        resolve(fields);
      });
    });
    
    
    const myProject = await model.Project.findOne({ customID: projectID })
    myProject.title = data.title
    myProject.desc = data.desc
    myProject.customID = data.customID
    myProject.save()
    return res.status(200).json(data)
  }

  
  model.Project.findOne({ customID: projectID })
    .then((result) => {
      console.log(result);
      return res.status(200).json(result);
    })
    .catch((e) => {
      console.log(e);
      return res.status(500).send(e);
    });
}
