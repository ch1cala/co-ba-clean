var tasksApp = angular.module('tasksApp', ['ngRoute', 'angularLocalStorage'])

  .config(function($routeProvider){

    $routeProvider
      .when('/', {
        controller:  'ListCtrl',
        templateUrl: 'assets/templates/list.html'
      })
      .when('/edit', {
        controller:  'EditCtrl',
        templateUrl: 'assets/templates/edit.html'
      })
      .otherwise({
        redirectTo: '/'
      });

  })

  .run(function($rootScope, storage){

    storage.bind($rootScope, 'tasks', {defaultValue: []});
    storage.bind($rootScope, 'categories', {defaultValue: []});

    $rootScope.staff = '';

  })

  // nav controller
  .controller('NavCtrl', function($scope, $location){
    $scope.isActive = function(path){
      return $location.path() === path;
    };
  });