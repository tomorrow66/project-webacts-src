'use strict';

// preStudyCtrl.js
function preStudyCtrl ($rootScope, $sce, $state, $log) {
  /* jshint validthis:true */
  var vm = this;
  vm.title = $state.current.title;

  activate();

  function activate() {

  }
}

angular.module('app.pre-study')
  .controller('preStudyCtrl', preStudyCtrl);
