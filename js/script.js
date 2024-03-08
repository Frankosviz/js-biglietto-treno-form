

let nameSurname = document.getElementById('nameSurname');

console.log(nameSurname);

let elKilometers = document.getElementById('elKilometers'); 

console.log(elKilometers);

// let age = document.getElementById('age');

// console.log(age);

let ageMinor = document.getElementById('minor');

console.log(ageMinor);

let ageMajor = document.getElementById('major');

console.log(ageMajor);

let price = parseInt(0.21 * elKilometers);

console.log(price);



let elButton = document.querySelector('.btn.btn-secondary');

console.log(elButton);

// let elButtonCancel = document.getElementById('elButtonCancel');

// console.log(elButtonCancel);

// let elBox = document.querySelector('.disappear');

// console.log(elBox);

 elButton.addEventListener('click' , function(){

      let name = nameSurname.value;

      console.log(name);

      let kilometer = elKilometers.value;

      console.log(kilometer);

      let minorAge = document.getElementById('minor');
      let majorAge = document.getElementById('major');

      console.log(minorAge, majorAge);
      
      if (ageMinor === true){
    
             document.getElementById("userName").innerHTML = `${nameSurname}`;
             document.getElementById("offert").innerHTML = `Offerta economy`;
             document.getElementById("finalPrice").innerHTML = `${((price - (price * 20) / 100).toFixed(2))}€`;
      }

    })

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