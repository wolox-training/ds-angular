import angular from 'angular';
import logoWolox from '../../assets/images/LogoWolox.png';

angular.module('app-bootstrap').component('navbar', {
  template: require('./navbar.html'),
  controller: [function () {
    this.logoWolox = logoWolox;
  }]
});
