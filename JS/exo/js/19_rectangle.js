// alert("coucou");/******1- VARIABLES*****/

//Recherche du bouton dans l'arbre DOM

// le DOM: Document Object Model est une interface de promgrammation d'application

//(API) pour des documents HTML valides et XML bien formés.Il définit la structure

// loiguqe d'un document (au sens large du terme) et la manière d'y accéder et de le

//manipuler.

var bouton = document.getElementById('toggle-rectangle');

//Recherche du rectangle dans l'arbre DOM.

var rectangle= document.querySelector('.rectangle');/********2- FONCTIONS********/

/*

1- function au click sur le bouton

*/

// la méthode .toggle() va ajouter ou supprimer la class(tel un intérrupteur)

function surClicBouton(){

   rectangle.classList.toggle('hide');

}

/*

2- fonction au double-click sur le rectangle

*/

function auDoubleClicRectangle(){

   rectangle.classList.toggle('good');

}

/*

3- A l'entrée du survol du rectangle

*/

// la méthode .add() va ajouter la class CSS.

function auSurvolSourisRectangle(){

   rectangle.classList.add('important');

}

/*

4- A la sortie du survol du rectangle

*/

// la méthode .remove() va ajouter la class CSS.

function aSortieSourisRectangle(){

   rectangle.classList.remove('good');

   rectangle.classList.remove('important');

}

/******************3- ECOUTEURS D'EVENEMENT***************/

/***********-paramètre: l'évement*******

/*******2nd paramètre: la fonction à executer***/

/*

1- Installation d'un gestionnaire d'événement au clic sur le bouton

*/

bouton.addEventListener('click',surClicBouton);

/* la methode "addenventlistener()" met en place une fonction appeler
chaque fois que l'evenement pécifié est remis a la cibl. les cibles
courantes sont un "element" prenant en charge les (comme XMLTpRequest)

2- Installation d'un gestionnaire d'évènement au double clic sur le rectangle

*/

rectangle.addEventListener('dblclick',auDoubleClicRectangle);

/*

3- Installation d'un gestionnaire d'évènement au survol sur le rectangle.

*/

rectangle.addEventListener('mouseover', auSurvolSourisRectangle);

/*

4- Installation d'un gestionnaire d'évènement à la sortie du survol sur le rectangle

*/

rectangle.addEventListener('mouseout', aSortieSourisRectangle);

