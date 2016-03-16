'use strict';

angular.module('testMeanApp.auth', [
  'testMeanApp.constants',
  'testMeanApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
