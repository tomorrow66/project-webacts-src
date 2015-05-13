'use strict';

//https://drive.google.com/a/tomorrowpictures.com/file/d/0B8YhAdfjIlGtWEFUaTU2Wm9Bejg/view?usp=sharing
//
//https://drive.google.com/file/d/0B8YhAdfjIlGtQ09VZjdFd0FHaE0/view?usp=sharing

// introductionCtrl.js
function actNowCtrl ($rootScope, $sce, $state, $log) {
  /* jshint validthis:true */
  var vm = this;
  vm.title = $state.current.title;

  activate();

  function activate() {
    vm.config = {
      preload: 'none',
      sources: [
        {src: $sce.trustAsResourceUrl('https://www.googledrive.com/host/0B8YhAdfjIlGtQ09VZjdFd0FHaE0'), type: 'video/mp4'},
      ],
      plugins: {
        poster: '/assets/images/video-covers/v1.jpg'
      }
    };
  }
}

angular.module('app.act-now')
  .controller('actNowCtrl', actNowCtrl);
