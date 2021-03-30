import angular from 'angular';
import bookCover from '../../assets/images/book-cover.png';

angular.module('app-bootstrap').component('bookList', {
  template: require('./book-list.html'),
  controller: ['bookService', function (bookService) {
    this.bookCover = bookCover;
    this.books = [];
    this.filter = '';

    bookService.getBooks()
      .then(({ data }) => {
        this.books = data.page;
      }, (error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }]
}).filter('searchBook', function () {
  return (books, filter) => {
    const text = filter.toLowerCase();
    return books.filter((book) => {
      const title = book.title.toLowerCase();
      const author = book.author.toLowerCase();
      return title.includes(text) || author.includes(text);
    });
  };
});
