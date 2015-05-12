'use strict';

//https://drive.google.com/a/tomorrowpictures.com/file/d/0B8YhAdfjIlGtWEFUaTU2Wm9Bejg/view?usp=sharing

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
        {src: $sce.trustAsResourceUrl('https://www.googledrive.com/host/0B8YhAdfjIlGtWEFUaTU2Wm9Bejg'), type: 'video/mp4'},
      ],
      plugins: {
        poster: 'assets/images/video-covers/v1.jpg',
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
      }
    };

    function calculate(percentLoaded){
  		var  circle = document.getElementById('percent-loaded');
  		var percentLoadedCircle = document.querySelectorAll("circle#percent-loaded");

  		var r = percentLoadedCircle[0].attributes.r;
  		var radius = Number(r.value);

  		var circumference = Math.PI * (radius * 2);
  		var arcPercent = ((100-percentLoaded)/100);

  		var arcLengthOffset = arcPercent * circumference;

  		percentLoadedCircle[0].style.strokeDashoffset = arcLengthOffset;
  	}

    calculate(40);
  }
}

angular.module('app.act-now')
  .controller('actNowCtrl', actNowCtrl);
