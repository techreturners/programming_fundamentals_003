# Coding Tasks

**Note**

Where applicable, try to do the coding tasks with [ping pong pair programming](http://wiki.c2.com/?PairProgrammingPingPongPattern).

For example, in your pairs, person A could do task 2, observe that the test fails because task 3 has not been completed.

Person B then implements the code for task 3.

You then re-run the test and find that it passes.

Then Person B writes the test and code for task 4.

Person A writes the code and implements the function for task 5 and so on and so on.

## 1) Take a look at the Catalogue Service

Open the file `cataglogue_service.js` and see where we define an array of books.

```javascript
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger (10)",
  "Dracula by Bram Stoker (0)",
  "Between the Assassinations by Aravind Adiga (9)",
  ...
];
```

Knowing what you know now about objects, do you think that the way we have chosen to represent a book is the best way?

How could we better represent a book?

Discuss with your pair.

## 2) Update each book to be an object.

For now, don't worry about Classes.

At the moment, update each string that represents a book to be an object.

So your array might end up looking like this:

```javascript
const catalogue = [
  {title: "The Catcher in the Rye", author: "J.D. Salinger", quantity: 10},
  {title: "Dracula", author: "Bram Stoker", quantity: 0},
  {title: "Between the Assassinations", author: "Aravind Adiga", quantity: 9},
  ...
];
```

Update **every** book in the array and save the file.

## 3) Run the tests for the `countBooksByAuthor` function

The tests for `countBooksByAuthor` are already written.

Run `npm test` in the terminal to run them. See that they fail.

In these tests, we have written **three expectations** in the same test, as 3 examples of the same behaviour. All 3 expectations must pass for the test to pass:

```javascript
describe("catalogueService.countBooksByAuthor", () => {
  test("returns the total number of books written by the given author", () => {
    expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
    expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(2);
    expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
  });
});
```

## 4) Implement the `countBooksByAuthor` function

This function should return the total number of books in the catalogue written by the given author.

For example, there are 5 books by Hilary Mantel and 1 by Celeste Ng.

Go to the `app/catalogue_service.js` file and implement the function so that the tests pass.

## 5) Write a test for the `checkBookByTitle` function

This function receives a title as an argument and should return `true` if a book with this title exists in the array, and `false` otherwise.

E.g.

```javascript
checkBookByTitle("The Origin of Species"); // true
checkBookByTitle("The Chronicles of Narnia"); // false
```

Your test suite now may look as follows:

```javascript
describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(2);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });

  describe("catalogueService.checkBookByTitle", () => {
    test("returns true if the book exists", () => {
      expect(
        catalogueService.checkBookByTitle(
          "The Assassination of Margaret Thatcher"
        )
      ).toBe(5);
    });
  });
});
```

## 6) Implement the `checkBookByTitle` function

Go to the `app/catalogue_service.js` file and implement the function so that the tests you have just written pass.

## 7) The other case

Write another test that ensures the function `checkBookByTitle` returns false when the book does not exists.

Run this test and see whether it passes or fails.

If it fails, you'll need to update your function to ensure it returns `false` if the book is not found.

## 8) The `countBooksByFirstLetter` function

This function should receive a letter as an argument (e.g. "H") and return the total number of books that begin with this letter. Note that the quantity is not relevant here. For example:

```javascript
countBooksByFirstLetter("W"); // returns 2
```

This returns 2 because Wolf Hall and Why Be Happy When You Could Be Normal? both begin with W.

Begin by writing a test, as always, before implementing the function.

## 9) A lowercase letter

What if the `countBooksByFirstLetter` function is given a lowercase letter, e.g. `countBooksByFirstLetter("h")`?

It should still count the books beginning with H, ignoring the case of the letter.

Write a test for this functionality, and if the test doesn't pass, update you function so that it passes.

## 10) The `getQuantity` function

This function should receive a title as an argument (e.g. "The Origin of Species") and return the quantity of this item which is in stock. For example:

```javascript
getQuantity("A Place of Greater Safety"); // returns 11
```

Begin by writing a test, as always, before implementing the function.

## 11) The `getBooksByAuthor` function

This function should receive an author as an argument (e.g. "Robert Bolaño") and return an array of books. For example:

```javascript
getBooksByAuthor("Robert Bolaño");

// Returns:
[
  { title: "2666", author: "Robert Bolaño", quantity: 12 },
  { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8 }
];
```

Begin by writing a test, as always, before implementing the function.

Remember that when testing an array return value you should use `toEqual` and not `toBe` (see yesterday's work for a reminder)

## 12) The `checkQuantity` function

This function should receive a title and a quantity as an argument (e.g. "By Night In Chile" and 4) and return `true` if there are at least as many books in stock as the given quantity, and false otherwise. For example:

```javascript
checkQuantity("By Night In Chile", 4); // true
checkQuantity("By Night In Chile", 100); // false
```

Begin by writing a test, as always, before implementing the function.

## Written Questions

1. If a book is an object, what is its encapsulated data?

2. What data, of a book's encapsulated data, might be changeable?

3. Why is representing a book as an object a better idea than representing it as a string?
