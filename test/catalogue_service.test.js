const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    // eslint-disable-next-line no-unused-vars
    const catalogue = [
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        quantity: 10
      },
      {
        title: "Dracula",
        author: "Bram Stoker",
        quantity: 0
      },
      {
        title: "Between the Assassinations",
        author: "Aravind Adiga",
        quantity: 9
      },
      {
        title: "Wolf Hal",
        author: "Hilary Mantel",
        quantity: 33
      },
      {
        title: "Bring Up The Bodies",
        author: "Hilary Mantel",
        quantity: 31
      },
      {
        title: "A Place of Greater Safety",
        author: "Hilary Mantel",
        quantity: 11
      },
      {
        title: "Giving Up the Ghost",
        author: "Hilary Mantel",
        quantity: 8
      },
      {
        title: "The Assassination of Margaret Thatcher",
        author: "Hilary Mantel",
        quantity: 43
      },
      {
        title: "The Yellow Wallpaper",
        author: "Charlotte Perkins Gilmán",
        quantity: 12
      },
      {
        title: "Conversations With Friends",
        author: "Sally Rooney",
        quantity: 1
      },
      {
        title: "Normal People",
        author: "Sally Rooney",
        quantity: 2
      },
      {
        title: "Everything I Never Told You",
        author: "Celeste Ng",
        quantity: 6
      },
      {
        title: "2666",
        author: "Robert Bolaño",
        quantity: 17
      },
      {
        title: "By Night In Chile",
        author: "Robert Bolaño",
        quantity: 8
      },
      {
        title: "A Tale of Two Cities",
        author: "Charles Dickens",
        quantity: 3
      },
      {
        title: "Oliver Twist",
        author: "Charles Dickens",
        quantity: 7
      },
      {
        title: "Great Expectations",
        author: "Charles Dickens",
        quantity: 1
      },
      {
        title: "The Blind Assassin",
        author: "Margaret Atwood",
        quantity: 8
      },
      {
        title: "Why Be Happy When You Could Be Normal?",
        author: "Jeanette Winterson",
        quantity: 19
      },
      {
        title: "The Origin of Species",
        author: "Charles Darwin",
        quantity: 50
      }
    ];

    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel", catalogue)).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng", catalogue)).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens", catalogue)).toBe(3);
    });

    test("returns 0 if the book isn't found", () => {
      expect(catalogueService.countBooksByAuthor("JK Rowling", catalogue)).toBe(0);
    });

    test("is not case sensitive", () => {
      expect(catalogueService.countBooksByAuthor("hilary mantel", catalogue)).toBe(5);
    });

    test("is not sensitive to accented characters", () => {
      expect(catalogueService.countBooksByAuthor("robert bolano", catalogue)).toBe(2);
    });
  });
});
