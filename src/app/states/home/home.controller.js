'use strict';

// homeCtrl.js
function homeCtrl ($scope, $http, $state, $interval, $location, localStorageService) {
  /* jshint validthis:true */
  var vm = this;

  activate();

  function activate() {
    $scope.$on('$stateChangeSuccess', function(event, toState){
      $scope.isHome = ($state.href === '/');
    });
    vm.intro = [{
      'heading': 'The Facts'
    }];

    vm.preTestButton = angular.element( '#preTest' );
    vm.postTestButton = angular.element( '#postTest' );
    vm.postTestButton.addClass('hide');

    vm.timer = function() {
      vm.counter = 0;
      vm.count = $interval(function () {
        vm.counter++;
        if(vm.counter > 30) {
          vm.preTestButton.addClass('hide');
          vm.postTestButton.addClass('show');
          // console.log('3');
        }
      },1000);
    };


    vm.visiter = function() {
      var visited = false;
      $http.get('http://ipinfo.io/json')
        .success(function(data) {
          vm.location = data;
          vm.ip = data.ip;
          // if ($rootScope.ip) {
          //   console.log('Gotcha');
          // }
          // console.log(vm.ip);

          localStorageService.set('localStorageIP',vm.ip);
          localStorageService.cookie.set('localStorageIP',vm.ip);
          var value = localStorageService.get('localStorageIP');

          // localStorageService.remove('localStorageKey');
          // localStorageService.clearAll();
          // console.log(value);

          if (visited === value) {
            console.log('Your IP has been tracked');
            $location.path('/introduction');
          }

        });
    };

    $scope.preTest = {
      closeEl: '.close',
      overlay: {
        templateUrl: 'app/states/home/pre-test.html',
        scroll: false
      }
    };

    $scope.postTest = {
      closeEl: '.close',
      overlay: {
        templateUrl: 'app/states/home/post-test.html',
        scroll: false
      }
    };
  }
}

angular.module('app.home')
  .controller('homeCtrl', homeCtrl);
