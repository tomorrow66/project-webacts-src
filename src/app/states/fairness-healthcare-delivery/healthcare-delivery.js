'use strict';

angular.module('app.healthcare-delivery', ['ui.router'])

.config(['$stateProvider',function ($stateProvider) {
  $stateProvider
    .state('fairness-in-healthcare-delivery', {
      url: '/fairness-in-healthcare-delivery',
      templateUrl: 'app/states/fairness-healthcare-delivery/healthcare-delivery.html',
      controller: 'healthcareDeliveryCtrl as healthcareDelivery',
      title: 'Fairness in Healthcare Delivery'
    });
}]);

