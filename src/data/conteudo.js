/* =====================================================================
   CONTEÚDO DO SITE — este é o arquivo que você mais vai editar.
   Aqui ficam textos, datas, preço, links, equipe, depoimentos, etc.
   Dica: mexa só no que está entre aspas ou dentro de [ ] e { }.
   Depois de salvar, o navegador atualiza sozinho (com "npm run dev").
   ===================================================================== */

/* ---------------------------------------------------------------------
   1) INFORMAÇÕES GERAIS DO EVENTO
   --------------------------------------------------------------------- */
export const evento = {
  nome: 'CONECTADOS',
  subtitulo: 'Acampamento de Final de Ano — Retiro de Jovens',
  frase: 'Dias especiais para fortalecer a fé, viver a comunhão e criar experiências que ficam para a vida.',
  datas: '27 e 28/11',   // Para mudar a data, altere aqui (aparece em vários lugares)
  valor: 'R$ 200,00',    // Para mudar o preço, altere aqui
  fraseRodape: 'Conectados com Deus, com as pessoas e com nós mesmos.',

  /* LINK DE INSCRIÇÃO
     Cole entre as aspas o endereço do formulário ou do WhatsApp.
     Exemplo: 'https://forms.gle/seu-formulario'
     Enquanto estiver vazio (''), o botão mostra "Informações em breve". */
  linkInscricao: 'https://forms.gle/z7r1LAYRkvLRryXY7',
}

/* ---------------------------------------------------------------------
   2) MENU
   'id' precisa ser igual ao id da seção (veja o início de cada arquivo em /sections).
   Para remover um item, apague a linha. Para adicionar, copie uma linha e mude os textos.
   --------------------------------------------------------------------- */
export const itensMenu = [
  { texto: 'Início', id: 'inicio' },
  { texto: 'Sobre o acampamento', id: 'sobre' },
  { texto: 'O que está incluso', id: 'incluso' },
  { texto: 'O que levar', id: 'o-que-levar' },
  { texto: 'Programação', id: 'programacao' },
  { texto: 'Nossa equipe', id: 'equipe' },
  { texto: 'Experiências', id: 'experiencias' },
  { texto: 'Perguntas frequentes', id: 'perguntas' },
  { texto: 'Localização', id: 'localizacao' },
  { texto: 'Inscrição', id: 'inscricao' },
]

/* ---------------------------------------------------------------------
   3) SOBRE
   --------------------------------------------------------------------- */
export const sobre = {
  titulo: 'Conexão que transforma',
  texto: 'Serão dias especiais de conexão com Deus, com outras pessoas e consigo mesmo. Um tempo de comunhão, alegria, fé e experiências que marcam a vida.',
  // Três palavras de destaque (aparecem embaixo do texto). Pode trocar ou apagar.
  destaques: [
    { titulo: 'Com Deus', texto: 'Mateus 19:26 — “Para Deus, todas as coisas são possíveis.”' },
    { titulo: 'Comunhão', texto: 'Salmos 133:1 — “Como é bom e agradável quando os irmãos convivem em união!”' },
    { titulo: 'Consigo mesmo', texto: 'Salmos 34:8 — “Provem e vejam como o Senhor é bom.”' },
  ],
}

/* ---------------------------------------------------------------------
   4) O QUE ESTÁ INCLUSO
   'icone' é um emoji. Para adicionar um item, copie uma linha.
   --------------------------------------------------------------------- */
export const incluso = [
  { icone: '🍽️', texto: 'Jantar de sexta-feira' },
  { icone: '☕', texto: 'Café da manhã de sábado' },
  { icone: '🥗', texto: 'Almoço de sábado' },
  { icone: '🍪', texto: 'Lanche da tarde de sábado' },
  { icone: '⛺', texto: 'Entrada no local do retiro' },
  { icone: '🎲', texto: 'Jogos e atividades recreativas' },
  { icone: '✨', texto: 'Toda a programação e estrutura do evento' },
]

/* ---------------------------------------------------------------------
   5) O QUE LEVAR (vira um checklist clicável)
   --------------------------------------------------------------------- */
export const oQueLevar = [
  'Roupas confortáveis',
  'Itens de higiene pessoal',
  'Barraca',
  'Colchão',
  'Roupa de cama',
  'Travesseiro',
  'Toalha de banho',
  'Medicamentos de uso pessoal, caso necessário',
  'Biblia',
  'coração aberto',
]
export const avisoOQueLevar = 'Não é permitido o uso de biquínis ou sungas!!!!!!!!!'

/* ---------------------------------------------------------------------
   6) PROGRAMAÇÃO
   Ainda NÃO definida. Os itens abaixo são só EXEMPLOS (exemplo: true).
   Quando tiver a programação real:
     - apague os exemplos e coloque os seus, com exemplo: false (ou sem essa linha);
     - 'descricao' é opcional (pode apagar).
   --------------------------------------------------------------------- */
export const programacao = [
  {
    dia: 'Sexta-feira, 27/11',
    atividades: [
      { horario: '00:00', atividade: 'Atividade a definir', descricao: 'Descrição opcional.', exemplo: true },
      { horario: '00:00', atividade: 'Atividade a definir', exemplo: true },
    ],
  },
  {
    dia: 'Sábado, 28/11',
    atividades: [
      { horario: '00:00', atividade: 'Atividade a definir', descricao: 'Descrição opcional.', exemplo: true },
      { horario: '00:00', atividade: 'Atividade a definir', exemplo: true },
    ],
  },
]
export const avisoProgramacao = 'A programação será divulgada em breve. Os itens abaixo são apenas um modelo.'

