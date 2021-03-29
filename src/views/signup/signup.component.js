import angular from 'angular';
import logoWolox from '../../assets/images/LogoWolox.png';

angular.module('app-bootstrap').component('signup', {
  template: require('./signup.html'),
  controller: ['userService', '$state', 'localStorageService',
    function (userService, $state, localStorageService) {
      this.logoWolox = logoWolox;
      this.user = {
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        password_confirmation: '',
        locale: 'en'
      };
      this.regexPassword = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]+$/;

      this.signup = () => {
        userService.signup(this.user)
          .then((resp)=>{
            localStorageService.set('access-token', resp.headers('Access-token'));
            localStorageService.set('client', resp.headers('client'));
            localStorageService.set('uid', resp.headers('uid'));
            $state.go('bookList');
          }, (error) => {
          // eslint-disable-next-line no-console
            console.log(error);
          });
      };
    }]
});
