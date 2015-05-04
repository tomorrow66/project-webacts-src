'use strict';

angular.module('app.act-now', ['ui.router'])

.config(['$stateProvider',function ($stateProvider) {
  $stateProvider
    .state('act-now', {
      url: '/act-now',
      templateUrl: 'app/states/act-now/act-now.html',
      controller: 'actNowCtrl as actNow',
      title: 'Act Now'
    });
}]);
