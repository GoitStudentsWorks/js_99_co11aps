import './js/active-page-link.js';
import './js/buttom-switch.js';
import './js/active-page-menu.js';
import './js/mobile-menu.js';
import './js/active-page-link.js';
import './js/buttom-switch.js';
import './js/active-page-menu.js';
import './js/mobile-menu.js';
import './js/storage.js';
import bookStackImage from './images/books-stack-mobile.png';

const STORAGE_KEY = 'storage-of-books';
const shoppingListUl = document.querySelector('.shopping-list');

//повідомлення про відсутність книг
const emptyMessageContainer = document.createElement('div');
emptyMessageContainer.classList.add('empty-message');
emptyMessageContainer.innerHTML = `
  <p>This page is empty, add some books and proceed to order.</p>
  <img 
    class="book-stack-image"
    srcset="${bookStackImage} 767w, 
            ${bookStackImage} 768w" 
    sizes="(max-width: 767px) 265px, 100vw" 
    src="${bookStackImage}" 
    alt="Empty Book Stack"  
  />
`;
// отримання збережених книг з localStorage
async function getStoredBooks() {
  try {
    const storedBooks = await new Promise((resolve, reject) => {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        resolve(JSON.parse(data));
      } else {
        resolve([]);
      }
    });
    console.log('Stored books:', storedBooks);
    return storedBooks;
  } catch (error) {
    console.error('Error getting stored books:', error);
    throw error;
  }
}
// Функція для відображення списку книг
async function renderBooks() {
  try {
    const storedBooks = await getStoredBooks();
    shoppingListUl.innerHTML = '';
    if (Array.isArray(storedBooks) && storedBooks.length > 0) {
      storedBooks.forEach(book => {
        const li = document.createElement('li');
        li.appendChild(createBookCard(book));
        shoppingListUl.appendChild(li);
      });
    } else {
      // Якщо немає збережених книг, вивести повідомлення про відсутність
      shoppingListUl.appendChild(emptyMessageContainer);
    }
  } catch (error) {
    console.error('Error rendering books:', error);
  }
}
// Функція для створення карти книги
function createBookCard(book) {
  const card = document.createElement('div');
  card.classList.add('book-card');
  card.innerHTML = `
    <ul class="card-list">
      <li class="card-book">
        <div class="information-card">
          <div>
            <img class="book-cover" src="${book.image}" alt="${book.title}" />
          </div>
          <div class="data-or-books-container" >
            <h2 class="book-title">${book.title}</h2>
            <h3 class="book-category">${book.bookCategory}</h3>
            <p class="book-description">${book.title}</p>
            <p class="book-author">${book.author}</p>
            <ul class="market-place-list">
              <li class="market-link" width="32" height="11">
                <img class="market-image" src="/images/amazon-logo.png" alt="Marketplace-Image">
              </li>
              <li class="market-link" width="16" height="16">
                <img class="market-image" src="/images/apple-books-logo.png" alt="Marketplace-Image">
              </li>
            </ul>
            <button class="remove-book-btn" data-book-id="${book._id}">
              <svg width="38" height="38" class="remove-icon">
                <use href="/images/icons.svg#icon-dump"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>
    </ul>
  `;
  return card;
}
// Функція для видалення елемента з localStorage за ID
async function removeBookFromLocalStorage(bookId) {
  try {
    const storedBooks = await getStoredBooks();
    const updatedBooks = storedBooks.filter(book => book._id != bookId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBooks));
    renderBooks(updatedBooks);
  } catch (error) {
    console.error('Error removing book from localStorage:', error);
  }
}
const container = document.querySelector('.shopping-list');
container.addEventListener('click', async event => {
  const removeButton = event.target.closest('.remove-book-btn');
  if (removeButton) {
    const bookId = removeButton.getAttribute('data-book-id');
    console.log('Remove button clicked for book ID:', bookId);
    await removeBookFromLocalStorage(bookId);
  }
});
renderBooks();
