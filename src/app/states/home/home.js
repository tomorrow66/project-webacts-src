'use strict';

angular.module('app.home', ['ui.router'])

.config(['$stateProvider',function ($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/states/home/home.html',
      controller: 'homeCtrl as home',
      title: 'Home'
    });
}]);
