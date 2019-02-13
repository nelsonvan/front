alert("cela fonctionne");

var dismoi = "";
var i = "0";

while ((dismoi !== "oui") && (dismoi !== "non"))  {
    
    dismoi =prompt("alors on joue au ni oui ni non ?");

    document.write(dismoi + " pour la " + i + ""  , 'dis moi oui ou non!<br />);
}

document.write("<h1 style='background-color:cyan; text-align:center;'> fini ;) !</h1>");

