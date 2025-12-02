const perguntas = [
    {
        pergunta: "O que significa HTML?",
        alt1: "HyperText Markup Language",
        alt2: "Hyper Tool Machine Language",
        alt3: "Home Text Model Layout",
        correta: 1
    },
    {
        pergunta: "O que significa CSS?",
        alt1: "Cascading Style Sheets",
        alt2: "Computer Style System",
        alt3: "Central Sheet Service",
        correta: 1
    },
    {
        pergunta: "Qual é a linguagem usada para interação no navegador?",
        alt1: "Java",
        alt2: "Python",
        alt3: "JavaScript",
        correta: 3
    },
    {
        pergunta: "Qual desses é um banco de dados?",
        alt1: "MySQL",
        alt2: "React",
        alt3: "npm",
        correta: 1
    },
    {
        pergunta: "Qual símbolo começa um ID no CSS?",
        alt1: ".classe",
        alt2: "#id",
        alt3: "@id",
        correta: 2
    },
    {
        pergunta: "Qual comando imprime no console no JavaScript?",
        alt1: "print()",
        alt2: "console.log()",
        alt3: "echo()",
        correta: 2
    },
    {
        pergunta: "Qual extensão padrão de arquivos JavaScript?",
        alt1: ".js",
        alt2: ".java",
        alt3: ".jsx",
        correta: 1
    },
    {
        pergunta: "Qual desses NÃO é uma linguagem de programação?",
        alt1: "Python",
        alt2: "HTML",
        alt3: "C#",
        correta: 2
    },
    {
        pergunta: "Quem 'estiliza' elementos no frontend?",
        alt1: "SQL",
        alt2: "HTML",
        alt3: "CSS",
        correta: 3
    },
    {
        pergunta: "Qual desses cria elementos e estrutura no site?",
        alt1: "CSS",
        alt2: "HTML",
        alt3: "Node.js",
        correta: 2
    }
];

areaAcertos = document.getElementById("acertos");
areaAcertos.style.display = "none";

let respostasCliente = [];
let respostasCorretas = [];
let i = 0;


for (let i=0; i<perguntas.length; i++){
    respostasCorretas.push(perguntas[i].correta)
}

function carregarPerguntas(){
    if (i < perguntas.length) {
        document.getElementById("pergunta").innerHTML = perguntas[i].pergunta;
        document.getElementById("alt-1").innerHTML = perguntas[i].alt1;
        document.getElementById("alt-2").innerHTML = perguntas[i].alt2;
        document.getElementById("alt-3").innerHTML = perguntas[i].alt3;
        i++;
        document.getElementById("contador").innerHTML = "Questão "+i;
    } else {
        areaAcertos.style.display = "flex";
        finalizarQuiz();
        document.getElementById("pergunta").style.display = "none";
        document.getElementById("alt-1").style.display = "none";
        document.getElementById("alt-2").style.display = "none";
        document.getElementById("alt-3").style.display = "none";
        document.getElementById("contador").style.display = "none"
        document.getElementById("mostrarAcertos").innerHTML = "Você acertou "+acertos+" questões!";
    }
}

let respondeuPergunta = false;

function responder(alt){
    if (respondeuPergunta===false){
        respostasCliente.push(alt)
    }
    carregarPerguntas()
}

carregarPerguntas()

let acertos = 0;
function finalizarQuiz(){
    for (let i=0; i<perguntas.length; i++){
        if (respostasCorretas[i]===respostasCliente[i]){
            acertos+=1
        }
    }
    return acertos
}
