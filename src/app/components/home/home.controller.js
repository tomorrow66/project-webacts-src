'use strict';

// homeCtrl.js
function homeCtrl ($scope, $http, $state, $interval, $location) {
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
        if(vm.counter > 600) {
          vm.preTestButton.addClass('hide');
          vm.postTestButton.addClass('show');
          // console.log('3');
        }
      },1000);
    };

    $scope.preTest = {
      closeEl: '.close',
      overlay: {
        templateUrl: 'app/components/home/pre-test.html',
        scroll: false
      }
    };

    $scope.postTest = {
      closeEl: '.close',
      overlay: {
        templateUrl: 'app/components/home/post-test.html',
        scroll: false
      }
    };
  }
}

angular.module('app.home')
  .controller('homeCtrl', homeCtrl);
