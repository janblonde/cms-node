'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ui.tinymce',
  'ngCookies',
  'message.flash'
])
.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/admin/login', {templateUrl: 'partials/admin/login.html', controller: 'AdminLoginCtrl'});
  $routeProvider.when('/admin/pages', {templateUrl: 'partials/admin/pages.html', controller: 'AdminPagesCtrl'});
  $routeProvider.when('/admin/add-edit-page.html',{templateUrl:'partials/admin/add-edit-page.html', controller: 'AddEditPageCtrl'});
  $routeProvider.when('/:url', {templateUrl: 'partials/page.html', controller: 'PageCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true);
}])
.config(function($httpProvider) {
    $httpProvider.interceptors.push('myHttpInterceptor');
});
