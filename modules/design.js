import BookStore from './store.js';
// class design
export default class design {
  // display books
  static displayBooks() {
    const books = BookStore.getBooks();

    books.forEach((book) => {
      design.addBookToUI(book);
    });
  }

  // add book

  static addBookToUI(book) {
    const container = document.querySelector('.container');

    const ul = document.createElement('ul');

    ul.innerHTML = `
      <li>"${book.title}"</li>
      <li>by ${book.author}</li>
     
      <button class="delete" type="button">Remove</button>
    `;
    container.appendChild(ul);
  }

  static removeBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const body = document.querySelector('body');
    const form = document.querySelector('#add-book');
    body.insertBefore(div, form);

    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  // clear input form
  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}
