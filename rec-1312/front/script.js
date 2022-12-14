const uri = 'http://localhost:3000/read';
const lista = document.querySelector("#lista");
const mExcluir = document.querySelector("#modalExcluir");
const labelID = document.querySelector("#idExclui");
var data = [];

function carregar() {
    const options = { method: 'GET' };

    fetch(uri, options)
        .then(resp => resp.json())
        .then(resp => {
            data = resp;
            preecherTabela();
        })
        .catch(err => console.error(err));
}

function preecherTabela() {
    data.forEach(e => {
        let l = document.createElement("tr");
        let id = document.createElement("td");
        let tipo = document.createElement("td");
        let severidade = document.createElement("td");
        let descricao = document.createElement("td");
        let data = document.createElement("td");
        let hora = document.createElement("td");
        let hora_inicio = document.createElement("td");
        let hora_fim = document.createElement("td");
        let destino = document.createElement("td");
        let alterar = document.createElement("td");
        let excluir = document.createElement("td");
        id.innerHTML = e.id;
        tipo.innerHTML = e.tipo;
        severidade.innerHTML = e.severidade;
        descricao.innerHTML = e.descricao;
        data.innerHTML = e.data.toLocaleString('pt-BR', { timeZone: 'UTC' }).split("T")[0];
        hora.innerHTML = e.hora.toLocaleString('pt-BR', { timeZone: 'UTC' });
        hora_inicio.innerHTML = e.hora_inicio.toLocaleString('pt-BR', { timeZone: 'UTC' });
        hora_fim.innerHTML = e.hora_fim.toLocaleString('pt-BR', { timeZone: 'UTC' });
        destino.innerHTML = e.destino;
        alterar.innerHTML = `<img onclick = "Altera()" src='../../assets/add.png' width='35px' height='35px' />`;
        excluir.innerHTML = `<img onclick = "preparaExclusao(${e.id})" src='../../assets/close.png' width='35px' height='35px' />`;
        l.appendChild(id);
        l.appendChild(tipo);
        l.appendChild(severidade);
        l.appendChild(descricao);
        l.appendChild(data);
        l.appendChild(hora);
        l.appendChild(hora_inicio);
        l.appendChild(hora_fim);
        l.appendChild(destino);
        l.appendChild(alterar);
        l.appendChild(excluir);
        lista.appendChild(l);
    });
}

function preparaExclusao(id) {
    mExcluir.setAttribute('style', 'display:flex');
    labelID.innerHTML = id;
}


function excluir(id) {
    const options = {method: 'DELETE'};

    fetch('http://localhost:3000/delete/' + id, options)
    .then(resp => resp.status)
    .then(resp => {
        if (resp == 204) {
            window.location.reload();
        } else {
            alert("Excluiu: + " + resp)
        }
    });
}



function cadastrarChamado() {

    let tipo = document.querySelector("#tipo").value
    let severidade = document.querySelector("#severidade").value
    let descricao = document.querySelector("#descricao").value
    let destino = document.querySelector("#destino").value

    let body = {
        "tipo": tipo,
        "severidade": severidade,
        "descricao": descricao,
        "destino": destino
        
    }


    if (body.tipo.length > 0 && body.severidade.length > 0 && body.descricao.length > 0 && body.destino.length > 0) {
    fetch('http://localhost:3000/create', {
        "method": "POST",
        "headers":{
            "content-type": "application/json"
        },
        "body": JSON.stringify(corpo)
    }).then( res => { return res.json()})
    .then(resp => {
        if(resp != undefined){
            console.log("Parabens");
        }else{
            console.log("Deu errado");
        }
    });
    window.location.reload();
    
}
}

function alerta(a) {
    document.querySelector('#modal2').setAttribute('style', 'display:flex;');
    document.querySelector('#alerta').setAttribute('style', 'display:flex;');
    document.querySelector('#msg').innerHTML = a;
}