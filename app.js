const personagens = {
    Kemi: {
        senha: "filha",
        itens: [
            "CARTA.AGUA.png",
            "CARTA.BANDAGEM.png",
            "CARTA.DONUT.png"
        ]
    },
    Aguiar: {
        senha: "mar",
        itens: [
            "CARTA.CELULAR.png",
            "CARTA.CHAVES DA CAMINHONETE.png",
            "CARTA.DONUT.png",
            "CARTA.DISTINTIVO.png",
            "CARTA.MOCHILA.png",
            "CARTA.MUNICAO.png",
            "CARTA.POCHETE DE PERNA.png"
        ]
    },
    Henri: {
        senha: "sacrificio",
        itens: [
            "CARTA.CERVEJA.png",
            "CARTA.ESTATUETA.png",
            "CONDICAO.FRACO.png"
        ]
    },
    Labirinto: { senha: "???", itens: ["CARTA.ALINCA.png"] },
    Dalmo: { senha: "irmao", itens: ["CARTA.ALINCA.png"] },
    Jae: { senha: "silencio", itens: ["CARTA.ALINCA.png"] },
    Eloy: { senha: "guitarra", itens: ["CARTA.AGUA.png"] },
    Caio: { senha: "caio", itens: ["CARTA.AGUA.png"] },
    Franco: { senha: "lukas", itens: ["CARTA.AGUA.png"] },
    Ale: { senha: "julia", itens: ["CARTA.AGUA.png"] },
    Cindy: { senha: "assassina", itens: ["CARTA.AGUA.png"] },
    Pomba: { senha: "confianca", itens: ["CARTA.ALINCA.png"] },
    Escarlata: { senha: "manipulacao", itens: ["CARTA.ALINCA.png"] },
    Ana: { senha: "amor", itens: ["CARTA.ALINCA.png"] },
    Argano: { senha: "coracao", itens: ["CARTA.ALINCA.png"] },
    Chispa: { senha: "carro", itens: ["CARTA.ALINCA.png"] },
    Torvo: { senha: "marido", itens: ["CARTA.ALINCA.png"] },
    Miasma: { senha: "sacrificio", itens: ["CARTA.ALINCA.png"] },
    Caito: { senha: "sacrificio", itens: ["CARTA.ALINCA.png"] }
};

const TODAS_CARTAS = [
    "CARTA.AGUA.png",
    "CARTA.BANDAGEM.png",
    "CARTA.CELULAR.png",
    "CARTA.CERVEJA.png",
    "CARTA.DISTINTIVO.png",
    "CARTA.DONUT.png",
    "CARTA.ESTATUETA.png",
    "CARTA.MOCHILA.png",
    "CARTA.MUNICAO.png",
    "CARTA.POCHETE DE PERNA.png",
    "CARTA.CHAVES DA CAMINHONETE.png",
    "CARTA.ALINCA.png",
    "CONDICAO.FRACO.png",
    "CARTA.AMULETOTENEBRIS.png",
    "CARTA.ANOTACOES.png",
    "CARTA.ANTENA.png",
    "CARTA.ARPAO.png",
    "CARTA.BANDAGEM SUJA.png",
    "CARTA.BINOCULOS.png",
    "CARTA.BUSSOLA ANTIGA.png",
    "CARTA.CAIXA DE FERRAMENTAS.png",
    "CARTA.CAIXA DE VINHOS.png",
    "CARTA.CHAVE DA SALA RESTRITA.png",
    "CARTA.CHAVEIRO ENFERRUJADO.png",
    "CARTA.CHAVEIRO.png",
    "CARTA.CHAVES DE ONIBUS.png",
    "CARTA.CHAVES DE SUCATA.png",
    "CARTA.COBERTORES.png",
    "CARTA.COLDRE.png",
    "CARTA.COMIDA ENLATADA.png",
    "CARTA.COMPONENTE ENERGIA.png",
    "CARTA.COMPONENTE MORTE.png",
    "CARTA.COMPONENTE SANGUE.png",
    "CARTA.COMPONENTE.CONHECIMENTO.png",
    "CARTA.CUTELO CARNICEIRO.png",
    "CARTA.DINAMITE.png",
    "CARTA.DISCOGRAFIA.png",
    "CARTA.DROGA RUBRA.png",
    "CARTA.ESPADA DA SABARA.png",
    "CARTA.ESTOJO DE MAQUIAGEM.png",
    "CARTA.FACA PREDADORA.png",
    "CARTA.FERMENTADO.png",
    "CARTA.FLIP-PHONE.png",
    "CARTA.GARRADOHARPIA.png",
    "CARTA.INCENSO.png",
    "CARTA.JERICO CRUEL.png",
    "CARTA.KIT DE ESCALADA.png",
    "CARTA.LAMPADA DELIRANTE.png",
    "CARTA.MACHADOMN.png",
    "CARTA.MANIVELA.png",
    "CARTA.MANOPLAS.png",
    "CARTA.MATERIAIS DE ENFERMARIA.png",
    "CARTA.MUNICAO CANGACEIRA.png",
    "CARTA.MUNICAO DE RIFLE.png",
    "CARTA.OCULOS DE CACA.png",
    "CARTA.OSSADA ARCAICA.png",
    "CARTA.PEDRA DE AMOLAR.png",
    "CARTA.PISTOLA DE PREGOS.png",
    "CARTA.PUNHAL X.png",
    "CARTA.ROSARIO RELUZENTE.png",
    "CARTA.RUBRA.png",
    "CARTA.SALGADINHO.png",
    "CARTA.SANGUE AMPLIADOR.png",
    "CARTA.SNIPER.png",
    "CARTA.SUCATA.png",
    "CARTA.SUCO DE CAIXINHA.png",
    "CARTA.TUFO DE CABLO.png",
    "CARTA.VINHO.png",
    "CONDICAO.APAIXONADO.png",
    "CONDICAO.CAIDO.png",
    "CONDICAO.CEGO.png",
    "CONDICAO.CONFUSO.png",
    "CONDICAO.EM CHAMAS.png",
    "CONDICAO.SANGRANDO.png",
    "CONDICAO.TREMULO.png"
];

