
// Assegnamo le variabili nel button - genera

let elButton = document.querySelector('.btn.btn-secondary');

console.log(elButton);

 elButton.addEventListener('click' , function(){

      const name = document.getElementById('nameSurname').value;

      console.log(name);

      const kilometer = document.getElementById('elKilometers').value;

      console.log(kilometer);

      const fasciaEta = document.getElementById('age').value;

      let prezzoKm = 0.21;

      console.log(prezzo);

      let costoBiglietto = prezzoKm * kilometer;

      let offerta = 'Biglietto Standard';

      if (fasciaEta == 'minorenne') {
        costoBiglietto -= (costoBiglietto * 20 / 100);
        offerta = 'Sconto Minorenne';
      } else if (fasciaEta == 'maggiorenne'){
        costoBiglietto -= (costoBiglietto * 40 / 100);
        offerta = 'Sconto Silver';
      }

      const
    }
  );

//      console.log(older);

//      let finalPrice = price;

//      console.log(finalPrice);

// }) 

// if (age === minorAge.value){
    
//     document.getElementById("userName").innerHTML = `${nameSurname}`;
//     document.getElementById("offert").innerHTML = `Offerta economy`;
//     document.getElementById("finalPrice").innerHTML = `${((price - (price * 20) / 100).toFixed(2))}€`;

// } else if (age === mag65.value){
    
//     document.getElementById("userName").innerHTML = `${nameSurname}`;
//     document.getElementById("offert").innerHTML = `Offerta prime`;
//     document.getElementById("finalPrice").innerHTML = `${((price - (price * 40) / 100).toFixed(2))}€`;
// }

// if (ageMinor === true){
    
//        document.getElementById("userName").innerHTML = `${nameSurname}`;
//        document.getElementById("offert").innerHTML = `Offerta economy`;
//        document.getElementById("finalPrice").innerHTML = `${((price - (price * 20) / 100).toFixed(2))}€`;

// console.log(nameSurname);

// let elKilometers =  

// console.log(elKilometers);

// let age = document.getElementById('age');

// console.log(age);

// let ageMinor = document.getElementById('minor');

// console.log(ageMinor);

// let ageMajor = document.getElementById('major');

// console.log(ageMajor);

// let price = parseInt(0.21 * elKilometers);

// console.log(price);
