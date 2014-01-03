window.angular.module('ngff.services.fantasyTeams', [])
  .factory('FantasyTeams', ['$resource',
    function($resource){
      return $resource(
        'fantasy-teams/:fantasyTeamId',
        {
          fantasyTeamId: '@_id'
        },
        {
          update: {
            method: 'PUT'
          }
        }
      );
    }]);
