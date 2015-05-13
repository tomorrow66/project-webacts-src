'use strict';

angular.module('app.organ-allocation', ['ui.router'])

.config(['$stateProvider',function ($stateProvider) {
  $stateProvider
    .state('fairness-in-organ-allocation', {
      url: '/fairness-in-organ-allocation',
      templateUrl: 'app/components/fairness-organ-allocation/organ-allocation.html',
      controller: 'organAllocationCtrl as organAllocation',
      title: 'Fairness in Organ Allocation'
    });
}]);
