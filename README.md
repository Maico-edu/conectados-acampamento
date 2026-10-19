# CONECTADOS — Acampamento de Final de Ano | Retiro de Jovens

Site feito em **Vue 3** (Composition API) com **Vite**. Tudo em português, com comentários nos arquivos explicando onde mexer.

> **Regra de ouro:** quase tudo que você quer mudar (textos, data, preço, links, equipe, depoimentos, programação, localização) está em **`src/data/conteudo.js`**.

---

## 1. Instalar o Node.js
1. Acesse https://nodejs.org e baixe a versão **LTS**.
2. Instale (avançar, avançar...).
3. Confira no terminal: `node -v` (deve mostrar um número, ex.: v20 ou maior).

## 2. Abrir no Visual Studio Code
Extraia o ZIP. No VS Code: **Arquivo → Abrir Pasta…** e escolha a pasta `conectados-acampamento` (a que contém o `package.json`).

## 3. Instalar as dependências
No VS Code: **Terminal → Novo Terminal** (ele já abre na pasta certa) e rode:
```
npm install
```
*O que faz:* baixa as bibliotecas que o site usa (cria a pasta `node_modules`). Só precisa fazer uma vez.

## 4 e 5. Iniciar e ver no navegador
```
npm run dev
```
*O que faz:* liga o site no seu computador. Abra o endereço mostrado (normalmente http://localhost:5173). Ao salvar um arquivo, a página atualiza sozinha. Para parar: `Ctrl + C`.

## 6. Gerar a versão de produção
```
npm run build
```
*O que faz:* cria a pasta `dist` com o site otimizado, pronto para publicar. (`npm run preview` mostra essa versão localmente.)

---

## 7. Trocar a logo
Substitua o arquivo **`public/images/logo-conectados.png`** pela logo oficial (mesmo nome). Prefira PNG com fundo transparente e **cores claras/brancas para a versão da abertura** (fundo escuro).

> ⚠️ **Atenção:** a logo que veio no projeto é **provisória**: foi recortada da imagem de referência (só as letras, em branco), com resolução baixa. Troque pela logo oficial em alta qualidade.
> Se usar outro nome/formato (ex.: `.svg`), altere `CAMINHO_LOGO` em `src/components/TelaAbertura.vue` e o `src` da imagem em `src/components/Rodape.vue`.

## 8. Adicionar fotos
- Equipe: salve em `public/images/equipe/` e, em `conteudo.js`, escreva `foto: '/images/equipe/nome.jpg'`.
- Depoimentos: salve em `public/images/depoimentos/` e use `foto: '/images/depoimentos/nome.jpg'`.
- Galeria de fotos: edite `galeriaFotos` em `src/data/conteudo.js`; cada item recebe `src`, `alt` e `titulo`.
(Sem `public` no caminho; o site já entende.)

## 9. Galeria de vídeos
A estrutura da galeria fica em `src/data/conteudo.js`, em `galeriaVideos`. Para adicionar um vídeo real, use o objeto:
```
{ titulo: 'Nome do vídeo', poster: '/images/depoimentos/imagem.jpg', src: 'https://www.youtube.com/embed/ID_DO_VIDEO' }
```
Se a lista estiver vazia, a seção mostra uma mensagem pronta para receber novos registros e não exibe conteúdo fictício.

## 10. Alterar textos
Abra `src/data/conteudo.js` e mude o que está entre aspas. Textos que só existem em uma seção (ex.: o título "O que levar") estão no arquivo dela em `src/sections/`.

## 10. Cores e fontes
- **Cores:** `src/style.css`, bloco `:root` (`--champagne`, `--noite`, `--degrade-esfera`...).
- **Fontes:** o link do Google Fonts está em `index.html`; os nomes usados estão em `--fonte-titulo` e `--fonte-texto` no `style.css`. Troque nos dois lugares.

## 11. Preço e data
Em `conteudo.js`, objeto `evento`: `valor` e `datas`. Mudam em todo o site. (As respostas das perguntas frequentes de valor e data já usam esses campos.)

## 12. Link de inscrição
Em `conteudo.js`: `linkInscricao: 'https://...'`. Enquanto estiver vazio, os botões mostram "Informações em breve". A pergunta "Como faço minha inscrição?" tem `resposta` vazia; escreva o texto quando quiser.

## 13. Editar a equipe
`conteudo.js` → lista `equipe`. Copie um bloco `{ ... },` para adicionar; apague para remover. Ao colocar dados reais, apague `exemplo: true` (some a etiqueta "Espaço reservado").

## 14. Adicionar depoimentos
`conteudo.js` → lista `depoimentos`. Mesma lógica. Publique só com autorização da pessoa.

## 15. Preencher a programação
`conteudo.js` → `programacao`. Cada dia tem `atividades` com `horario`, `atividade` e `descricao` (opcional). Apague `exemplo: true` e o texto `avisoProgramacao` quando for a programação real.

## 16. Inserir a localização
`conteudo.js` → `localizacao`: preencha `endereco`, `linkMapa` (link do Google Maps) e `mapaIncorporado` (só o endereço `src` do iframe do Google Maps). Enquanto tudo estiver vazio, aparece "Em breve divulgaremos o local...".

## 17. Animação de abertura
Arquivo `src/components/TelaAbertura.vue`, no topo do `<script>`:
- `ATRASO_INICIAL_MS`: espera antes de começar;
- `DURACAO_REVELACAO_MS`: velocidade da logo (1000 = 1 s);
- `DURACAO_SAIDA_MS`: duração da transição para o site.
As cores da esfera: `--degrade-esfera` em `style.css`. Para desligar a abertura nos testes, use `aberturaVisivel = ref(false)` em `src/App.vue`.

## 18. Publicar na Vercel (depois)
1. Crie uma conta em https://vercel.com e um repositório no GitHub com o projeto.
2. Na Vercel: **Add New → Project**, escolha o repositório.
3. A Vercel detecta o Vite sozinha (build: `npm run build`, saída: `dist`). Clique em **Deploy**.

---

## Onde fica cada coisa
| Quero mexer em… | Arquivo |
|---|---|
| Conteúdo (textos, preços, listas) | `src/data/conteudo.js` |
| Cores e regras gerais | `src/style.css` |
| Abertura animada | `src/components/TelaAbertura.vue` |
| Menu | `src/components/MenuNavegacao.vue` (itens em `conteudo.js`) |
| Ordem das seções | `src/App.vue` |
| Visual de cada seção | `src/sections/*.vue` |

## Adaptações em relação à imagem de referência
A esfera, o anel rosa e o fundo escuro da referência foram recriados em CSS (para ficarem nítidos em qualquer tela e animarem). Não foi possível usar a foto de referência como fundo, pois ela tem faixas pretas e resolução limitada para telas grandes. A logo provisória é o texto recortado dessa imagem.

## Menu
Itens em `itensMenu` (`conteudo.js`). O `id` de cada item deve ser igual ao `id` da `<section>` correspondente.
