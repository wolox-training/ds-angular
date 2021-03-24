import angular from 'angular';
import bookCover from '../../assets/images/book-cover.png';
import logoWolox from '../../assets/images/LogoWolox.png';

angular.module('app-bootstrap').component('bookList', {
  template: require('./book-list.html'),
  controller: [function () {
    this.bookCover = bookCover;
    this.logoWolox = logoWolox;
  }]
});
