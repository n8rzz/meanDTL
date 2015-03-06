var express = require('express');
var router = express.Router();

// project routes
// List all projects
router.get('/projects', function(req, res) {
    var db = req.db;
    db.collection('projects').find().toArray(function(err, items) {
      res.json(items);
    });
});

// create new project
router.post('/projects', function(req, res) {
    var db = req.db;
    var name = req.body.name;
    var nickname = req.body.nickname;
    var code = req.body.codes;
    var manager = req.body.manager;
    var roles = req.body.roles;
    var startDate = req.body.startDate;
    var endDate = req.body.endDate;
    var teamMember = req.body.teamMember.name;
    var status = req.body.status.name;
    var hours = req.body.hours;
    var type = req.body.type;
    var notes = req.body.notes;

    db.collection('projects').insert({
        "name": name,
        "nickname": nickname,
        "codes": code,
        "manager": manager,
        "roles": roles,
        "startDate": startDate,
        "endDate": endDate,
        "teamMember":
            {
                "name": teamMember
            },
        "status": status,
        "hours": hours,
        "type": type,
        "notes": notes
    }, function(err, doc) {
        if (err) {
            res.send({msg: 'Oops, there was a problem!'});
        } else {
            res.send({msg: 'success'});
        }
    });
});

// update existing project
router.put('/projects/:id', function(req, res) {
    var db = req.db;
    var projectToUpdate = req.params.id;
    var doc = { $set: req.body};

    db.collection('projects').updateById(projectToUpdate, doc, function(err, result) {
            res.send((result === 1) ? {msg: 'success'} : {msg: 'error ' + err});
    });
});

// delete existing project
router.delete('/projects/:id', function(req, res) {
    var db = req.db;
    var projectToDelete = req.params.id;
    db.collection('projects').removeById(projectToDelete, function(err, result) {
       res.send((result === 1) ? { msg: 'true' } : { msg: 'error: ' + err });
    });
});



// project status routes
// list project statuses
router.get('/projectStatus', function(req, res) {
   var db = req.db;
    db.collection('projectStatus').find().toArray(function(err, items) {
       res.json(items);
    });
});



// team member routes
// list team members
router.get('/team-members', function(req, res) {
    var db = req.db;
    db.collection('teamMembers').find().toArray(function(err, items) {
      res.json(items);
    });
});



module.exports = router;