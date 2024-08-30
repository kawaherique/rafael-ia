const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você decide começar uma pequena horta em casa para cultivar seus próprios alimentos. Qual é o primeiro passo que você toma?",
        alternativas: [
            {
                texto: "Pesquisar sobre o tipo de solo e clima mais adequado para a horta.",
                afirmacao: "Você entendeu a importância do ambiente certo para uma horta saudável."
            },
            {
                texto: "Comprar sementes e ferramentas sem muita pesquisa.",
                afirmacao: "Você descobriu que investir tempo na pesquisa é crucial para o sucesso da horta."
            }
        ]
    },
    {
        enunciado: "Durante o crescimento da sua horta, você encontra algumas pragas. Qual é a sua abordagem para resolver o problema?",
        alternativas: [
            {
                texto: "Utilizar métodos naturais e orgânicos para controlar as pragas.",
                afirmacao: "Você aprendeu que práticas sustentáveis ajudam a manter um ambiente saudável para suas plantas."
            },
            {
                texto: "Recorrer a pesticidas químicos para resolver o problema rapidamente.",
                afirmacao: "Você percebeu que o uso de químicos pode ter impactos negativos no longo prazo e decidiu pesquisar alternativas."
            }
        ]
    },
    {
        enunciado: "Sua horta começa a produzir mais do que você consegue consumir. O que você faz com a produção excedente?",
        alternativas: [
            {
                texto: "Compartilhar com vizinhos e amigos ou doar para instituições de caridade.",
                afirmacao: "Você encontrou maneiras de contribuir para a comunidade e evitar o desperdício."
            },
            {
                texto: "Deixar a produção excedente apodrecer.",
                afirmacao: "Você viu a importância de encontrar soluções para o excedente para evitar desperdício e contribuir para o bem-estar comum."
            }
        ]
    },
    {
        enunciado: "Você está pensando em expandir sua horta para incluir mais variedades de vegetais e frutas. Qual é a sua estratégia para essa expansão?",
        alternativas: [
            {
                texto: "Planejar um novo espaço para a horta e pesquisar sobre as melhores práticas para cada tipo de planta.",
                afirmacao: "Você aprendeu a importância do planejamento e da pesquisa para uma expansão bem-sucedida."
            },
            {
                texto: "Expandir a horta sem um planejamento detalhado e adicionar novas plantas conforme surgem.",
                afirmacao: "Você descobriu que a falta de planejamento pode levar a problemas e que uma abordagem estruturada é mais eficaz."
            }
        ]
    },
    {
        enunciado: "Ao cultivar sua horta, você considera incorporar técnicas de cultivo sustentável. O que você faz?",
        alternativas: [
            {
                texto: "Adotar técnicas como compostagem e cultivo em sistemas de permacultura.",
                afirmacao: "Você aprendeu que práticas sustentáveis podem melhorar a qualidade do solo e a saúde das plantas."
            },
            {
                texto: "Continuar com técnicas tradicionais sem mudanças.",
                afirmacao: "Você percebeu que novas técnicas podem trazer benefícios e decidiu explorar a sustentabilidade."
            }
        ]
    },
    {
        enunciado: "Você está pensando em ensinar outras pessoas sobre o cultivo de hortas em casa. Qual é o seu plano?",
        alternativas: [
            {
                texto: "Criar um guia ou workshop sobre os fundamentos do cultivo de hortas e compartilhar suas experiências.",
                afirmacao: "Você se tornou um recurso valioso para a comunidade e ajudou outras pessoas a iniciar suas próprias hortas."
            },
            {
                texto: "Compartilhar apenas suas experiências de forma informal com amigos e familiares.",
                afirmacao: "Você viu que formalizar o ensino pode impactar mais pessoas e decidiu criar um recurso mais estruturado."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O Futuro da Agricultura Familiar...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();