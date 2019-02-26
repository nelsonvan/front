// alert("coucou");



// fonction qui va switcher l'image lorsqu'on clique dessus



// on stocke dans la variable monImage la première image du document.

// querySelectorAll récuperait toutes les img.



var monImage = document.querySelector('img'); // on appel une balise



// équivalent à querySelector : var monImage = document.querySelector('img')[0];



console.log(monImage); //pour que l'image s'affiche dans la console



// on va utiliser la méthode addEventListener pour ajouter un écouteur de click sur l'image

// addEventListe,et attend 2 paramètres : 

// l'événement (click) et l'action à réaliser lorsque l'événement survient (changer la source de l'image)

monImage.addEventListener('click',function(){

    // fonction anonyme,car il  n'y a pas de nom



    //récupérer dans une varialbe maSrc,la valeur actelle de l'attribut src de monImage. On va utiliser la méthode getAttribute() (méthode qu'on utilise sur un objet de notre page), l'argument attendu pour cette méthode est le nom d'un attribut de balise html (ici ca sera src)

    alert('click');



    var maSrc = monImage.getAttribute('src'); 

    console.log(maSrc);





    

    // si (la valeur de la variable maSrc est égale à 'Image/logo_firefox_1.png'

    // ALORS

    // alert("Je suis l'image 1")

    // SINON

    // alert(maSrc + "n'est pas l'image 1")



    // première version de cette condition pour tester



    /*

       if(condition){

           instruction 1;

       }                 

       else(

           instruction 2;



       )   

    */

    // Version intermédiaire

    // if (maSrc === "../Image/logo_firefox_1.png") {

    //     alert("Je suis l'image 1, ma source est est : " + maSrc);

    // }

    // else{

    //     alert("Je ne suis pas l'image 1")

    // }

      





    // seconde version  : ICI on va intervertir les images avec la méthode setAttribute qui attend 2 arguments : 

    // le 1er : l'attribut ciblé (ici sa sera src)

    // le 2ème: sa nouvelle valeur(ici ca sera Image/logo_firefox_2.png)

    // onveut remplacer la source par la source de la 2eme image



          if (maSrc === "../Image/logo_firefox_1.png") {

           alert("Je suis l'image 1, ma source est est : " + maSrc);



           // ici on veut remplacer la source par la source de la 2ème image

              monImage.setAttribute('src','../Image/logo_firefox_2.png');

     }

          else{

              alert("Je suis l'image2");

              monImage.setAttribute('src','../Image/logo_firefox_1.png');

           // ici on veut remplacer la source par la source de la 1ère image

     }



     

    }); // FIN E LA FONCTION D'INVERSION DES IMAGES



/*



     Dans le code précédent on a fait :



     1/ Quand on clique sur l'image (dans la fonction addEventListener)

     2/ On a utilisé la structure conditionnelle if else pour voir si la valeur de l'attribut src est égale au chemin de l'image originale.

     3/ Si c'est le cas, on change la valeur de cet attribut en lui indiquant le chemin vers la seconde image.

     4/ Si ce n'est pas le cas(ce qui signifie que l'image a été changée), la valeur de l'attribut src revient à sa valeur initiale

     */





    /* Prochaine recette (fonction) : ajouter un message d'accueil personnalisé

   On va changer le titre de la page pour inclure un message pour le visiteur du site.

   Ce message sera conservé quand l'utilisateur quittera le site et si il y revient plus tard.

   On va conserver ce message dans le cache du navigateur en utlisant l'API Webstorage

   Au final, on ajoutera une option sur le bouton,pour pouvoir changer l'utilisateur et le message d'accueil si besoin.

   */



  // 1ère étape : récupérer dans une variable monTitre le 1er h1 du document et l'afficher en console.



        var monTitre = document.querySelector('h1');

        console.log(monTitre);



// 2eme Etape : récupérer dans une variable monBouton la première balise button du document



        var monBouton = document.querySelector('button');

        console.log(monBouton);



// Prépare la fonction du message d'accueil (qui sera invoquée,déclenchée plus tard)



        function definirNomUtilisateur(){

            var monNom = prompt('Ecris ton prénom'); //alert avec champs de saisi que l'on doit écrire

            localStorage.setItem('nomUtilisateur', monNom); 

            // celà permet de stocker le nom d'utilisateur dans le cache du navigateur 

            //localStockage est une fonction de l'api

            monTitre.textContent = " Bienvenue " + monNom;

        }



//   La suite va être : tester si le nom n'est pas dans le cache.

// s'il n'y est pas,on demande avec prompt son nom à l'utilisateur (déclenche la fonction definirNomUtilisateur)

//Si il y est,si le nom est deja dans le cache,on le récupère et on l'affiche dans le titre



// ON VA FAIRE CE TEST APRES



// pour tester ,vider le localStorage

// localStorage.clear();

        

        if(!localStorage.getItem('nomUtilisateur')){

            alert('Le cache est vide');

            definirNomUtilisateur();

            // Instruction 1

        }

        else{

            var nomEnregistre = localStorage.getItem('nomUtilisateur');

            monTitre.textContent = " Bienvenue à nouveau " + nomEnregistre ;   // Va chercher le nom d'utilisateur dans le cache

            // Instruction 2

        }



// Au clic sur le bouton,invoquer la fonction définirNomUtilisateur()





        monBouton.addEventListener('click', function(){

            definirNomUtilisateur();

        })



        /* EXPLICATION DE LA FONCTION : 

    Cette fonction utilise la méthode prompt() qui affiche une boite de dialogue, un peu comme une alert() sauf qu'elle permet à l'utilisateur  de saisir des  données  et de les enregistrés dans une variable qd l'utilisateur clique sur ok

    Dans notre exemple, on demande à l'utilisateur de saisisr son nom.

    Ensuite nous appelons l'API localStorage qui permet de stocker des données dans le navigateur pour pouvoir les réutiliser ultérieurement.

    Nous utilisons la fonction setIem de cette API pour stocker la donnée qui nous intéressent dans un conteneur appelé nomUtilisateur.

    La valeur stockée ici est la valeur de la variable monNom qui contient le nom saisie par l'utilsiateur dans le prompt.

    Au final, on utilise la propriété textContent du titre pour lui affecter un nouveau contenu */





    // Le bloc de la conditionnelle if else, utilise l'opérateur de négation NON(Le point d'exclamation) pour vérifier si le navigateur possède une donnée enregistré appelée nomUtilisateur ou pas.

    // Sinon,la fonction definirNomUtilisateur est invoquée pour créer cette donnée.

    // Si elle existe (ce qui correspond au cas ou l'utilisateur est déjà venu sur la page,on la récupère avec la méthode getIthem()).

    // Pour finir, on définit le contenu de textContent pour le titre avec une concaténation de chaîne suivie du nom de l'utilisateur.

    // Enfin on associe le gestionnaire d'événement click au bouton.qd l'utilisateur clquera sur le bouton celà déclenchera l'exécution de la fonction definirnomUtilisateur();

    // Ce bouton permet donc à l'utilisateur de modifier son nom s'il le souhaite.



    




