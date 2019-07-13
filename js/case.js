//Pobieranie elementów z HTML
const body = document.getElementById("body");
    const counterText = document.getElementById("counterText");
    const btReset = document.getElementById("btReset");
    const selectList = document.getElementsByClassName("selectList");
    const selectListId = document.querySelector("#selectListId");
    const switchDark = document.getElementById("switchDark");
    const line = document.getElementById("line");
const generalBox = document.getElementById("generalBox");
    const box1 = document.getElementById("box1");
    const boxClass = document.getElementsByClassName("box");
    const fotoBox = document.getElementById("fotoBox");
    const foto = document.getElementById("foto");
    const textOnFoto = document.getElementById("textOnFoto");
    let fotoText = document.getElementById("fotoText1");
    const description = document.getElementById("description1");
    const btEdit = document.getElementById("btEdit1");                   //button Edit
    const btDelete = document.getElementById("btDelete1");               //button Delete
    const btDelClass = document.getElementsByClassName("btDelClass");
    const boxCreate = document.getElementById("boxCreate");
    const fotoCreate = document.getElementById("fotoCreate");
    const btAddFotoCreateId = document.getElementById("btAddFotoCreateId");
    const btAddFotoCreateLabel = document.getElementById("btAddFotoCreateLabel");
    const fotoTextCreate = document.getElementById("fotoTextCreate");
    const descriptionCreate = document.getElementById("descriptionCreate");
    const btCancel = document.getElementById("btCancel");                   //button Edit
    const btAdd = document.getElementById("btAdd");
    const btEditCreate = document.getElementById("btEditCreate");
const h2TagAll = document.querySelectorAll("h2");


//>>>>>>>>>-Gdy nie ma JSONA-<<<<<<<<<
//Ustawienie opisu i tytułu dla box1
fotoText.innerText = "Zdjęcie 1";
description.innerText = "Husky Syberyjski";

//Ustawienie opisu i tytułu dla boxCreate
fotoTextCreate.innerText = "Wpisz tytuł";
descriptionCreate.innerText = "Wpisz opis";
//>>>>>>>>>>------------------<<<<<<<<<<

//Licznik zdjęć na stronie
let counter = 1;
let boxCounter = Number(1);
counterText.innerText = "Licznik zdjęć: "+ counter;
function CounterPlus(){
    counterText.innerText = "Licznik zdjęć: "+ ++counter;
    boxCounter = boxCounter + Number(1);
}

function CounterMinus(){
    counterText.innerText = "Licznik zdjęć: "+ --counter;
}

//Tworzenie selectBox1
createSelectBox1();
const selectBox1 = document.getElementById("selectbox1");


//Przycisk RESET
btReset.addEventListener('click',() =>{
    if(confirm("Czy na pewno chcesz zresetować stronę do ustawień fabrycznych?\n Spowoduje to całkowite usunięcie całej dodanej zawartości."))
    {
        $('.box').remove(); //usuwanie wszystkich zdjęć oprócz 1wszego defaultowego

        //usunięcie dzieci selecta
        while(selectListId.firstElementChild){
            selectListId.firstElementChild.remove();
        }
         //Ustawienie box1
        if(box1.style.display == "none"){
            box1.style.display = "inline-block";
            fotoText.innerText = "Zdjęcie 1";
            description.innerText = "Husky Syberyjski";
            counter = 1;
            counterText.innerText = "Licznik zdjęć: "+ counter;
        }
        else{
            fotoText.innerText = "Zdjęcie 1";
            description.innerText = "Husky Syberyjski";
            counter = 1;
            counterText.innerText = "Licznik zdjęć: "+ counter;
        }
        //Ustawienie tytułu i opisu dla boxCreate
        fotoTextCreate.innerText = "Wpisz tytuł";
        descriptionCreate.innerText = "Wpisz opis";
                
        //Ustawianie kolorystyki strony
        if(document.switchDark.checkboxDark.checked = true){
            body.style.backgroundColor = "white";
            sliderOffDark();
            document.switchDark.checkboxDark.checked = false;
        }
        imgCreate.src = ''; //usuwanie zdjęcia, jeżeli zostało zaimportowane
        createSelectBox1();
    }
});


//wczytywanie pliku JSON
fetch("data.json")
  .then(json => json.json()) //zamienia pobrany plik na format json. Jeżeli chcesz inny format wpisz.text() lub .blob() 
  .then(json =>{ //dostęp do właściwości obiektu JSON
    fotoTextCreate.innerText = json.Photo0.title; //title foto pobrane z JSON'a dla foto Create
    descriptionCreate.innerText = json.Photo0.description;
    fotoText.innerText = json.Photo1.title; //title foto pobrane z JSON'a dla foto ostworzonego
    description.innerText = json.Photo1.description;
    //console.log(json);

});
//zmiana klasy boxClass (tylko)
function changeColorDark() {
    for(i=0; i<boxClass.length; i++) {
      boxClass[i].style.backgroundColor = '#8d8d8d';
      boxClass[i].style.border = "1px solid #3a3a3a";
    }
  }

