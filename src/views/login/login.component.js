import angular from 'angular';
import logoWolox from '../../assets/images/LogoWolox.png';

angular.module('app-bootstrap').component('login', {
  template: require('./login.html'),
  controller: [function () {
    this.logoWolox = logoWolox;
  }]
});
