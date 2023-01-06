"use strict";
const books = document.querySelector(".books");
const addBook = document.querySelector("#button");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    };
}

const theHobbit = new Book("The Hobbit", "J.R.R Toliken", 295, "not read yet");

const theLOTR = new Book(
    "The Lord of The Rings",
    "J.R.R Toliken",
    300,
    "not read yet"
);
const harryPotter = new Book(
    "Harry Potter",
    "J.K Rowling",
    1000,
    "not read yet"
);
const noCountry = new Book(
    "No Country for Old Men",
    "Cormac McCarthy",
    1000,
    "read"
);
const goneGirl = new Book("Gone Girl", "Gilian Flyn", 300, "Not read yet");

let myLibrary = [theHobbit, harryPotter, theLOTR, noCountry, goneGirl];

addBook.addEventListener("click", (e) => {
    e.preventDefault();
    const nameOfBook = document.querySelector("#nameOfBook").value;
    const author = document.querySelector("#author").value;
    const numberOfPages = document.querySelector("#noOfPages").value;
    const readOrNot = document.querySelector("#read").value;
    const addBook = new Book(nameOfBook, author, numberOfPages, readOrNot);
    myLibrary.push(addBook);
    console.log(myLibrary);
    // addBookToLibrary(myLibrary);
    const newBooks = document.createElement("div");
    newBooks.classList.add("book");
    newBooks.innerHTML = addBook.info();
    books.appendChild(newBooks);
    const removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.textContent = "Remove Book";
    newBooks.appendChild(removeButton);
    removeButton.addEventListener("click", () => {
        books.removeChild(newBooks);
    });
    const readOrNotbutton = document.createElement("button");
    newBooks.appendChild(readOrNotbutton);
    readOrNotbutton.textContent = "Not Read";
    readOrNotbutton.classList.add("readOrNot");
    readOrNotbutton.addEventListener("click", () => {
        if (readOrNotbutton.textContent === "Not Read") {
            readOrNotbutton.textContent = "Read";
            readOrNotbutton.style.backgroundColor = "green";
        } else {
            readOrNotbutton.textContent = "Not Read";
            readOrNotbutton.style.backgroundColor = "chocolate";
        }
    });
});

function addBookToLibrary(lib) {
    lib.forEach((element) => {
        const newBook = document.createElement("div");
        newBook.classList.add("book");
        newBook.innerHTML = element.info();
        books.appendChild(newBook);
        const removeButton = document.createElement("button");
        removeButton.classList.add("removeButton");
        removeButton.textContent = "Remove Book";
        newBook.appendChild(removeButton);
        removeButton.addEventListener("click", () => {
            books.removeChild(newBook);
        });
        const readOrNotbutton = document.createElement("button");
        newBook.appendChild(readOrNotbutton);
        readOrNotbutton.textContent = "Not Read";
        readOrNotbutton.classList.add("readOrNot");
        readOrNotbutton.addEventListener("click", () => {
            if (readOrNotbutton.textContent === "Not Read") {
                readOrNotbutton.textContent = "Read";
                readOrNotbutton.style.backgroundColor = "green";
            } else {
                readOrNotbutton.textContent = "Not Read";
                readOrNotbutton.style.backgroundColor = "chocolate";
            }
        });
    });
}

addBookToLibrary(myLibrary);

// let myNewBooks = [];

// function newBooksToAdd() {}

// function addTomyNewBooks() {}