function changeColorWhite() {
    for(i=0; i<boxClass.length; i++) {
      boxClass[i].style.backgroundColor = 'white';
      boxClass[i].style.border = "1px solid #d6d6d6";
    }
}

//Slider (zmiana koloru strony na ciemny)
function sliderOnDark(){
    body.style.backgroundColor = "#5f5f5f";
    box1.style.backgroundColor = "#8d8d8d";
    box1.style.border = "1px solid #3a3a3a";
        boxCreate.style.backgroundColor = "#8d8d8d";
        boxCreate.style.border = "1px solid #3a3a3a";
        imgCreate.style.backgroundColor = "#cdcdcd";
    changeColorDark();

    document.switchDark.checkboxDark.checked = true;
}

function sliderOffDark(){
    body.style.backgroundColor = "white";
    box1.style.backgroundColor = "white";
    box1.style.border = "1px solid #d6d6d6";
        boxCreate.style.backgroundColor = "white";
        boxCreate.style.border = "1px solid #d6d6d6";
        imgCreate.style.backgroundColor = defaultStatus;
    changeColorWhite();

    document.switchDark.checkboxDark.checked = false;
}

switchDark.addEventListener("click", () => {
    if(document.switchDark.checkboxDark.checked == false){
        sliderOnDark();
    }else{
        sliderOffDark();
    }
});
//----------------------------
//Select dla box1
function createSelectBox1(){
    const newSelect = document.createElement("option");
    newSelect.id = "selectbox1";
    newSelect.classList = "selectListEl";
    newSelect.innerText = `${fotoText.innerText}`;
    selectListId.appendChild(newSelect);
}
//Button Edytuj box1
btEdit.addEventListener("click", () => {
    inTitle = prompt("Wpisz tytuł");
    fotoText.innerText = inTitle;
    inDescription = prompt("Wpisz opis");
    description.innerText = inDescription;
    selectBox1.innerText = `${inTitle}`;
});
//Button Usuń dla Box1
    btDelete.addEventListener('click',() =>{
        if(confirm("Czy na pewno chcesz usunąć to zdjęcie?"))
        {
            box1.style.display = "none";
            CounterMinus();

            selectBox1.remove();
        }
    });


// <<<<<<<<<< CREATE >>>>>>>>>>>>>>
//Button Edytuj Create
btEditCreate.addEventListener("click", () => {
    inTitle = prompt("Wpisz tytuł");
    fotoTextCreate.innerText = inTitle;
    inDescription = prompt("Wpisz opis");
    descriptionCreate.innerText = inDescription;
});

//"Button" dodawania zdjęcia z pliku + usuwanie przycisku do dodawania zdjęcia
var openFile = function(event) {
var input = event.target;

var reader = new FileReader();
reader.onload = function(){
    var dataURL = reader.result;
    var imgCreate = document.getElementById('imgCreate');
    imgCreate.src = dataURL;
};
 reader.readAsDataURL(input.files[0]); //zostawia przycisk na zdjęciu
};

//Button Dodaj
btAdd.addEventListener("click", () =>{
        if(fotoTextCreate.innerText !== "Wpisz tytuł" && descriptionCreate.innerText !== "Wpisz opis" && fotoTextCreate.innerText !== "" && descriptionCreate.innerText !== "" && imgCreate.src !== ""){
            CounterPlus();
            //tworzenie nowego elementu w DOM
            insertBefore();

            //Dodawanie właściwości tworzonego obiektu do formatu JSON
            var text = `{ "Photo${boxCounter}" : ` +
            `{ "id":"${boxCounter}", "title":"${fotoTextCreate.innerText}", "description":"${descriptionCreate.innerText}"}}`;
            var obj = JSON.parse(text);
            //console.log(obj);

            //Usuwanie zdjęcia z kreatora po kliknięciu "dodaj"
            imgCreate.src = null;
            fotoTextCreate.innerText = "Wpisz tytuł";
            descriptionCreate.innerText = "Wpisz opis";
    }else{
        alert("Błąd:\n Opis/tytuł nie został dodany lub jest pusty.\n Zdjęcie nie zostało zaimportowane!");
    }
});

//Button Cancel
btCancel.addEventListener('click',() =>{
    if(confirm("Czy na pewno chcesz anulować wprowadzone zmiany?"))
    {
        //reset opisu i tytułu
        fotoTextCreate.innerText = "Wpisz tytuł";
        descriptionCreate.innerText = "Wpisz opis";

        imgCreate.src = ''; //usuwanie zdjęcia po kliknięciu anuluj
    }
});


