//Setting up route
window.app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
    templateUrl: 'views/index.html'
  })
  .when('/nfl-teams', {
    templateUrl: 'views/nfl/list.html'
  })
  .when('/nfl-teams/:nflTeamId', {
    templateUrl: 'views/nfl/view.html'
  })
  .when('/leagues',
  {
    templateUrl: 'views/leagues/list.html'
  })
  .when('/leagues/create',
  {
    templateUrl: 'views/leagues/create.html'
  })
  .when('/leagues/:leagueId/edit',
  {
    templateUrl: 'views/leagues/edit.html'
  })
  .when('/leagues/:leagueId',
  {
    templateUrl: 'views/leagues/view.html'
  })
  .when('/fantasy-teams',
  {
    templateUrl: 'views/fantasy-teams/list.html'
  })
  .when('/fantasy-teams/create',
  {
    templateUrl: 'views/fantasy-teams/create.html'
  })
  .when('/fantasy-teams/:fantasyTeamId/edit',
  {
    templateUrl: 'views/fantasy-teams/edit.html'
  })
  .when('/fantasy-teams/:fantasyTeamId',
  {
    templateUrl: 'views/fantasy-teams/view.html'
  })
  .when('/players',
  {
    templateUrl: 'views/players/list.html'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);

//Removing tomcat unspported headers
window.app.config(['$httpProvider', function($httpProvider, Configuration) {
    //delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider', function($locationProvider) {
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("!");
}]);
