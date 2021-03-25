import angular from 'angular';
import bookCover from '../../assets/images/book-cover.png';

angular.module('app-bootstrap').component('bookList', {
  template: require('./book-list.html'),
  controller: ['bookService', function (bookService) {
    this.bookCover = bookCover;
    this.books = bookService.getBooks();
    this.filter = '';
  }]
}).filter('searchBook', function () {
  return (books, filter) =>
    books.filter((book) => {
      const title = book.title.toLowerCase();
      const author = book.author.toLowerCase();
      return title.includes(filter) || author.includes(filter);
    });
});
