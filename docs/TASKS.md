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

## 3) Implement the catalogue functions

Time to implement the 5 catalogue functions. You have already implemented these earlier in the week, in [programming_fundamentals_002](https://github.com/techreturners/programming_fundamentals_002), but now you need to make sure all the functions work with an _array of objects_ instead of an array of strings.

Tests are already written for the `checkBook` function but you will need to write your own tests for the other functions.

This is likely to take you some time.

Feel free to refer to your previous work for help, and to the [Tasks for programming_fundamentals_002](https://github.com/techreturners/programming_fundamentals_002/blob/master/docs/TASKS.md) if you need a reminder of how the Catalogue Service functions should behave.

## 4) A Book Class

Currently you have created individual book objects withou the use of a class:

```javascript
const catalogue = [
  {title: "The Catcher in the Rye", author: "J.D. Salinger", quantity: 10},
  {title: "Dracula", author: "Bram Stoker", quantity: 0},
  {title: "Between the Assassinations", author: "Aravind Adiga", quantity: 9},
  ...
];
```

However, we might want to create a Class of `Book` to make it easier to create new books that follow a common blueprint, and to encapsulate common behaviour.

Open the file `Book.js` in the `/app` directory and take a look at the class defined in there.

Now open `test/Book.test.js` and look at the tests which have been written for the book class.

The first test should be passing, but all the other tests are disabled, with a little `x` at the beginning of the `describe` block:

```javascript
xdescribe("addStock()", () => {
  // tests here
});

```

Remove the `x` from the beginning of the `addStock()` tests and run `npm test` in the terminal to run the next set of tests too.

```javascript
describe("addStock()", () => {
  // tests here
});
```

You should see the following error:

```
TypeError: book.addStock is not a function
```

## 5) Create an addStock method for a book

Create an `addStock` method inside the `Book` class.

This method should take an argument of a number, and increase the number of books in stock by this number.

Run the tests again to ensure that they all pass.

## 6) Un-x the next test

Now un-x the next test which tests the `removeStock()` method.

Run the tests and see that they fail.

## 7) Create a removeStock method for a book

Create a `removeStock` method inside the `Book` class.

This method should take an argument of a number, and decrease the number of books in stock by this number.

Note that the number of books in stock cannot fall below 0.

Run the tests again to ensure that they all pass.

## 8) An array of Book Objects

Now we should be able to use our `Book` class to create the book objects that are populating our `catalogue` array.

First, we need to **require** the Book class into the file where we're going to use it.

Add this line to the top of the `catalogue_service.js` file:

```javascript
const Book = require("./Book");
```

Then, update each of the objects in the `catalogue` array to be new Book instances:

```javascript
const catalogue = [
  new Book("The Catcher in the Rye", "J.D. Salinger", 10),
  new Book("Dracula", "Bram Stoker", 0),
  new Book("Between the Assassinations", "Aravind Adiga", 9),
  ...
];
```

Update **all** of your book objects so they look like the above.

Your tests should all still pass at this point.

## Written Questions

1. If a book is an object, what is its encapsulated data?

2. Why do we create a new Book for every single test in `Books.test.js`?

3. What data, of a book's encapsulated data, is changeable?

4. Why is representing a book as an object a better idea than representing it as a string?