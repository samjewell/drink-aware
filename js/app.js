var app = angular.module('DrinkInformedApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider.when('/', { 
    templateUrl: 'views/home.html' 
  }).when('/details/', { 
    templateUrl: 'views/details.html' 
  }).when('/start/', { 
    templateUrl: 'views/start.html' 
  }).when('/page/:id', { 
    controller: 'PageController',
    templateUrl: 'views/page.html' 
  }).otherwise({ 
    redirectTo: '/' 
  });
});