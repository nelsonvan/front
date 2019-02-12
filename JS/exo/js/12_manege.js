/*alert("test");
var numerotour = prompt("C'est le tour n°");

if ((numerotour >= 0) && (numerotour <=10)){
    
    document.write("<h3> C'est le de manege n°"+numerotour);
}else{
    alert("désolé le manege ne tourne pas plus de 10 tours")
}*/

var manege = 0;
while (manege < 10) {
    manege++;
    document.write("C'est le tour n°"+manege+"<br />")

}

document.write("<br /> ")

for(var i=1; i<=10 ;i++){
    document.write("Cest le tour n°"+i+"<br />";
}
document.write("<br />");
document.write("<br />")

var question = parseInt(prompt("combien de tours voulez-vous"))
var compteur =1;
while (compteur)



  
