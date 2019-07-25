const Book = require("../app/Book");

describe("Instantiating a book", () => {
  test("it creates a book object", () => {
    const book = new Book("Oryx and Crake", "Margaret Atwood", 10);

    expect(book.title).toBe("Oryx and Crake");
    expect(book.author).toBe("Margaret Atwood");
    expect(book.quantity).toBe(10);
  });
});

xdescribe("addStock()", () => {
  test("allows adding a given quantity of stock", () => {
    const book = new Book("Oryx and Crake", "Margaret Atwood", 10);

    expect(book.quantity).toBe(10);
    
    // We add 5 more books
    book.addStock(5);
    
    expect(book.quantity).toBe(15);
  });

  test("does not allow negative numbers", () => {
    const book = new Book("Oryx and Crake", "Margaret Atwood", 10);

    expect(book.quantity).toBe(10);
    
    // Try adding a negative number of stock
    book.addStock(-5);
    
    // Book quantity has not changed
    expect(book.quantity).toBe(10);
  });
});

xdescribe("removeStock()", () => {
  test("allows removing a given quantity of stock", () => {
    const book = new Book("Oryx and Crake", "Margaret Atwood", 10);

    expect(book.quantity).toBe(10);
    
    // We remove 5 books
    book.removeStock(3);
    
    expect(book.quantity).toBe(7);
  });

  test("does not allow negative numbers", () => {
    const book = new Book("Oryx and Crake", "Margaret Atwood", 10);

    expect(book.quantity).toBe(10);
    
    // Try removing a negative number of stock
    book.removeStock(-5);
    
    // Book quantity has not changed
    expect(book.quantity).toBe(10);
  });

  test("cannot reduce a book to below 0 quantity", () => {
    const book = new Book("Oryx and Crake", "Margaret Atwood", 10);

    expect(book.quantity).toBe(10);
    
    // Try removing 15 books
    book.removeStock(15);
    
    // Book quantity is 0
    expect(book.quantity).toBe(0);
  });
});