/* ---------------------------------------------------------------------
   7) EQUIPE
   Ainda sem nomes: são espaços reservados (exemplo: true).
   Para colocar foto: salve a imagem em public/images/equipe/ e escreva
   foto: '/images/equipe/nome-do-arquivo.jpg'
   --------------------------------------------------------------------- */
export const equipe = [
  { nome: 'Wellington Willian', funcao: 'Lider de Jovens', descricao: 'Sou Wellington Willian, cristão, casado com Juliana Bernardes e líder de jovens na Igreja Recomeça, em Joinville. Sirvo com dedicação, buscando apoiar e incentivar os jovens em sua caminhada com Deus.', foto: '../images/equipe/weth.jpeg', exemplo: true },
  { nome: 'Juliana Bernardes', funcao: 'Lider de Jovens', descricao: 'Sou Juliana Bernardes, cristã, casada com Wellington Willian e serva na Igreja Recomeça, em Joinville. Tenho carinho especial pelos jovens e alegria em caminhar com eles na fé, compartilhando amor, cuidado e a Palavra de Deus.', foto: '../images/equipe/juliana.jpeg', exemplo: true },
  { nome: 'Jefferson Moralles', funcao: 'Lider de Jovens', descricao: 'Sou Jefferson Moralles, cristão, casado com Ana Karolina e servo na Igreja Recomeça, em Joinville. Tenho alegria em caminhar com os jovens, compartilhando a fé, a Palavra de Deus e momentos que fortalecem nossa caminhada.', foto: '../images/equipe/jef.jpeg', exemplo: true },
  { nome: 'Ana Karolina', funcao: 'Lider de Jovens', descricao: 'Sou Ana Karolina, cristã, casada com Jefferson Moralles e serva na Igreja Recomeça, em Joinville. Amo estar perto dos jovens, acolher, ouvir e caminhar com eles, compartilhando a fé e o amor de Deus. ', foto: '../images/equipe/ana.jpeg', exemplo: true },
]

/* ---------------------------------------------------------------------
   8) DEPOIMENTOS
   Ainda sem depoimentos reais: os abaixo são espaços reservados (exemplo: true).
   Foto opcional: salve em public/images/depoimentos/ e use
   foto: '/images/depoimentos/nome-do-arquivo.jpg'
   Só publique com a autorização da pessoa.
   --------------------------------------------------------------------- */
export const depoimentos = [
  { texto: 'Graça e paz jovens! Eu sou o Davi e minha última experiência no retiro dos conectados foi algo surreal!!! Não foi só um retiro, foi o retiro que mostrou que mostrou que eu tenho uma família que não é de sangue, eu conheci ótimos amigos e o principal, eu fui cheio do Espírito Santo naqueles dias.', nome: 'Davi Heitor', foto: '../images/depoimentos/davi.jpeg', exemplo: true },
  { texto: 'O retiro no início do ano, foi uma experiência única, muita diversão,  presença de Deus no lugar, diversas gincanas, ensinamentos, louvores, e esse foi o primeiro retiro que tive no conectados, uma experiência que recomendo demais.', nome: 'Gustavo de Oliveira', foto: '../images/depoimentos/gusta.jpeg', exemplo: true },
  { texto: 'Aqui entrará o depoimento de quem participou de uma edição anterior.', nome: 'Nome da pessoa', foto: '', exemplo: true },
  { texto: 'Aqui entrará o depoimento de quem participou de uma edição anterior.', nome: 'Nome da pessoa', foto: '', exemplo: true },
]

/* ---------------------------------------------------------------------
   9) LOCALIZAÇÃO
   Preencha quando o local for divulgado. Se ficar vazio, aparece a mensagem "em breve".
   --------------------------------------------------------------------- */
export const localizacao = {
  mensagemEmBreve: 'Em breve divulgaremos o local do nosso encontro.',
  endereco: '',    // Ex.: 'Rua Exemplo, 123 — Cidade/UF'
  linkMapa: '',    // Link do Google Maps (botão "Abrir no mapa")
  mapaIncorporado: '', // Endereço do <iframe> do Google Maps (Compartilhar > Incorporar mapa > copie só o "src")
}

/* ---------------------------------------------------------------------
   10) PERGUNTAS FREQUENTES
   Para adicionar: copie um bloco { pergunta, resposta }.
   Respostas vazias ficam como "Informações em breve".
   --------------------------------------------------------------------- */
export const perguntas = [
  { pergunta: 'Qual é o valor do acampamento?', resposta: `A inscrição custa ${evento.valor}.` },
  {
    pergunta: 'O que está incluso na inscrição?',
    resposta: 'Jantar de sexta, café da manhã, almoço e lanche da tarde de sábado, entrada no local, jogos e atividades recreativas e toda a programação e estrutura do evento.',
  },
  {
    pergunta: 'O que preciso levar?',
    resposta: 'Roupas confortáveis, itens de higiene, barraca, colchão, roupa de cama, travesseiro, toalha de banho e medicamentos de uso pessoal, se necessário. Não é permitido o uso de biquínis ou sungas.',
  },
  { pergunta: 'Quando será o acampamento?', resposta: `Nos dias ${evento.datas}.` },
  { pergunta: 'Onde será realizado?', resposta: '' }, // vazio = "Informações em breve"
  { pergunta: 'Como faço minha inscrição?', resposta: '' }, // troque quando o link estiver disponível
]

/* ---------------------------------------------------------------------
   11) RODAPÉ — redes sociais e contato (deixe '' se ainda não tiver)
   --------------------------------------------------------------------- */
export const rodape = {
  instagram: 'https://www.instagram.com/conectadosjoinville/',   // Ex.: 'https://instagram.com/seuperfil'
  contato: '',     // Ex.: 'contato@exemplo.com' ou '(00) 00000-0000'
}
