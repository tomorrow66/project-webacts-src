'use strict';

angular.module('app.post-study', ['ui.router'])

.config(['$stateProvider',function ($stateProvider) {
  $stateProvider
    .state('post-study', {
      url: '/post-study',
      templateUrl: 'app/components/post-study/post-study.html',
      controller: 'postStudyCtrl as postStudy',
      title: 'Post Study'
    });
}]);
