// you can write js here
const voyelle = ['a', 'e', 'i', 'o', 'u', 'y']; // tableau de voyelle
const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; // tableau de chiffre

let submitButton = document.getElementById('submitButton'); // récupération du bouton submit
let resulte = document.getElementById('resulte');

function checkVoyelle() {
    let input = document.getElementById('inputSentence'); // récupération du champ input
   // fonction qui vérifie si la lettre est une voyelle
   input = input.value;
   input = input.toLowerCase(); // on demande à l'utilisateur de saisir une phrase et un la convertie en muniscule
   input = input.split(''); // on transforme la phrase en tableau de caractère pour pouvoir parcourir le tableau
   console.log(input); // on affiche la phrase dans la console

   if (input.includes(number)) {
      // si le tableau contient des chiffres
      alert('Vous avez saisi des chiffres, les balaine ne les utilise pas');
   } else {
      let out = input.filter((num) => voyelle.includes(num));
      // on filtre le tableau pour ne garder que les voyelles
      console.log(out);
      resulte.innerHTML = out.join('');
   }
}

submitButton.addEventListener('click', checkVoyelle);
