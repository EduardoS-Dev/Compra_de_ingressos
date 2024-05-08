function comprar(){
    //Selecionando o tipo de ingresso
    let tipoIngresso = document.getElementById('tipo-ingresso').value;

    //quantidade de ingresso
    let qtdeIngresso = document.getElementById('qtd').value;

    let campoQtdePista = document.getElementById('qtd-pista');
    let campoQtdeSuperior = document.getElementById('qtd-superior');
    let campoQtdeInferior = document.getElementById('qtd-inferior');
    
    if(tipoIngresso == 'pista'){
        comprarIngressos(tipoIngresso, qtdeIngresso, 'pista', campoQtdePista)
    } else {
        if(tipoIngresso == 'superior'){
            comprarIngressos(tipoIngresso, qtdeIngresso, 'superior', campoQtdeSuperior)
        } else {
            comprarIngressos(tipoIngresso, qtdeIngresso, 'inferior', campoQtdeInferior)
        }
    } 
       
}

function comprarIngressos(tipo, qtde, local , texto){
    if(tipo == local && (texto.textContent - qtde) >= 0){
        texto.innerHTML = `<span id="qtd-${tipo}">${texto.textContent - qtde}</span>`
    } else {
        let frase = texto.textContent > 1 ? `Restam ${texto.textContent} ingressos disponíveis` : `Apenas ${texto.textContent} disponível.`
        alert(frase)
    }
}