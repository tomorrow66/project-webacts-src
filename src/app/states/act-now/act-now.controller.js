'use strict';

// introductionCtrl.js
function actNowCtrl ($rootScope, $sce, $state, $log) {
  /* jshint validthis:true */
  var vm = this;

  activate();

  function activate() {
    vm.config = {
      preload: 'none',
      sources: [
        {src: $sce.trustAsResourceUrl('https://www.googledrive.com/host/0B9BUn-WivWcpWTFxSVFzeGZSX0E'), type: 'video/mp4'},
      ],
      plugins: {
        poster: 'assets/images/video-covers/v1.jpg'
      },
      analytics: {
        category: 'WEb ACTs videos',
        label: 'Act Now',
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

angular.module('app.act-now')
  .controller('actNowCtrl', actNowCtrl);
