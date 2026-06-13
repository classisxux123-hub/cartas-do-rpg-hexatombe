# HEXATOMBE - Inventário RPG

Site para gerenciar inventários de personagens em um RPG chamado Hexatombe.

## 🎮 Características

- **Login separado** para Jogadores e Mestre
- **Jogadores**: Visualizam e removem suas próprias cartas
- **Mestre**: Gerencia cartas de todos os personagens (adiciona e remove)
- **Dados persistem** usando localStorage
- **Design responsivo** para desktop e mobile
- **Interface temática** inspirada em RPG

## 🚀 Como usar

1. Abra `index.html` no navegador
2. Escolha se é Jogador ou Mestre
   - **Jogador**: Login com nome do personagem + senha
   - **Mestre**: Senha: `hexatombe123`

## 📁 Estrutura

```
├── index.html      # Arquivo principal HTML
├── style.css       # Estilos CSS
├── app.js          # Lógica JavaScript
├── cartas/         # Pasta com as imagens das cartas (PNG)
└── README.md       # Este arquivo
```

## 🖼️ Imagens

Coloque todas as imagens das cartas na pasta `cartas/` em formato PNG.

## 🔐 Senhas Padrão

### Jogadores
- Kemi: `filha`
- Aguiar: `mar`
- Henri: `sacrificio`
- E todos os outros conforme definido no `app.js`

### Mestre
- Senha: `hexatombe123`

## 🌐 Deploy no Netlify

1. Conecte seu repositório GitHub ao Netlify
2. Configure a pasta raiz como `.`
3. Deploy automático a cada push para `main`

## 📝 Notas

- Os dados são salvos no localStorage do navegador
- Cada navegador/dispositivo tem seus próprios dados
- Para sincronizar dados entre dispositivos, considere usar um backend no futuro
