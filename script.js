"use strict";
const books = document.querySelector(".books");
const addBook = document.querySelector("#button");

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages`;
};

const theHobbit = new Book("The Hobbit", "J.R.R Toliken", 295);
const theLOTR = new Book("The Lord of The Rings", "J.R.R Toliken", 300);
const harryPotter = new Book("Harry Potter", "J.K Rowling", 1000);
const noCountry = new Book("No Country for Old Men", "Cormac McCarthy", 1000);
const goneGirl = new Book("Gone Girl", "Gilian Flyn", 300);

let myLibrary = [theHobbit, harryPotter, theLOTR, noCountry, goneGirl];

let myNewBooks = [];

function newBooksToAdd(lib) {
    lib.forEach((book) => {
        myNewBooks.push(book);
        newBookSection(book);
    });
}

newBooksToAdd(myLibrary);

function newBookSection(element) {
    const newBookdiv = document.createElement("div");
    newBookdiv.classList.add("book");
    newBookdiv.innerHTML = element.info();
    books.appendChild(newBookdiv);
    removeButton(newBookdiv);
    readOrNot(newBookdiv);
}

function removeButton(div) {
    const removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.textContent = "Remove Book";
    div.appendChild(removeButton);
    removeButton.addEventListener("click", () => {
        books.removeChild(div);
    });
}

function readOrNot(div) {
    const readOrNotbutton = document.createElement("button");
    div.appendChild(readOrNotbutton);
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
}

addBook.addEventListener("click", (e) => {
    e.preventDefault();
    const nameOfBook = document.querySelector("#nameOfBook").value;
    const author = document.querySelector("#author").value;
    const numberOfPages = document.querySelector("#noOfPages").value;
    const readOrNot = document.querySelector("#read").value;
    const addBook = new Book(nameOfBook, author, numberOfPages, readOrNot);
    myNewBooks.push(addBook);
    newBookSection(addBook);
    removeButton();
    readOrNot();
});