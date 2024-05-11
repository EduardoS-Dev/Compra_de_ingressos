function comprar(){
    //Selecionando o tipo de ingresso
    let tipoIngresso = document.getElementById('tipo-ingresso').value;

    //quantidade de ingresso
    let qtdeIngresso = document.getElementById('qtd').value;

    let campoQtdePista = document.getElementById('qtd-pista');
    let campoQtdeSuperior = document.getElementById('qtd-superior');
    let campoQtdeInferior = document.getElementById('qtd-inferior');

    if(qtdeIngresso <= 0){
        alert(`Informe uma quantidade válida.`)
    } else {
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
    
    
       
}

function comprarIngressos(tipo, qtde, local , texto){
    if(tipo == local && (texto.textContent - qtde) >= 0){
        alert('Compra realizada com sucesso!')
        texto.innerHTML = `<span id="qtd-${tipo}">${texto.textContent - qtde}</span>`
    } else {
        let frase = texto.textContent > 0 ? `${texto.textContent} disponível` : `${tipo} [ESGOTADO]`
        alert(frase)
    }
}