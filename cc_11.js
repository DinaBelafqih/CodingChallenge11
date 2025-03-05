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

    //Task 4 - Implemented Book Borrowing
    lendBook(borrowerId, isbn) { //Add method lendBook()
        let book = this.books.find((bk) => bk.isbn === isbn); //Finding book by isbn using .find()
        let borrower = this.borrowers.find((br) => br.borrowerId === borrowerId); //Finding borrower by borrowerId using .find()
        if (!book) { //If book wasn't found
            console.log(`No book found with ISBN: ${isbn}!`); //Alerting the user
            return;
        } if (!borrower) { //If borrower wasn't found
            console.log(`No borrower found with borrowerId: ${borrowerId}!`); //Alerting the user
            return;
        } if (book.copies > 0) { //Checking to ensure adequate stock
            book.updateCopies(-1); //Subracting using updateCopies()
            borrower.borrowBook(book); //Borrowing book using borrowBook 
            console.log("Book borrowed successfully."); //Alerting the user
        } else { //If no copies are in stock
            console.log(`No copies of ${book.title} in stock!`) //Alerting the user
        };
    };