window.angular.module('ngff.controllers.header', [])
  .controller('HeaderCtrl', ['$scope', 'Global',
    function($scope, Global) {
      $scope.global = Global;
      $scope.navbar = [
        {
          "title": "Leagues",
          "link": "leagues"
        },
        {
          "title": "Fantasy Teams",
          "link": "fantasy-teams"
        },
        {
          "title": "NFL Teams",
          "link": "nfl-teams"
        },
        {
          "title": "Players",
          "link": "players"
        }
      ];
    }]);
