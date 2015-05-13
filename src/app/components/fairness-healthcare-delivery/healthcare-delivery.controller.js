'use strict';

// https://drive.google.com/file/d/0B8YhAdfjIlGtbzVnRWZyMmlsZm8/view?usp=sharing
// healthcareDeliveryCtrl.js
function healthcareDeliveryCtrl ($rootScope, $sce, $state, $log) {
  /* jshint validthis:true */
  var vm = this;

  activate();

  function activate() {
    vm.config = {
      preload: 'none',
      sources: [
        {src: $sce.trustAsResourceUrl('https://www.googledrive.com/host/0B8YhAdfjIlGtbzVnRWZyMmlsZm8'), type: 'video/mp4'},
      ],
      plugins: {
        poster: '/assets/images/video-covers/v3.jpg'
      }
    };
  }
}

angular.module('app.healthcare-delivery')
  .controller('healthcareDeliveryCtrl', healthcareDeliveryCtrl);
