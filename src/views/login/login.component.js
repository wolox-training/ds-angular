import angular from 'angular';
import logoWolox from '../../assets/images/LogoWolox.png';

angular.module('app-bootstrap').component('login', {
  template: require('./login.html'),
  controller: ['userService', '$state', 'localStorageService',
    function (userService, $state, localStorageService) {
      this.logoWolox = logoWolox;
      this.user = {
        email: '',
        password: ''
      };

      this.login = () => {
        userService.signin(this.user)
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
