var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    name: String,
    nickname: String,
    codes: String,
    manager: String,
    roles: String,
    startDate: Date,
    endDate: Date,
    teamMembers: Number,
    status: String,
    hours: Number,
    type: String,
    notes: String
});

module.exports = mongoose.model('Project', ProjectSchema);