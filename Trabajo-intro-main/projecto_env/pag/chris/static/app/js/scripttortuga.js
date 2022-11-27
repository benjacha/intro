let correctastor=[2,4,2,2,1]

let opcion_elegidator=[]

let cantidad_correctastor=0;

function respuestator(numtor,seleccionadator){
    opcion_elegidator[numtor]=seleccionadator.value;
    id="p"+numtor;
    
    labels = document.getElementById(id).childNodes;

    labels [3]. style. backgroundColor = "#EDF2F7";
    labels [5]. style. backgroundColor = "#EDF2F7";
    labels [7]. style. backgroundColor = "#EDF2F7";
    
    seleccionadator.parentNode.style.backgroundColor="#09606aa1"

}
function corregirtor(){
    cantidad_correctastor=0;
    for(i=0; i< correctastor.length;i++){
        if (correctastor[i]==opcion_elegidator[i]){
            cantidad_correctastor++
        }

    }
    if(cantidad_correctaspez==0){
        document.getElementById("conclusiontor").innerHTML= "No eres apto para cuidar a un pez por ahora, debes aprender más.";
    }
    else if (cantidad_correctaspez==1 || cantidad_correctaspez==2){
        document.getElementById("conclusiontor").innerHTML= "Quiza en un futuro puedas cuidar a un pez, debes aprender más.";
    }
    else if (cantidad_correctaspez==5 || cantidad_correctaspez==6){
        document.getElementById("conclusiontor").innerHTML= "Estas capacitado para cuidar a un pez, lo podras hacer bien.";
    }
    else if (cantidad_correctaspez==7){
        document.getElementById("conclusiontor").innerHTML= "Estas muy capacitado para cuidar a un pez.";
    }
    else{
        document.getElementById("conclusiontor").innerHTML= "intenta informarte un poco más, en esta pagina te podremos ayudar.";
    }
    document.getElementById("resultadotor").innerHTML= cantidad_correctastor;
    
}

