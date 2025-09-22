//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

listaAmigosSecr = [];


function adicionarAmigo() {
    let amigoAincluir = document.getElementById("amigo").value;

    if (amigoAincluir === "") {
        alert("Por favor, insira o nome do amigo.");
        exibirMsg('resultado','Por favor, insira o nome do amigo.');
        cancelaMsg('resultado');}
    else {
      if (listaAmigosSecr.includes(amigoAincluir)){
        alert("O nome do  amigo informado, já está incluso, escolha outro.");
        exibirMsg('resultado','O nome do  amigo informado, já está incluso, escolha outro.');
        cancelaMsg('resultado');
        } 
     else{
     listaAmigosSecr.push(amigoAincluir);
     let itemLista = document.createElement("li");
     itemLista.textContent = amigoAincluir;
     document.getElementById("listaAmigos").appendChild(itemLista);
     exibirMsg('resultado', 'O amigo '+ amigoAincluir + ' incluido com suceso.');
     cancelaMsg('resultado');
     }
   }
}

function sortearAmigo() {
    if (listaAmigosSecr.length === 0) {
        alert("Nenhum amigo adicionado para sortear.");
    } else {
        let indicedaSorte = Math.floor(Math.random() * listaAmigosSecr.length);
       // console.log(indiceSorteado);
        let amigoSortudo = listaAmigosSecr[indicedaSorte];
        exibirMsg('resultado', "O amigo sorteado foi: " + amigoSortudo);
      }
}

function reiniciarSorteio() {
    listaAmigosSecr = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").textContent = "";
}

function exibirMsg(id, texto) {
    let campo = resultadoElement = document.getElementById(id);
      campo.innerHTML = texto;
 }

 function cancelaMsg(id){
    setTimeout(() => {
        document.getElementById(id).textContent = ''; // Limpa o valor do campo
        document.getElementById("amigo").value = ''; // Limpa o valor do campo
      }, 5000);
 }