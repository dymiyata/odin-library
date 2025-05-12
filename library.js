const myLibrary = [];
const tbodyElement = document.querySelector("tbody");



function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, read) {
    newbook = new Book(title, author, read);
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
    while (tbodyElement.firstChild) {
        tbodyElement.removeChild(tbodyElement.lastChild);
    }
    myLibrary.forEach(element => {
        generateTableRow(element);
    });
}

addBookToLibrary("The Hobbit", "Dane Miyata", true);
addBookToLibrary("Project Hail Mary", "some guy", true);
addBookToLibrary("Woah this is a book", "Annie Wang", false);
addBookToLibrary("A Dog's Tale", "Ollie the beagle", true);
generateTable();




const newBookButton = document.querySelector("#new-book-button");
const newBookDialog = document.querySelector("#new-book-dialog");
const closeDialogButton = document.querySelector("#close-dialog");
const newBookTitleInput = document.querySelector("#ftitle");
const newBookAuthorInput = document.querySelector("#fauthor");
const readCheckbox = document.querySelector("#fread");
const submitNewBookButton = document.querySelector("#fsubmit");


newBookButton.addEventListener("click", () => {
    newBookDialog.showModal();
});

closeDialogButton.addEventListener("click", () => {
    newBookDialog.close();
});

submitNewBookButton.addEventListener("click", (event) => submitNewBook(event));

function submitNewBook(event) {
    addBookToLibrary(newBookTitleInput.value, newBookAuthorInput.value, readCheckbox.checked);
    generateTable();
    clearDialog();
    event.preventDefault();
    newBookDialog.close();
};

function clearDialog() {
    newBookTitleInput.value = "";
    newBookAuthorInput.value = "";
    readCheckbox.checked = false;
}