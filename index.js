let main = document.getElementById("main-container");
let table = document.getElementsByClassName("table1");
let myLibrary = [];

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function book(author,title,pages){
    this.author = author;
    this.title = title;
    this.pages = pages;
    // this.isRead = isRead;
}

function addBookToLibrary(author,title,pages){
    let newBook = new book(author,title,pages);
    myLibrary.push(newBook);
}
let i = 0;
function update(){
    let a,t,p,isR;
    for (i; i < myLibrary.length; i++){
        a = myLibrary[i].author;
        t = myLibrary[i].title;
        p = myLibrary[i].pages;
        

       
        let x = document.createElement('tr');
        document.getElementById("table1").appendChild(x);
        
        var aut = document.createElement('td');
        aut.innerHTML = a;
        aut.style.fontSize = "x-large";
        x.appendChild(aut);

        var tit = document.createElement('td');
        tit.innerHTML = t;
        tit.style.fontSize = "x-large";
        x.appendChild(tit);

        var pag = document.createElement('td');
        pag.innerHTML = p;
        pag.style.fontSize = "x-large";
        x.appendChild(pag);
        
        var boo = document.createElement('td');
        var y = document.createElement("input");
        y.setAttribute("type","checkbox");
        // y.style.height = "10ox";
        boo.appendChild(y);
        x.appendChild(boo);

        

    }
}

// addBookToLibrary("a","s",23,true);
// addBookToLibrary("a","s",23,true);
// addBookToLibrary("a","s",23,true);

console.log(myLibrary);

const frm = document.getElementById("form-add");

function pressed(){
    const value1 = document.getElementById('author');
    const value2 = document.getElementById('title');
    const value3 = document.getElementById('pages');
    // const value4 = document.getElementById('read');
    console.log(value1.value);
    console.log(value2.value);
    console.log(value3.value);
    // console.log(value4.value);

    if (value1.value !== '' ||value2.value !== '' || value3.value !== ''){
        addBookToLibrary(value1.value,value2.value,value3.value);
        update();
        value1.value = ''; value2.value = ''; value3.value = '';
    }
    
    closeForm();
}

function deleteRow() {
    if (myLibrary.length == 0){
        console.log("s");
        alert("NOPE");
    }
    else
    {var j = prompt("Enter the row(starts from 1): ")
    if (j == 0){
        alert("Can't delete the headers!");
    }
    else{
        document.getElementById("table1").deleteRow(j);}
    }
    
    
}

frm.addEventListener("submit",pressed);
