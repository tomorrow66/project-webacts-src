'use strict';

angular.module('app.religious-belief', ['ui.router'])

.config(['$stateProvider',function ($stateProvider) {
  $stateProvider
    .state('religious-belief', {
      url: '/religious-belief',
      templateUrl: 'app/states/religious-belief/religious-belief.html',
      controller: 'religiousBeliefCtrl as religiousBelief',
      title: 'Religious Belief'
    });
}]);
