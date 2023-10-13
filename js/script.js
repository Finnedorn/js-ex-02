//voglio creare un carosello di immagini


//creo un array delle immagini contenute nella cartella img
const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];


/*
  <!-- markup statico delle immagini
        <div class="item active">
            <img src="./img/01.jpg" alt="">
        </div> 
        -->
*/

//creo una const che richiamo il div che dovrà hostare le immagini
const itemsel = document.querySelector('.items');

//se lo volessi pescare con un quaryselectorall?
//const itemsel = document.querySelectorAll('.items')[1];
//essendo quaryselectorall mi genera una html collection quindi dovrò specificare che voglio il primo elemento

//voglio che scorra dall'immagine 0 quindi 
let activeindex = 0;

//creo una let che è una stringa vuota perche voglio che mi crei un div con src gli elementi del mio array e alt i ovvero images 01, 02, 03
let tpl = '';

//il carosello dovra scorrere no? quindi creo un ciclo
for(let i = 0; i < images.length; i++){

    tpl += `
        <div class="item">
        <img src="${images[i]}" alt=" immagine ${i}">
        </div>
    `;
}

//adesso dico al sistema di stampare all'intenro del div tutte le immagini che al momento pero non vedrò perchè il div item che verrà stampato e che conterrà le immagini ha il display none
itemsel.innerHTML += tpl

//richiamo il  primo elemento dell'array nel div tramite getelementsbyclassname che sappiamo che crea una collection
//con classlist.add gli do la classe active che sappiamo da al div che hosta le immagini dell'array un display block
document.getElementsByClassName('item')[activeindex].classList.add('active');


//creo due const ognuna per richiamare i div dei bottoni su e giu 
const nextbtn = document.querySelector('.next');
const prevbtn = document.querySelector('prev');







