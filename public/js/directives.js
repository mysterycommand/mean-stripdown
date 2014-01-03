window.angular.module('ngff.directives', [])
  .directive('positions', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/players/position-select.html'
    };
  })
  .directive('nflTeams', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/players/nfl-team-select.html'
    };
  })
  .directive('searchCt', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/players/search-limit-select.html'
    };
  });
