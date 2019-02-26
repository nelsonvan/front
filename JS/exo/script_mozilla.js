lert("coucou");// fonction qui va switcher l'image lorsqu'on clique dessus// on stocke dans la variable monImage la première image du document.
// querySelectorAll récuperait toutes les img.var monImage = document.querySelector('img');// équivalent à querySelector : var monImage = document.querySelector('img')[0];console.log(monImage); //pour que l'image s'affiche dans la console// on va utiliser la méthode addEventListener pour ajouter un écouteur de click sur l'image
// addEventListe,et attend 2 paramètres :
// l'événement (click) et l'action à réaliser lorsque l'événement survient (changer la source de l'image)

monImage.addEventListener('click',function(){
   // fonction anonyme,car il  n'y a pas de nom    //récupérer dans une varialbe maSrc,la valeur actelle de l'attribut src de monImage. On va utiliser la méthode getAttribute() (méthode qu'on utilise sur un objet de notre page), l'argument attendu pour cette méthode est le nom d'un attribut de balise html (ici ca sera src)
   alert('click');    var maSrc = monImage.getAttribute('src');
   console.log(maSrc);    // si (la valeur de la variable maSrc est égale à 'Image/logo_firefox_1.png'

   // ALORS
   // alert("Je suis l'image 1")
   // SINON
   // alert(maSrc + "n'est pas l'image 1")    // première version de cette condition pour tester    /*
/*
      if(condition){

          instruction 1;

      }

      else(

          instruction 2; )

   */

   // Version intermédiaire
   // if (maSrc === "../Image/logo_firefox_1.png") {
   //     alert("Je suis l'image 1, ma source est est : " + maSrc);
   // }
   // else{

   //     alert("Je ne suis pas l'image 1")
   // }    // seconde version  : ICI on va intervertir les images avec la méthode setAttribute qui attend 2 arguments :
   // le 1er : l'attribut ciblé (ici sa sera src)

   // le 2ème: sa nouvelle valeur(ici ca sera Image/logo_firefox_2.png)
   // onveut remplacer la source par la source de la 2eme image          if (maSrc === "../Image/logo_firefox_1.png") {

          alert("Je suis l'image 1, ma source est est : " + maSrc);           // ici on veut remplacer la source par la source de la 2ème image

             monImage.setAttribute('src','../Image/logo_firefox_2.png');

    }

          // ici on veut remplacer la source par la source de la 1ère image

         
/* 

dans le code précedant on a fait 
1/ quandon clique sur l'image (dans la fonction addEventlistener)
2/ on a utilisé la structure conditionelle if else pour voir si la valeur de
l'attribut src est bien egale au chemin de l'image original
3/ si c'est le cans, on change la valeur de cet attribut en lui indiquant, le
chemin vers la seconde image
4/ Si ca n'est pas le cas (ce qui signifie que l'image a été changée)? la valeur
*/

// prochaine recette (fonction) : ajouter un message d'acceuil personnalisé
//on va changé le titre de la page pour inclure un message pour lz visiteur du site
//Ce message sera consérvée quand l'utilisateur duittera le site et si il y revient
//plus tard
//on va conserver ce message dans le cache du naigateur  en utilisent l'API
//webstorage
// Au final, on ajoutera une option sur le bouton, pour pouvoir changer
//l'utilisateur et le message d'acceuil si besoin
// 1er etape : récuperer dans une variable monTitre le 1er h1 du document et 
//l'affiche en console

var monTitre = document.querySelector('h1');
console.log(monTitre);

// 2eme etape : récuperer dans une variable monBouton la premiére
//balise bootom
var 