//Tworzenie nowego elementu box w DOM
function insertBefore() {
    const p = document.querySelector("#generalBox");
    const section = p.firstElementChild; //pobieranie pierwszego child generalBox'a czyli box1
    const newNode = document.createElement("section");
        newNode.id = "box"+boxCounter;
        newNode.classList = "box";
    p.insertBefore(newNode, section);
    //Tworzenie elementu HTML fotoBox
    const el = document.createElement("section");
        el.id = `fotoBox${boxCounter}`;
        el.classList = "fotoBoxClass";
    const div = document.querySelector("#"+newNode.id);
    div.appendChild(el); 
    //Tworzenie elementu HTML wewnąrz section fotoBox (a - do lightboxa)
    const a = document.createElement("a");
    a.id = `aId${boxCounter}`;
    a.setAttribute("data-lightbox", "mygallery");
    a.setAttribute("data-title", `${fotoTextCreate.innerText}`);
    a.href = imgCreate.src;

    const div0 = document.querySelector(`#${el.id}`);
    div0.appendChild(a);
    //Tworzenie elementu HTML wewnątrz fotoBox
    const img = document.createElement("img");
    img.id = `imgCreate${boxCounter}`;
    img.classList = "imgClass";
    img.src = imgCreate.src;
    const div1 = document.querySelector(`#${a.id}`);
    div1.appendChild(img); 
    //Tworzenie elementu HTML - Title
    const el2 = document.createElement("h2");
        el2.classList = "fotoTextClass";
        el2.id = `fotoText${boxCounter}`;
        el2.innerText = inTitle;
    const div2 = document.querySelector("#"+newNode.id);
    div2.appendChild(el2);
    //Tworzenie elementu HTML - description
    const el3 = document.createElement("h4");
        el3.id = `description${boxCounter}`;
        el3.classList = "descriptionClass";
        el3.innerText = inDescription;
    const div3 = document.querySelector("#"+newNode.id);
    div3.appendChild(el3); 
    //Tworzenie elementu HTML - buttons
    const el4 = document.createElement("section");
        el4.id = `buttons${boxCounter}`;
        el4.classList = "buttonsClass";
    const div4 = document.querySelector("#"+newNode.id);
    div4.appendChild(el4);
    //Tworzenie elementu HTML wewnątrz buttons - edit
    const btnEdit = document.createElement("Button");
        btnEdit.id = `btEdit${boxCounter}`;
        btnEdit.classList = "btEditClass";
        btnEdit.innerText = "Edytuj";
    const div5 = document.querySelector("#"+el4.id);
    div5.appendChild(btnEdit);
    //Tworzenie elementu HTML wewnątrz buttons - delete
    const btnDel = document.createElement("Button");
        btnDel.id = `btDelete${boxCounter}`;
        btnDel.classList = "btDelClass";
        btnDel.innerText = "Usuń";
    const div6 = document.querySelector("#"+el4.id);
    div6.appendChild(btnDel);

    //_________Pobieranie nieistniejących elementów (tworzonych live)__________
    const newCreateBtDel = document.getElementById(`btDelete${boxCounter}`);
    const newCreateBox = document.getElementById(`box${boxCounter}`);
    const newCreateBtEdit = document.getElementById(`btEdit${boxCounter}`);
   
        const newCreatefotoText = document.getElementById(`fotoText${boxCounter}`);
        const newCreatedescription = document.getElementById(`description${boxCounter}`);
    //_______

    //Tworzenie usuwania
    newCreateBtDel.addEventListener('click',() =>{
        if(confirm("Czy na pewno chcesz usunąć to zdjęcie?"))
        {
            newCreateBox.remove(); //Usuwanie boxa
            CounterMinus();
            const newSelectToDelete = document.querySelector(`#selectbox${boxCounter}`); //Usuwanie selecta
            newSelectToDelete.remove();
        }
    });

    //Tworzenie edycji
    newCreateBtEdit.addEventListener("click", () => {
        inTitle = prompt("Wpisz tytuł");
        newCreatefotoText.innerText = inTitle;
        inDescription = prompt("Wpisz opis");
        newCreatedescription.innerText = inDescription;
        newSelect.innerText = `${inTitle}`; //zmiana nazwy selecta przy edytowaniu tytułu/opisu
    });

    //Tworzenie selecta
    const newSelect = document.createElement("option");
        newSelect.id = `select${newNode.id}`;
        newSelect.classList = "selectListEl"; // klasa tworzonych elementów select
        newSelect.innerText = `${inTitle}`;
    selectListId.appendChild(newSelect);

    //Zmiana koloru przy switchu true (dark)
    if(document.switchDark.checkboxDark.checked === true){
        changeColorDark();
    }
}

//TODO:
//po wybraniu selecta zostaje powiększone wybrane zdjęcie
//Naprawić select box1 - po resecie i edycji tytułu wyświetla zły tytuł w opcji selecta