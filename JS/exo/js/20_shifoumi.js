alert("cela fonctionne");

/* le mode strict de ECMAScript S permet de choisir une variante respective de
JavaScript, Le mode strict n'est pas seulment un sous-emsenble de JavaScript :
il posséde intentionellment des sémantiques différantes du code normal.
les navigateurs ne supportant pas le mode strict exécuteront le code d'une facon
légérment différante de ceux lz supportant, il ne faut donc pas compter sur
le mode strict pour eviter des testes sur les navigateur qui ne le supportent pas,
les codes en mode strict et en mode - strict peuvent coexister, ce qui permet
de réécrire les script en mode strrict de facon incrémentale.
Le mode strict apporte qulques chanchements a la semantique << normal >> de JavaScript
le mode strict élimine qulques érreurs silencieuses de JavaScript en les chancheant
en erreurs explicites(une exeption sera levée.)
 le mode strict corige les erreurs qui font qu'autrement il est difficle pour les
 moteurs, JavaScript d'effectuer des optimisations.
 le code sera donc executée plus rapidement  en mode strict, sans changer une seul
  ligne si cela n'est pas nécessaire.
 le mode strict interdit les mot - clées suceptible d'étre definit*/
    
 'use strict';   // Mode strict du JavaScript



 // Déclaration de trois variables.
 
 var computer;
 
 var player;
 
 var random;
 
 
 
 
 
 // Récupération du choix du joueur.
 
 player = window.prompt('Que choisissez-vous : pierre, feuille ou ciseau ?');
 
 
 
 
 
 // Récupération d'un nombre aléatoire entre 0 et 1 inclus.
 
 random = Math.random();
 
 
 
 //test du random
 
 console.log(random);
 
 
 
 if(random <= 0.33)
 
 {
 
     computer = 'pierre';
 
 }
 
 else if(random <= 0.66)
 
 {
 
     computer = 'feuille';
 
 }
 
 else
 
 {
 
     computer = 'ciseau';
 
 }
 
 
 
 document.write("<p>Choix de l'ordinateur : " + computer + '</p>');
 
 
 
 
 
 if(computer == player)
 
 {
 
     document.write('<p>Vous avez choisi la même chose : égalité !</p>');
 
 }
 
 else
 
 {
 
     // Le joueur et l'ordinateur n'ont pas choisi la même chose, la bataille commence !
 
 
 
     switch(computer)
 
     {
 
         case 'ciseau':
 
         if(player == 'pierre')
 
         {
 
             document.write('<p>La pierre écrase le ciseau : vous gagnez !</p>');
 
         }
 
         else // player == 'feuille'
 
         {
 
             document.write('<p>La feuille est découpée par le ciseau : vous perdez !</p>');
 
         }
 
         break;
 
 
 
         case 'feuille':
 
         if(player == 'pierre')
 
         {
 
             document.write('<p>La pierre est enveloppée par la feuille : vous perdez !</p>');
 
         }
 
         else // player == 'ciseau'
 
         {
 
             document.write('<p>Le ciseau découpe la feuille : vous gagnez !</p>');
 
         }
 
         break;
 
 
 
         case 'pierre':
 
         if(player == 'feuille')
 
         {
 
             document.write('<p>La feuille enveloppe la pierre : vous gagnez !</p>');
 
         }
 
         else // player == 'ciseau'
 
         {
 
             document.write('<p>Le ciseau est écrasé par la pierre : vous perdez !</p>');
 
         }
 
         break;
 
     }
 
 }
 
 
 



    