// multiplication symbol * //


//1- je declare ma variable de récupération :
 /*var nombre = prompt("Saisissez un chiffre");

//2- Je définit ma condition :
if( nombre >= 1 && nombre <= 10){

    // si je rentre dans ma condition (le chiffre saisie est compris entre 1 ET 10) j'exécute ma boucle for :
    for (i = 1; i <= 10; i++) { 
        
         
    
        document.write(nombre + " x " + i + "=" + nombre * i + "<br>");
    }
} */

var choix = prompt("choisis un nombre :");
if ((choiw >= 2) && (choix <= 9)) {
    for(var i = 1; i <= 10 ; i++){
        var res = choix * i;
        
        
        document.write(choix + " x " + i + " = " + res + "<br />");
    }
}