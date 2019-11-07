function countBooksByAuthor(author, booksArray) {
  author = author.toLowerCase();
  let total = 0;
  for (let i = 0; i < booksArray.length; i++) {
    const book = booksArray[i];
    if (book.author.toLowerCase().replace("ñ", "n") === author) {
      total++;
    }
  }

  return total;
}

function checkBookByTitle(title) {
  // Your code here
}

function countBooksByFirstLetter(letter) {
  // Your code here
}

function getQuantity(title) {
  // Your code here
}

function getBooksByAuthor(author) {
  // Your code here
}

function checkQuantity(title, quantity) {
  // Your code here
}

module.exports = {
  countBooksByAuthor,
  checkBookByTitle,
  countBooksByFirstLetter,
  getQuantity,
  getBooksByAuthor,
  checkQuantity
};
