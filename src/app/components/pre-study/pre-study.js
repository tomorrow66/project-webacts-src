'use strict';

angular.module('app.pre-study', ['ui.router'])

.config(['$stateProvider',function ($stateProvider) {
  $stateProvider
    .state('pre-study', {
      url: '/pre-study',
      templateUrl: 'app/components/pre-study/pre-study.html',
      controller: 'preStudyCtrl as preStudy',
      title: 'Pre Study'
    });
}]);
