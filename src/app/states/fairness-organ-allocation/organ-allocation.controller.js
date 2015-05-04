'use strict';

// organAllocationCtrl.js
function organAllocationCtrl ($rootScope, $sce, $state, $log) {
  /* jshint validthis:true */
  var vm = this;

  activate();

  function activate() {
    vm.config = {
      preload: 'none',
      sources: [
        {src: $sce.trustAsResourceUrl('https://www.googledrive.com/host/0B9BUn-WivWcpbVJtUHphVV83MGM'), type: 'video/mp4'},
      ],
      plugins: {
        poster: 'assets/images/video-covers/v2.jpg'
      },
      analytics: {
        category: 'WEb ACTs videos',
        label: 'Fairness In Organ Allocation',
        events: {
          ready: true,
          play: true,
          pause: true,
          stop: true,
          complete: true,
          progress: 10
        }
      }
    };
  }
}

angular.module('app.organ-allocation')
  .controller('organAllocationCtrl', organAllocationCtrl);
