'use strict';

// https://drive.google.com/file/d/0B8YhAdfjIlGtMUdGWkhiRER2QkE/view?usp=sharing
// againstMyReligionCtrl.js
function letsTalkAboutLifeCtrl ($rootScope, $sce, $state, $log) {
  /* jshint validthis:true */
  var vm = this;

  activate();

  function activate() {
    vm.config = {
      preload: 'none',
      sources: [
        {src: $sce.trustAsResourceUrl('https://www.googledrive.com/host/0B8YhAdfjIlGtMUdGWkhiRER2QkE'), type: 'video/mp4'},
      ],
      plugins: {
        poster: 'assets/images/video-covers/v5.jpg'
      },
      analytics: {
        category: 'WEb ACTs videos',
        label: 'Let\'s Talk About Life: Donation Intentions',
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

angular.module('app.lets-talk-about-life')
  .controller('letsTalkAboutLifeCtrl', letsTalkAboutLifeCtrl);
