function acao(){
    let modal = document.querySelector('.modal')
    modal.style.display = 'block';
}
function fechar(){
    let modal = document.querySelector('.modal')
    modal.style.display = 'none';
}

item.querySelector("#id").innerHTML = data.id;

    item.querySelector("#tipo").innerHTML = data.tipo;
    item.querySelector("#severidade").innerHTML = data.severidade;
    item.querySelector("#descricao").innerHTML = data.descricao;

    let dataF = new Date(data.data);
    item.querySelector("#data").innerHTML = dataF.toLocaleString('pt-BR');
    item.querySelector("#hora").innerHTML = data.hora;
    item.querySelector("#hora_inicio").innerHTML = data.hora_inicio;
    item.querySelector("#hora_fim").innerHTML = data.hora_fim;
    item.querySelector("#destino").innerHTML = data.destino;