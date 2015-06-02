'use strict';

angular.module('nodeFiddle.controllers', []);
angular.module('nodeFiddle.services', []);
angular.module('nodeFiddle.directives', []);

angular.module('myApp', [
  'ui.router',
  'ngResource',
  'ui.bootstrap',
  'nodeFiddle.controllers',
  'nodeFiddle.services',
  'nodeFiddle.directives'
]);

angular.module('nodeFiddle').config(function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.when('', '/home');

  $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
          });
})

.run(function() {

});
