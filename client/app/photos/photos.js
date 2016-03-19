'use strict';

angular.module('testMeanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('photos', {
        url: '/photos',
        template: '<photos></photos>'
      });
  });
