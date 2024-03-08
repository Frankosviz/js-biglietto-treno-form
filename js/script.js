
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

      let costoBiglietto = prezzoKm * kilometer;

      let offerta = 'Biglietto Standard';

      if (fasciaEta == 'minorenne') {
        costoBiglietto -= (costoBiglietto * 20 / 100);
        offerta = 'Sconto Minorenne';
      } else if (fasciaEta == 'maggiorenne'){
        costoBiglietto -= (costoBiglietto * 40 / 100);
        offerta = 'Sconto Silver';
      }

      document.getElementById('userName').innerHTML = name;
      document.getElementById('offerta').innerHTML = offerta;
      document.getElementById('finalPrice').innerHTML = costoBiglietto;
    }
  );

  let elButtonCancel = document.getElementById('elButtonCancel');

  elButtonCancel.addEventListener('click' , function(){
      

      document.getElementById('userName').innerHTML = '';
      document.getElementById('offerta').innerHTML = '';
      document.getElementById('finalPrice').innerHTML = '';
  })
