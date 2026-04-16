const tags = {
    html: { title: "<html>", description: "Define a raiz de um documento HTML. Todo o conteúdo da página deve estar dentro dessa tag.", code: `<html>\n  <head></head>\n  <body></body>\n</html>`, image: { default: "../../images/html1.png", hover: "../../images/html2.png" } },
    head: { title: "<head>", description: "Contém metadados do documento, como título, links de CSS e scripts.", code: `<head>\n  <title>Minha página</title>\n</head>`, image: { default: "../../images/head1.png", hover: "../../images/head2.png" } },
    body: { title: "<body>", description: "Contém todo o conteúdo visível da página.", code: `<body>\n  <h1>Olá mundo</h1>\n</body>`, image: { default: "../../images/body1.png", hover: "../../images/body2.png" } },
    p: { title: "<p>", description: "Representa um parágrafo de texto.", code: `<p>Isso é um parágrafo</p>`, image: { default: "../../images/p1.png", hover: "../../images/p2.png" } },
    h: { title: "<h1> - <h6>", description: "Representam títulos e subtítulos, variando do nível mais importante (h1) ao menos importante (h6).", code: `<h1>Título</h1>\n<h2>Subtítulo</h2>`, image: { default: "../../images/h1.png", hover: "../../images/h2.png" } },
    ul: { title: "<ul>", description: "Define uma lista não ordenada (com marcadores).", code: `<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>`, image: { default: "../../images/ul1.png", hover: "../../images/ul2.png" } },
    ol: { title: "<ol>", description: "Define uma lista ordenada (numerada).", code: `<ol>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ol>`, image: { default: "../../images/ol1.png", hover: "../../images/ol2.png" } },
    li: { title: "<li>", description: "Define um item dentro de uma lista.", code: `<ul>\n  <li>Item</li>\n</ul>`, image: { default: "../../images/li1.png", hover: "../../images/li2.png" } },
    a: { title: "<a>", description: "Define um link para outra página ou recurso.", code: `<a href="https://www.w3schools.com">Visitar site</a>`, image: { default: "../../images/a1.png", hover: "../../images/a2.png" } },
    img: { title: "<img>", description: "Exibe uma imagem na página.", code: `<img src="imagem.png" alt="Descrição">`, image: { default: "../../images/img1.png", hover: "../../images/img2.png" } },
    span: { title: "<span>", description: "Agrupa elementos inline sem adicionar significado semântico.", code: `<span style="color:red;">Texto</span>`, image: { default: "../../images/span1.png", hover: "../../images/span2.png" } },
    strong: { title: "<strong>", description: "Indica que o texto tem forte importância (geralmente em negrito).", code: `<strong>Texto importante</strong>`, image: { default: "../../images/strong1.png", hover: "../../images/strong2.png" } },
    em: { title: "<em>", description: "Indica ênfase no texto (geralmente em itálico).", code: `<em>Texto enfatizado</em>`, image: { default: "../../images/em1.png", hover: "../../images/em2.png" } },
    hr: { title: "<hr>", description: "Cria uma linha horizontal para separar conteúdos.", code: `<hr>`, image: { default: "../../images/hr1.png", hover: "../../images/hr2.png" } }
};

document.querySelectorAll('[data-tag]').forEach(el => {
    const tag = tags[el.dataset.tag];
    if (!tag) return;

    if (el.classList.contains('tag-title')) {
        el.textContent = tag.title;
    } else if (el.classList.contains('tag-description')) {
        el.textContent = tag.description;
    } else if (el.classList.contains('code-block')) {
        el.textContent = tag.code;
    } else if (el.classList.contains('tag-image')) {
        el.src = tag.image.default;
        el.addEventListener('mouseover', () => el.src = tag.image.hover);
        el.addEventListener('mouseout', () => el.src = tag.image.default);
    }
});

const busca = document.getElementById("busca");
if (busca) {
    busca.addEventListener("input", function() {
        let texto = busca.value.toLowerCase().trim();
        let itens = document.querySelectorAll(".tag-link");

        itens.forEach(item => {
            if (texto !== "" && item.textContent.toLowerCase().includes(texto)) {
                item.classList.add("destaque");
            } else {
                item.classList.remove("destaque");
            }
        });
    });
}

let textoGrande = false;

function modoLeitura() {
    const input = document.getElementById("aumentar");
    if (textoGrande) {
        document.body.style.fontSize = "";
        if (input) input.value = 'Aumentar texto';
        textoGrande = false;
    } else {
        document.body.style.fontSize = "20px";
        if (input) input.value = 'Diminuir texto';
        textoGrande = true;
    }
}

function modoEscuro() {
    document.body.classList.toggle("dark");
    const input = document.getElementById("dark");
    if (input) {
        if (document.body.classList.contains("dark")) {
            input.value = 'Modo Claro';
        } else {
            input.value = 'Modo Escuro';
        }
    }
}