var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var formsSchema = new Schema({
    sections: []
})

module.exports = mongoose.model("forms", formsSchema)