let personagemAtual = null;
let tipoUsuario = null;

// Carregar dados do localStorage
function carregarDados() {
    const dados = localStorage.getItem('hexatombe_dados');
    if (dados) {
        try {
            const parsed = JSON.parse(dados);
            Object.assign(personagens, parsed);
        } catch (e) {
            console.error('Erro ao carregar dados:', e);
        }
    }
}

// Salvar dados no localStorage
function salvarDados() {
    localStorage.setItem('hexatombe_dados', JSON.stringify(personagens));
}

// Tela de login inicial
function telaLogin() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="login-container">
            <h1>HEXATOMBE</h1>
            <p style="text-align: center; margin-bottom: 30px; color: #ffed4e;">Bem-vindo ao Inventário RPG</p>
            
            <div class="login-option">
                <button onclick="telaLoginPlayer()">🎮 Sou um Jogador</button>
            </div>
            
            <div class="login-option">
                <button class="mestre-btn" onclick="telaLoginMestre()">👑 Sou o Mestre</button>
            </div>
        </div>
    `;
}

// Tela de login para player
function telaLoginPlayer() {
    const app = document.getElementById('app');
    const opcoes = Object.keys(personagens).map(nome => `<option value="${nome}">${nome}</option>`).join('');
    
    app.innerHTML = `
        <div class="login-container">
            <h1>HEXATOMBE</h1>
            <h2 style="color: #ffd700; text-align: center; border: none; margin-top: 0;">Login do Jogador</h2>
            
            <label for="personagem">Personagem:</label>
            <select id="personagem">
                <option value="">Escolha seu personagem...</option>
                ${opcoes}
            </select>
            
            <label for="senha">Senha:</label>
            <input type="password" id="senha" placeholder="Digite sua senha">
            
            <button class="login-btn" onclick="validarLoginPlayer()">Entrar</button>
            <button class="voltar" style="width: 100%; margin-top: 10px;" onclick="telaLogin()">← Voltar</button>
        </div>
    `;
}

// Validar login do player
function validarLoginPlayer() {
    const personagem = document.getElementById('personagem').value;
    const senha = document.getElementById('senha').value;
    
    if (!personagem) {
        alert('Por favor, escolha um personagem!');
        return;
    }
    
    if (senha !== personagens[personagem].senha) {
        alert('Senha incorreta!');
        return;
    }
    
    personagemAtual = personagem;
    tipoUsuario = 'player';
    renderizarInventarioPlayer();
}

// Tela de login para mestre
function telaLoginMestre() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="login-container">
            <h1>HEXATOMBE</h1>
            <h2 style="color: #ff6b6b; text-align: center; border: none; margin-top: 0;">Login do Mestre</h2>
            
            <label for="senhaMestre">Senha do Mestre:</label>
            <input type="password" id="senhaMestre" placeholder="Digite a senha do mestre">
            
            <button class="login-btn" onclick="validarLoginMestre()">Entrar</button>
            <button class="voltar" style="width: 100%; margin-top: 10px;" onclick="telaLogin()">← Voltar</button>
        </div>
    `;
}

