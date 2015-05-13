'use strict';

angular.module('app.lets-talk-about-life', ['ui.router'])

.config(['$stateProvider',function ($stateProvider) {
  $stateProvider
    .state('lets-talk-about-life', {
      url: '/lets-talk-about-life',
      templateUrl: 'app/components/lets-talk-about-life/lets-talk-about-life.html',
      controller: 'letsTalkAboutLifeCtrl as letsTalkAboutLife',
      title: 'Let\'s Talk About Life'
    });
}]);
