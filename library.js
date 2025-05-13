const myLibrary = [];
const tbodyElement = document.querySelector("tbody");



function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, read) {
    newBook = new Book(title, author, read);
    myLibrary.push(newBook);
    generateTableRow(newBook);
}

function generateTableRow(book) {
    const trElement = document.createElement("tr");
    const titleCellElement = document.createElement("td");
    const authorCellElement = document.createElement("td");
    const readCell = document.createElement("td");
    trElement.id = book.id;
    trElement.appendChild(titleCellElement);
    trElement.appendChild(authorCellElement);
    trElement.appendChild(readCell);
    titleCellElement.innerText = book.title;
    authorCellElement.innerText = book.author;
    readCell.innerText = book.read ? "read" : "not read";
    tbodyElement.append(trElement);


    const buttonCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.setAttribute("data-book-id", book.id);
    trElement.appendChild(buttonCell);
    buttonCell.appendChild(removeButton);
    removeButton.addEventListener("click", () => deleteCurrentBook(book.id));
}

function deleteCurrentBook(bookId) {
    const tableRow = document.getElementById(bookId);
    tableRow.remove();
    for (let i = myLibrary.length - 1; i >= 0; i--) {
        if (myLibrary[i].id === bookId) {
            myLibrary.splice(i, 1);
            break;
        }
    }
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
    // generateTable();
    clearDialog();
    event.preventDefault();
    newBookDialog.close();
};

function clearDialog() {
    newBookTitleInput.value = "";
    newBookAuthorInput.value = "";
    readCheckbox.checked = false;
}