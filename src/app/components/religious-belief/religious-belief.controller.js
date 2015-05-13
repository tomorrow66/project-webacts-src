'use strict';

// https://drive.google.com/file/d/0B8YhAdfjIlGtX2h2VFNGd2tHLUk/view?usp=sharing
// religiousBeliefCtrl.js
function religiousBeliefCtrl ($rootScope, $sce, $state, $log) {
  /* jshint validthis:true */
  var vm = this;

  activate();

  function activate() {
    vm.config = {
      preload: 'none',
      sources: [
        {src: $sce.trustAsResourceUrl('https://www.googledrive.com/host/0B8YhAdfjIlGtX2h2VFNGd2tHLUk'), type: 'video/mp4'},
      ],
      plugins: {
        poster: '/assets/images/video-covers/v4.jpg'
      }
    };
  }
}

angular.module('app.religious-belief')
  .controller('religiousBeliefCtrl', religiousBeliefCtrl);
