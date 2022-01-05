// Pegando os elementos do html e criando as variáveis:
// container, listaAtividades, input, erro, botaoCadastra, paleta1, paleta2,
// paleta3, limparLista; 
const container = document.querySelector(".container");
const listaAtividades = document.querySelector(".lista_atividades");
const input = document.querySelector(".input");
const erro = document.querySelector(".erro");
const botaoCadastra = document.querySelector(".botao_adc");
const paleta1 = document.querySelector("#paleta1");
const paleta2 = document.querySelector("#paleta2");
const paleta3 = document.querySelector("#paleta3");
const limparLista = document.querySelector(".botao_del_todos");

listaAtividades.style.background = "white";
listaAtividades.style.border = "solid 5px black";

let corSelecionada;

// adcionando a função definePaleta e a cor no evento de 
// click das paletas 1, 2 e 3;
paleta1.addEventListener('click', () => definePaleta("seagreen"));
paleta2.addEventListener('click', () => definePaleta("slateblue"));
paleta3.addEventListener('click', () => definePaleta("tomato"));

paleta1.click();

// adicionando a função cadastraAtividade no evento de click do botaoCadastra;
botaoCadastra.addEventListener('click', () => cadastraAtividade());

// adicionando a função removeAtividades no evento de click do limparLista;
limparLista.addEventListener('click', () => removeAtividades());


function definePaleta(cor){
    // alterar a cor do background do container
    container.style.background = cor;

    // alterar a cor do background do listaAtividades
    //listaAtividades.style.background = cor;
    corSelecionada = cor;
}

function removeAtividade(atividade){
    // remove o filho da listaAtividades
    listaAtividades.removeChild(atividade);
}

function removeAtividades(){
    // loop para remover o firstElementChild da listaAtividades;
    // utilzar a função removeAtividade;
    while(listaAtividades.firstElementChild){
        removeAtividade(listaAtividades.firstElementChild);
    }
}

function criaAtividade(){
    // criar a div de atividade;
    // criar o paragrafo para o nome da atividade;
    // criar o botao limpar;
    const atividade = document.createElement("div");
    const nomeAtividade = document.createElement("p");
    const botaoLimpar = document.createElement("button")

    // adicionar a classe atividade no elemento html atividade;
    atividade.classList.add("atividade");

    atividade.style.background = "white";
    atividade.style.border = `solid 10px ${corSelecionada}`;

    // pegando o valor do input e colocando no 
    // textContent do paragrafo nomeAtividade;
    nomeAtividade.textContent = input.value;

    // definindo o textContent do botao limpar;
    // adicionando a classe botao_del no botaoLimpar;
    // adicionando a funação removeAtividade no 
    // evento de click do botaoLimpar;
    botaoLimpar.textContent = "Limpar";    
    botaoLimpar.classList.add("botao_del");
    botaoLimpar.addEventListener("click", () => removeAtividade(atividade))

    // adicionando o elemento atividade como filho da listaAtividades;
    // adicionando o elemento nomeAtividade como filho da atividade;
    // adicionando o elemento botaoLimpar como filho da atividade;
    listaAtividades.appendChild(atividade);
    atividade.appendChild(nomeAtividade);
    atividade.appendChild(botaoLimpar);
}

function cadastraAtividade(){
    // verificando se o tamanho do valor digitado no input é maior que zero;
    // caso seja maior:
    // - definir o display do elemento erro como 'none';
    // - chama a função criaAtividade;
    // - focar no input;
    // caso contrário:
    // - definir o display do elemento erro como 'grid'
    // - definir o innerHtml do elemento erro 
    //   como `${input.value} não é uma atividade válida!`
    if(input.value.trim().length > 0){
        erro.style.display = 'none';
        criaAtividade();
        input.focus();
    }
    else{
        erro.style.display = 'grid';
        erro.innerHTML = `${input.value} não é uma atividade válida!`;
    }

    // limpar o input
    limpaInput();
}

function limpaInput(){
    // alterar o valor do input para string vazia;
    input.value = "";
}

// adciona o evento keypress no elemento window, utilizando 
// uma lambda function com parametro 'e';
// dentro da função verificar se a tecla pressionada é Enter;
// caso seja, chamar a função cadastraAtividade;
window.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        cadastraAtividade();
    }
});