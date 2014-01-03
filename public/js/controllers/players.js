window.angular.module('ngff.controllers.players', [])
  .controller('PlayersCtrl', ['$scope', 'Global', 'NFL', 'Players',
    function ($scope, Global, NFL, Players) {
      $scope.global = Global;

      $scope.positions = NFL.positions;
      $scope.nflTeams = NFL.teams;
      $scope.limitCt = 10;

      $scope.find = function (query) {
        Players.query(query, function (players) {
          $scope.players = players;
        });
      };
    }]);
