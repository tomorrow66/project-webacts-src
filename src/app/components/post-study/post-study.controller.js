'use strict';

// postStudyCtrl.js
function postStudyCtrl ($rootScope, $sce, $state, $log) {
  /* jshint validthis:true */
  var vm = this;
  vm.title = $state.current.title;

  activate();

  function activate() {

  }
}

angular.module('app.post-study')
  .controller('postStudyCtrl', postStudyCtrl);
