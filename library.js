const myLibrary = [];
const tbodyElement = document.querySelector("tbody");
const newBookButton = document.querySelector("#new-book-button");
const newBookDialog = document.querySelector("#new-book-dialog");
const closeDialogButton = document.querySelector("#close-dialog");

newBookButton.addEventListener("click", () => {
    newBookDialog.showModal();
});

closeDialogButton.addEventListener("click", () => {
    newBookDialog.close();
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
    newbook = new Book(title, author, pages, read);
    myLibrary.push(newbook);
}

function generateTableRow(book) {
    const trElement = document.createElement("tr");
    const titleCellElement = document.createElement("td");
    const authorCellElement = document.createElement("td");
    trElement.id = book.id;
    trElement.appendChild(titleCellElement);
    trElement.appendChild(authorCellElement);
    titleCellElement.innerText = book.title;
    authorCellElement.innerText = book.author;
    tbodyElement.append(trElement);
}

function generateTable() {
    myLibrary.forEach(element => {
        generateTableRow(element);
    });
}

addBookToLibrary("The Hobbit", "Dane Miyata", 199, true);
addBookToLibrary("Project Hail Mary", "some guy", 245, true);
addBookToLibrary("Woah this is a book", "Annie Wang", 800, false);
addBookToLibrary("A Dog's Tale", "Ollie the beagle", 610, true);
