let correctashamster=[2,1,2,3,1]

let opcion_elegidahamster=[]

let cantidad_correctashamster=0;

function respuestahamster(num_preguntahamster,seleccionadahamster){
    opcion_elegidahamster[num_preguntahamster]=seleccionadahamster.value;
    id="p"+num_preguntahamster;
    
    labels = document.getElementById(id).childNodes;

    labels [3]. style. backgroundColor = "#EDF2F7";
    labels [5]. style. backgroundColor = "#EDF2F7";
    labels [7]. style. backgroundColor = "#EDF2F7";
    
    seleccionadahamster.parentNode.style.backgroundColor="#09606aa1"

}
function corregirhamster(){
    cantidad_correctashamster=0;
    for(i=0; i< correctashamster.length;i++){
        if (correctashamster[i]==opcion_elegidahamster[i]){
            cantidad_correctashamster++
        }

    }
    if(cantidad_correctashamster==0){
        document.getElementById("conclusionhamster").innerHTML= "no eres apto para cuidar a un gato por ahora, debes aprender más.";
    }
    else if (cantidad_correctashamster==1 || cantidad_correctashamster==2){
        document.getElementById("conclusionhamster").innerHTML= "quiza en un futuro puedas cuidar a un gato, debes aprender más.";
    }
    else if (cantidad_correctashamster==5 || cantidad_correctashamster==6){
        document.getElementById("conclusionhamster").innerHTML= "Estas capacitado para cuidar a un gato, lo podras hacer bien.";
    }
    else if (cantidad_correctashamster==7){
        document.getElementById("conclusionhamster").innerHTML= "Estas muy capacitado para cuidar a un gato.";
    }
    else{
        document.getElementById("conclusionhamster").innerHTML= "intenta informarte un poco más, en esta pagina te podremos ayudar.";
    }
    document.getElementById("resultadohamster").innerHTML= cantidad_correctashamster;
    
}