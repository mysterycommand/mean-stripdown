var mongoose = require('mongoose'),
    async = require('async'),
    FantasyTeam = mongoose.model('FantasyTeam'),
    _ = require('underscore');

exports.create = function (req, res) {
  var fantasyTeam = new FantasyTeam(req.body);
  fantasyTeam.owner = req.user;
  fantasyTeam.league = req.body.league;
  fantasyTeam.save();
  res.jsonp(fantasyTeam);
};

exports.show = function(req, res){
  res.jsonp(req.fantasyTeam);
};

exports.fantasyTeam = function(req, res, next, id){
  var FantasyTeam = mongoose.model('FantasyTeam');
  FantasyTeam.load(id, function (err, fantasyTeam) {
    if (err) return next(err);
    if (!fantasyTeam) return next(new Error('Failed to load fantasy team ' + id));
    req.fantasyTeam = fantasyTeam;
    next();
  });
};

exports.all = function(req, res){
 FantasyTeam.find().populate('owner').populate('league').exec(function(err, fantasyTeams) {
   if (err) {
      res.render('error', {status: 500});
   } else {
      res.jsonp(fantasyTeams);
   }
 });
};

exports.update = function(req, res){
  var fantasyTeam = req.fantasyTeam;
  fantasyTeam = _.extend(fantasyTeam, req.body);
  fantasyTeam.save(function(err) {
    res.jsonp(fantasyTeam);
  });
};

exports.destroy = function(req, res){
  var fantasyTeam = req.fantasyTeam;
  fantasyTeam.remove(function(err){
    if (err) {
      res.render('error', {status: 500});
    }  else {
      res.jsonp(1);
    }
  });
};
