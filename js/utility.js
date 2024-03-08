// funzione importante che utilizzeremo per farci tornare un numero random tra 1 e 100 

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }


// Date

// const oggi = new Date ();
// console.log(oggi);
//  Ci da la data di oggi con l'ora ecc

//  let currentYear = oggi.getFullYear();
//  console.log(currentYear); 
//  Corretto per estrarre anno corrente anche nei prossimi anni


//   A variable or object which has a value is treated as a true boolean value. ‘0’, ‘NaN’, empty string, ‘undefined’, and ‘null’ is treated as false boolean values






// Lezione di oggi in classe

// let elTesto = document.getElementById('testo');

// let elColore = document.getElementById('colore');

// let elForma = document.getElementById('forma');

// let elButton = document.querySelector('.btn.btn-success');

// //console.log(elTesto, elColore, elForma, elButton);

// let elBox = document.querySelector('.box');

// //console.log(elBox);

// // Abbiamo preso tutto cio che ci serve dall html
// //Adesso aggiungiamo un event in questo caso click

// console.log(forma.classList);

// elButton.addEventListener('click' , function(){

//     //console.log('Hai cliccato il bottone');

//     let testo = elTesto.value;
//     let colore = elColore.value;
//     let forma = elForma.value;
//     console.log(testo, colore, forma);
//     let formaClass = (forma === 'circle') ? 'rounded-circle' : '';
//     //'rounded-circle'
//     // elBox.classList.add('bg-black');
//     // elBox.classList.remove('d-none');
//     elBox.innerHTML = testo;

//     //elBox.classList.toggle('bg-black'); prova
//     // elBox.className = '';
//     elBox.className = 'box' + colore + '' + formaClass; // ClassName viene usato così
//     // elBox.classList.add(colore);
//     // elBox.classList.remove('d-none');

// });

// //Aggiungiamo una funzione come secondo valore da passare a elButton