// Validar login do mestre
function validarLoginMestre() {
    const senha = document.getElementById('senhaMestre').value;
    
    if (senha !== 'hexatombe123') {
        alert('Senha do Mestre incorreta!');
        return;
    }
    
    tipoUsuario = 'mestre';
    mostrarMenuMestre();
}

// Menu do Mestre
function mostrarMenuMestre() {
    const app = document.getElementById('app');
    const personagensLista = Object.keys(personagens).map(nome => `
        <button onclick="abrirInventarioMestre('${nome}')">${nome}</button>
    `).join('');
    
    app.innerHTML = `
        <div class="container">
            <button class="voltar" onclick="telaLogin()">← Logout</button>
            <h1>👑 MESTRE - HEXATOMBE</h1>
            <p>Selecione um personagem para gerenciar:</p>
            <div class="menu">
                ${personagensLista}
            </div>
        </div>
    `;
}

// Inventário do Player (só vê e remove)
function renderizarInventarioPlayer() {
    const app = document.getElementById('app');
    
    let cartasHTML = '';
    personagens[personagemAtual].itens.forEach((carta, indice) => {
        cartasHTML += `
            <div>
                <img
                    src="cartas/${carta}"
                    alt="${carta}"
                    onclick="removerCartaPlayer(${indice})"
                    title="Clique para remover"
                >
            </div>
        `;
    });
    
    app.innerHTML = `
        <div class="container">
            <button class="voltar" onclick="telaLogin()">← Logout</button>
            <h1>${personagemAtual}</h1>
            <p>Clique em uma carta para removê-la</p>
            <div class="inventario">
                ${cartasHTML}
            </div>
        </div>
    `;
}

// Remover carta (Player)
function removerCartaPlayer(indice) {
    if (confirm('Deseja remover esta carta?')) {
        personagens[personagemAtual].itens.splice(indice, 1);
        salvarDados();
        renderizarInventarioPlayer();
    }
}

// Inventário do Mestre (adiciona/remove)
function abrirInventarioMestre(nome) {
    personagemAtual = nome;
    renderizarInventarioMestre();
}

function renderizarInventarioMestre() {
    const app = document.getElementById('app');
    
    let cartasHTML = '';
    personagens[personagemAtual].itens.forEach((carta, indice) => {
        cartasHTML += `
            <div style="position: relative;">
                <img
                    src="cartas/${carta}"
                    alt="${carta}"
                    onclick="removerCartaMestre(${indice})"
                    title="Clique para remover"
                >
                <div style="position: absolute; top: 5px; right: 5px; background: rgba(255, 107, 107, 0.9); color: white; padding: 5px 10px; border-radius: 5px; font-size: 0.8em; cursor: pointer;" onclick="removerCartaMestre(${indice})">✕</div>
            </div>
        `;
    });
    
    app.innerHTML = `
        <div class="container">
            <button class="voltar" onclick="mostrarMenuMestre()">← Voltar</button>
            <h1>👑 ${personagemAtual}</h1>
            <button class="mestre-btn" style="width: 100%; margin-bottom: 20px;" onclick="mostrarAdicionarCartaMestre()">+ Adicionar Carta</button>
            <p>Clique em uma carta ou no X para remover</p>
            <div class="inventario">
                ${cartasHTML}
            </div>
        </div>
    `;
}

// Remover carta (Mestre)
function removerCartaMestre(indice) {
    if (confirm('Remover esta carta?')) {
        personagens[personagemAtual].itens.splice(indice, 1);
        salvarDados();
        renderizarInventarioMestre();
    }
}

// Mostrar tela de adicionar carta (Mestre)
function mostrarAdicionarCartaMestre() {
    const app = document.getElementById('app');
    
    let lista = '';
    TODAS_CARTAS.forEach(carta => {
        lista += `
            <img
                src="cartas/${carta}"
                alt="${carta}"
                onclick="adicionarCartaMestre('${carta}')"
                title="Clique para adicionar"
            >
        `;
    });
    
    app.innerHTML = `
        <div class="container">
            <button class="voltar" onclick="renderizarInventarioMestre()">← Voltar</button>
            <h1>👑 Adicionar carta a ${personagemAtual}</h1>
            <p>Clique em uma carta para adicionar</p>
            <div class="inventario">
                ${lista}
            </div>
        </div>
    `;
}

// Adicionar carta (Mestre)
function adicionarCartaMestre(carta) {
    personagens[personagemAtual].itens.push(carta);
    salvarDados();
    renderizarInventarioMestre();
}

// Iniciar aplicação
carregarDados();
telaLogin();