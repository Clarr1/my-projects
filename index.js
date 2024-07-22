// all button elements
let add = document.querySelector(".add");
let removeAll = document.querySelector(".removeAll")
let remove = document.querySelector(".remove");
let check = document.getElementById('checkButton');
let check1 = document.getElementById('checkButton1');

// input elements
let title = document.getElementById("title-input");
let author = document.getElementById("author-input");
let page = document.getElementById("page-input");

// table elements
let books = document.querySelector(".table-row");
let tableBook = document.getElementById("table-book")


// array, all the data will store here
const myLibrary = [];

// add button 
add.addEventListener("click", addBookToLibrary);

function Book(title, author, page){
  // the constructor...
  this.title = title;
  this.author = author;
  this.page = page;

}
function addBookToLibrary() {
  // do stuff here

  let tr = document.createElement("tr");
  tr.style.width = "100%";

  // this newBook will store in array
 let newBook = new Book(title.value, author.value, page.value);
  myLibrary.push(newBook);

 // it will check if the input is empty, if its empty it will remove the input
 if(title.value.trim() === '' || author.value.trim() ===  '' || page.value.trim() === ''){
   alert("Error, no input");
   return;
  }
   // it will if the check button is not check
  if(check.checked === false && check1.checked === false){
    alert('fill all');
    return;
  }
   // check if the the two buttons were checked
  if(check.checked === true && check1.checked === true){
    alert('You checked the two buttons');
    return;
  }


  let table1 = document.createElement('td');
  let table2 = document.createElement('td');
  let table3 = document.createElement('td');
  let table4 = document.createElement('td');
  let table5 = document.createElement('td');

  // the user's input
  table1.textContent = newBook.title;
  table2.textContent = newBook.author;
  table3.textContent = newBook.page;
  table4.innerHTML = '<input type="button" value="Delete" onclick="deleteBooks(this);">';


  table4.setAttribute("style", "border: none; outline: none;");
  table4.style.outline = "none";
   
  // for check button
  check.checked = true;
  if(check.checked){
    table5.textContent = "Already Read";
  }

  if(check1.checked){
    table5.textContent = "I haven't read it";
  }

   //append all the table
  tr.appendChild(table1);
  tr.appendChild(table2);
  tr.appendChild(table3);
  tr.appendChild(table5);
  tr.appendChild(table4);

  
  // append the tr into the parentElement(tableBook)
  tableBook.appendChild(tr);
  
  // it will clear the inputs, once it added;
  title.value = '';
  author.value = '';
  page.value = '';

  check.checked = false;
  check1.checked = false;

  } 

   // delete the table;
  function deleteBooks(deleteButton){

    let deleteBooks = deleteButton.parentNode.parentNode;
    let deleteTable = deleteBooks.parentNode;

    deleteTable.removeChild(deleteBooks);
    
   }
  