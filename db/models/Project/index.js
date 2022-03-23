let Schema = require("mongoose").Schema;
let SchemaObjectId = Schema.Types.ObjectId;

// (1) Define object
let ProjectSchema = new Schema({
    title: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
      customID: {
        type: String,
        required: true,
      }
});

ProjectSchema.statics.fetchAll = () => {
    return ProjectSchema.find({});
}


// (5) Export
module.exports = ProjectSchema;