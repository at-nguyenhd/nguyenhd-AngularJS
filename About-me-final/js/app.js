// Code goes here
var app = angular.module('spaApp',['ngRoute', 'ngSanitize']);


app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/home', {
          templateUrl: 'pages/home.html',
          controller: 'HomeController'
        })
        .when('/contact', {
          templateUrl: 'pages/contact.html',
          controller: 'ContactController' 
        })
        .when('/profile', {
          templateUrl: 'pages/profile.html',
          controller: 'ProfileController'
        })
        .when('/exprience', {
          templateUrl: 'pages/exprience.html',
          controller: 'ExprienceController'
        })
        .when('/skill', {
          templateUrl: 'pages/skill.html',
          controller: 'SkillController'
        })
        .when('/chord', {
          templateUrl: 'pages/chord.html',
          controller: 'ChordController'
        })
        .when('/details/:id', {
          templateUrl: 'pages/details.html',
          controller : 'ChordDetailsController',
        })
        .when('/list', {
          templateUrl: 'pages/list.html',
          controller : 'ListController',
        })
        .otherwise({
          redirectTo: '/home'
        });
    }
  ])
  .controller('ProfileController',['$scope', function($scope) {
    $scope.flash = 'This is profile page, hihi!';
  }])
  .controller('HomeController', function($scope) {
  })
  .controller('ContactController', function($scope) {
  })
  .controller('ExprienceController', function($scope) {
  })
  .controller('SkillController', function($scope) {
  })
  .controller('ChordController', function($scope) {
  })
  .controller('ListController', function($scope) {
  })
  .app.controller('ChordDetailsController',
  ['$scope', 'getListChordDetails', '$routeParams',function($scope, getListChordDetails, $routeParams){
  }])
  .controller('ContactDetailController', ['$scope', '$routeParams',
    function($scope, $routeParams) {
    }
  ]);