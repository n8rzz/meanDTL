var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamMemberSchema = new Schema({
    name: String,
    skills: String,
    roles: String,
});

module.exports = mongoose.model('TeamMember', TeamMemberSchema);