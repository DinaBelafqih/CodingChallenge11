//Task 1 - Created Book Class
class Book {
    constructor(title, author, isbn, copies) { //Setting up class constructor with specified properties
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    };
    getDetails(){ //Add a method getDetails()
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`; //returns a formatted string of book details
    };
    updateCopies(quantity){ //Add a method updateCopies(quantity)
        this.copies += quantity; //modifies the available copies
    };
};

//Test Case 1
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5); //Creating a new book assigned to book1
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1); //Using updateCopies to modifiy the copies in stock
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

//Task 2 - Created Borrower Class
class Borrower {
    constructor(name, borrowerId) { //Setting up class constructor with specified properties
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    };
    borrowBook(book){ //Add a method borrowBook(book)
        this.borrowedBooks.push(book); //adds a book title to borrowedBooks
    };
    returnBook(book){ //Add a method returnBook(book)
        let index = this.borrowedBooks.indexOf(book); //Finds the index of the book
        if (index !== -1) { //If the index was found
            this.borrowedBooks.splice(index, 1); //removes the book at index from borrowedBooks using splice
        } else {
            console.log(`The book "${book.title}" was not checked out by this borrower.`)
        };
    };
};

//Test Case 2
const borrower1 = new Borrower("Alice Johnson", 201); //Creating a new borrower assigned to borrower1
borrower1.borrowBook("The Great Gatsby"); //Testing borrowBook()
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby"); //Testing returnBook()
console.log(borrower1.borrowedBooks);
// Expected output: []

//Task 3 - Created Library Class
class Library {
    constructor(parameters) { //Setting up class constructor with specified empty arrays
        this.books = [];
        this.borrowers = [];
    };
    addBook(book) { //Add method addBook(book)
        this.books.push(book); //Adds a new book to the library.
    };
    listBooks() { //Add method listBooks()
        this.books.forEach(book => { //Loops through books using forEach
            console.log(book.getDetails()); //Runs and logs getDetails() forEach book
        });
    };