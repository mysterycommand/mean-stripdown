window.angular.module('ngff.controllers.fantasyTeams', [])
  .controller('FantasyTeamsCtrl', ['$scope','$routeParams','$location','Global','Leagues','FantasyTeams',
    function($scope, $routeParams, $location, Global, Leagues, FantasyTeams) {

      $scope.global = Global;

      $scope.populateLeagues = function(query) {
        Leagues.query(query, function (leagues) {
          $scope.leagues = leagues;
        });
      };

      $scope.create = function () {
        var fantasyTeam = new FantasyTeams({
          league: this.fantasyTeam.league,
          name: this.fantasyTeam.name,
          players: this.players
        });

        fantasyTeam.$save(function (response) {
          $location.path("fantasy-teams/" + response._id);
        });

        this.league = "";
        this.name = "";
        this.players = [];
      };

      $scope.update = function () {
        var fantasyTeam = $scope.fantasyTeam;

        fantasyTeam.$update(function () {
          $location.path('fantasy-teams/' + fantasyTeam._id);
        });
      };

      $scope.find = function (query) {
        FantasyTeams.query(query, function (fantasyTeams) {
          $scope.fantasyTeams = fantasyTeams;
        });
      };

      $scope.findOne = function () {
        FantasyTeams.get({ fantasyTeamId: $routeParams.fantasyTeamId }, function (fantasyTeam) {
          $scope.fantasyTeam = fantasyTeam;
        });
      };

      $scope.remove = function (fantasyTeam) {
        fantasyTeam.$remove();
        for (var i in $scope.fantasyTeams) {
          if ($scope.fantasyTeams[i] == fantasyTeam) {
            $scope.fantasyteams.splice(i, 1);
          }
        }
      };
    }]);
