let correctasconejos=[2,1,2,3,1]

let opcion_elegidaconejos=[]

let cantidad_correctasconejos=0;

function respuestaconejos(numconejos,seleccionadaconejos){
    opcion_elegidaconejos[numconejos]=seleccionadaconejos.value;
    id="p"+numconejos;
    
    labels = document.getElementById(id).childNodes;

    labels [3]. style. backgroundColor = "#EDF2F7";
    labels [5]. style. backgroundColor = "#EDF2F7";
    labels [7]. style. backgroundColor = "#EDF2F7";
    
    seleccionadaconejos.parentNode.style.backgroundColor="#09606aa1"

}
function corregirconejos(){
    cantidad_correctasconejos=0;
    for(i=0; i< correctasconejos.length;i++){
        if (correctasconejos[i]==opcion_elegidaconejos[i]){
            cantidad_correctasconejos++
        }

    }
    if(cantidad_correctasconejos==0){
        document.getElementById("conclusionconejos").innerHTML= "no eres apto para cuidar a un gato por ahora, debes aprender más.";
    }
    else if (cantidad_correctasconejos==1 || cantidad_correctasconejos==2){
        document.getElementById("conclusionconejos").innerHTML= "quiza en un futuro puedas cuidar a un gato, debes aprender más.";
    }
    else if (cantidad_correctasconejos==5 || cantidad_correctasconejos==6){
        document.getElementById("conclusionconejos").innerHTML= "Estas capacitado para cuidar a un gato, lo podras hacer bien.";
    }
    else if (cantidad_correctasconejos==7){
        document.getElementById("conclusionconejos").innerHTML= "Estas muy capacitado para cuidar a un gato.";
    }
    else{
        document.getElementById("conclusionconejos").innerHTML= "intenta informarte un poco más, en esta pagina te podremos ayudar.";
    }
    document.getElementById("resultadoconejos").innerHTML= cantidad_correctasconejos;
    
}