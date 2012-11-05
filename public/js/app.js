'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.resources']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: HomeController});
    $routeProvider.when('/findus', {templateUrl: 'partials/findus.html', controller: FindUsController});
    $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: ContactController});
    $routeProvider.when('/approach', {templateUrl: 'partials/approach.html', controller: AboutController});
    $routeProvider.when('/technology', {templateUrl: 'partials/technology.html', controller: AboutController});
    $routeProvider.when('/testimonial', {templateUrl: 'partials/testimonials.html', controller: AboutController});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
