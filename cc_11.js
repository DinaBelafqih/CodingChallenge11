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