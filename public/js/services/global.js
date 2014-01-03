window.angular.module('ngff.services.global', [])
  .factory('Global', function() {
    var user = window.user;
    return {
      currentUser: function() {
        return user;
      },
      isSignedIn: function() {
        return !!user;
      }
    };
  });