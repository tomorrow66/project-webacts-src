'use strict';

// homeCtrl.js
function homeCtrl ($scope, $http, $state, $interval, $location) {
  /* jshint validthis:true */
  var vm = this;

  activate();

  function activate() {
    vm.intro = [{
      'heading': 'The Facts'
    }];

  }
}

angular.module('app.home')
  .controller('homeCtrl', homeCtrl);
