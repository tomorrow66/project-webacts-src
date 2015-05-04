(function() {
  'use strict';

  // Declare app level module which depends on filters, and services
  angular.module('app', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ui.router',
    'angulartics',
    'angulartics.google.analytics',
    'com.2fdevs.videogular',
    'com.2fdevs.videogular.plugins.controls',
    'com.2fdevs.videogular.plugins.overlayplay',
    'com.2fdevs.videogular.plugins.poster',
    'com.2fdevs.videogular.plugins.buffering',
    'mgcrea.ngStrap',
    'ngMorph',
    'LocalStorageModule',
    'app.home',
    'app.act-now',
    'app.organ-allocation',
    'app.healthcare-delivery',
    'app.religious-belief',
    'app.lets-talk-about-life'
  ])
  .constant('AppSettings', {
    'appTitle': 'Web Acts',
  })
  .config(config)
  .run(run);

  function config(
    $urlRouterProvider,
    $locationProvider,
    localStorageServiceProvider) {
      localStorageServiceProvider
        .setPrefix('projectWebActs')
        .setStorageCookieDomain('projectwebacts.org')
        .setNotify(true, true);

      $urlRouterProvider.otherwise('/'); // Create 404 route
      // use the HTML5 History API
      // $locationProvider.html5Mode(true);
  }

  function run($rootScope, AppSettings, $http, $state, $location) {
    $rootScope.showMainNav = $location.path() !== '/';
    // log location change
    $rootScope.$on('$stateChangeSuccess', function () {
      console.log('$stateChangeSuccess changed!', new Date());
    });
    // change page title based on state
    $rootScope.$on('$stateChangeSuccess', function(event, toState) {
      $rootScope.pageTitle = '';
      $rootScope.pageClass = toState.name;

      if (toState.title) {
        $rootScope.pageTitle += toState.title;
        $rootScope.pageTitle += ' \u2014 ';
      }

      $rootScope.pageTitle += AppSettings.appTitle;

    });
  }

}());