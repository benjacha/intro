let correctasloro=[2,1,2,3,1]

let opcion_elegidaloro=[]

let cantidad_correctasloro=0;

function respuestaloro(numloro,seleccionadaloro){
    opcion_elegidaloro[numloro]=seleccionadaloro.value;
    id="p"+numloro;
    
    labels = document.getElementById(id).childNodes;

    labels [3]. style. backgroundColor = "#EDF2F7";
    labels [5]. style. backgroundColor = "#EDF2F7";
    labels [7]. style. backgroundColor = "#EDF2F7";
    
    seleccionadaloro.parentNode.style.backgroundColor="#09606aa1"

}
function seleccionadaloro(){
    cantidad_correctasloro=0;
    for(i=0; i< correctasloro.length;i++){
        if (correctasloro[i]==opcion_elegidaloro[i]){
            cantidad_correctasloro++
        }

    }
    if(cantidad_correctasloro==0){
        document.getElementById("seleccionadaloro").innerHTML= "no eres apto para cuidar a un gato por ahora, debes aprender más.";
    }
    else if (cantidad_correctasloro==1 || cantidad_correctasloro==2){
        document.getElementById("seleccionadaloro").innerHTML= "quiza en un futuro puedas cuidar a un gato, debes aprender más.";
    }
    else if (cantidad_correctasloro==5 || cantidad_correctasloro==6){
        document.getElementById("seleccionadaloro").innerHTML= "Estas capacitado para cuidar a un gato, lo podras hacer bien.";
    }
    else if (cantidad_correctasloro==7){
        document.getElementById("seleccionadaloro").innerHTML= "Estas muy capacitado para cuidar a un gato.";
    }
    else{
        document.getElementById("seleccionadaloro").innerHTML= "intenta informarte un poco más, en esta pagina te podremos ayudar.";
    }
    document.getElementById("resultadoloro").innerHTML= cantidad_correctasloro;
    
}