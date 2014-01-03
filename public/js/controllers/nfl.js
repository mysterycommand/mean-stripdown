window.angular.module('ngff.controllers.nfl', [])
  .controller('NFLCtrl', ['$scope', '$routeParams', 'Global', 'NFL',
    function($scope, $routeParams, Global, NFL) {
      $scope.global = Global;

      $scope.nflTeams = NFL.teams;
      $scope.nflTeam = NFL.teams[$routeParams.nflTeamId];
    }]);
