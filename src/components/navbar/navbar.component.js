import angular from 'angular';
import logoWolox from '../../assets/images/LogoWolox.png';

angular.module('app-bootstrap').component('navbar', {
  template: require('./navbar.html'),
  controller: ['$state', 'localStorageService',
    function ($state, localStorageService) {
      this.logoWolox = logoWolox;

      this.logout = () => {
        localStorageService.clearAll();
        $state.go('login');
      };
    }]
});
