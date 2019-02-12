//alert("js ok");
var heure = prompt("quelle heure est il");
var minute = prompt("quelle minute est il");
var seconde = prompt("quelle seconde est il");
// si la var est entre 0 et 23
if(heure>= 0 && heure <= 23 && minute >= 0 && minute <=59 && seconde >= 0 && seconde 
    <=59  ){
    seconde++;
    if(seconde===60){
        seconde=0;
        minute++
    if (minute===60){
        minute=0;
        heure++;
    if  (heure ===24){
        heure=0;

    }

    }
    }

    document.write("dans une seconde il sera "+heure+" H " + minute + " m " + seconde + "s");
}else{ 
    // else = sinon
    // alert = ouvre une boite de dialogue si les valeurs ne sont pas corrcet
    alert("la saisie n'est pas valide");
}



