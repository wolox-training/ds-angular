import angular from 'angular';
import logoWolox from '../../assets/images/LogoWolox.png';

angular.module('app-bootstrap').component('signup', {
  template: require('./signup.html'),
  controller: [function () {
    this.logoWolox = logoWolox;
    this.user = {
      name: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: ''
    };
    this.regexPassword = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]+$/;

    this.signup = () => {

    };
  }]
});
