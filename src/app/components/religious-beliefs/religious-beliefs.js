'use strict';

angular.module('app.religious-beliefs', ['ui.router'])

.config(['$stateProvider',function ($stateProvider) {
  $stateProvider
    .state('religious-beliefs', {
      url: '/religious-beliefs',
      templateUrl: 'app/components/religious-beliefs/religious-beliefs.html',
      controller: 'religiousBeliefsCtrl as religiousBeliefs',
      title: 'Religious Beliefs'
    });
}]);
