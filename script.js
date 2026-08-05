// ===================== DATA =====================
const contents = [
  {
    id: "mat1",
    title: "Raiz quadrada",
    category: "matematica",
    tags: ["raiz", "quadrada", "radical", "matemática"],
    body: `<p>A <strong>raiz quadrada</strong> de um número é o valor que, multiplicado por ele mesmo, resulta nesse número.</p>
      <p>Exemplo: √25 = 5, porque 5 × 5 = 25.</p>
      <p>Para calcular a raiz quadrada de qualquer número, digite na pesquisa: <em>"raiz quadrada de 20"</em> ou <em>"√20"</em>.</p>`
  },
  {
    id: "mat2",
    title: "Porcentagem",
    category: "matematica",
    tags: ["porcentagem", "porcento", "%", "matemática"],
    body: `<p><strong>Porcentagem</strong> significa "por cento" (a cada 100).</p>
      <p>Para calcular X% de um número: multiplique o número por X e divida por 100.</p>
      <p>Exemplo: 15% de 200 = (15 × 200) ÷ 100 = <strong>30</strong></p>
      <p>Digite na pesquisa: <em>"15% de 200"</em> ou <em>"20 por cento de 150"</em>.</p>`
  },
  {
    id: "mat3",
    title: "Equação do 1º grau",
    category: "matematica",
    tags: ["equação", "primeiro grau", "álgebra", "matemática"],
    body: `<p>Uma equação do 1º grau tem a forma: <strong>ax + b = c</strong></p>
      <p><strong>Exemplo:</strong> 2x + 5 = 17</p>
      <p>2x = 17 - 5<br>2x = 12<br>x = 6</p>
      <p>O objetivo é isolar o <strong>x</strong>.</p>`
  },
  {
    id: "mat4",
    title: "Área do retângulo",
    category: "matematica",
    tags: ["área", "retângulo", "geometria", "matemática"],
    body: `<p>A área de um retângulo é calculada por: <strong>base × altura</strong></p>
      <p>Exemplo: um retângulo de 8 cm por 5 cm tem área = 8 × 5 = <strong>40 cm²</strong></p>`
  },
  {
    id: "mat5",
    title: "Regra de três",
    category: "matematica",
    tags: ["regra de três", "proporção", "matemática"],
    body: `<p>A regra de três serve para encontrar um valor desconhecido em uma proporção.</p>
      <p><strong>Exemplo:</strong> Se 3 canetas custam R$ 12, quanto custam 7 canetas?</p>
      <p>3 → 12<br>7 → x</p>
      <p>x = (7 × 12) ÷ 3 = <strong>R$ 28</strong></p>`
  },
  {
    id: "mat6",
    title: "Potenciação",
    category: "matematica",
    tags: ["potência", "potenciação", "expoente", "matemática"],
    body: `<p>Potenciação é a multiplicação de um número por ele mesmo várias vezes.</p>
      <p>Exemplo: 2³ = 2 × 2 × 2 = <strong>8</strong></p>
      <p>A base é 2 e o expoente é 3.</p>
      <p>Qualquer número elevado a 0 é 1 (ex: 5⁰ = 1).</p>`
  },
  {
    id: "mat7",
    title: "Frações",
    category: "matematica",
    tags: ["fração", "frações", "numerador", "denominador", "matemática"],
    body: `<p>Uma fração representa partes de um todo: <strong>numerador / denominador</strong>.</p>
      <p>Exemplo: 3/4 significa 3 partes de um total de 4.</p>
      <p>Para somar frações com o mesmo denominador: some os numeradores e mantenha o denominador.</p>
      <p>1/5 + 2/5 = 3/5</p>`
  },
  {
    id: "mat8",
    title: "Média aritmética",
    category: "matematica",
    tags: ["média", "aritmética", "estatística", "matemática"],
    body: `<p>Média aritmética = soma dos valores ÷ quantidade de valores.</p>
      <p>Exemplo: notas 7, 8 e 9 → (7+8+9) ÷ 3 = <strong>8</strong></p>`
  },
  {
    id: "mat9",
    title: "Área do triângulo",
    category: "matematica",
    tags: ["área", "triângulo", "geometria", "matemática"],
    body: `<p>Área do triângulo = <strong>(base × altura) ÷ 2</strong></p>
      <p>Exemplo: base 10 cm e altura 6 cm → (10 × 6) ÷ 2 = <strong>30 cm²</strong></p>`
  },
  {
    id: "mat10",
    title: "Equação do 2º grau",
    category: "matematica",
    tags: ["equação", "segundo grau", "bhaskara", "matemática"],
    body: `<p>Forma: <strong>ax² + bx + c = 0</strong></p>
      <p>Fórmula de Bhaskara: x = (−b ± √(b² − 4ac)) / (2a)</p>
      <p>O discriminante Δ = b² − 4ac determina o número de raízes reais.</p>`
  },
  {
    id: "por1",
    title: "Sujeito e Predicado",
    category: "portugues",
    tags: ["sujeito", "predicado", "gramática", "português"],
    body: `<p><strong>Sujeito:</strong> quem pratica ou sofre a ação.<br>
      <strong>Predicado:</strong> o que se diz sobre o sujeito.</p>
      <p><strong>Exemplo:</strong> "Os alunos estudaram bastante."<br>
      Sujeito: Os alunos<br>
      Predicado: estudaram bastante</p>`
  },
  {
    id: "por2",
    title: "Crase",
    category: "portugues",
    tags: ["crase", "acento grave", "gramática", "português"],
    body: `<p>A crase é a fusão da preposição <strong>a</strong> com o artigo <strong>a</strong> (à).</p>
      <p>Use crase quando houver a preposição "a" + palavra feminina que pede artigo.</p>
      <p>✅ Fui <strong>à</strong> escola.<br>
      ✅ Entreguei o presente <strong>à</strong> professora.<br>
      ❌ Fui a escola. (errado)</p>`
  },
  {
    id: "por3",
    title: "Concordância verbal",
    category: "portugues",
    tags: ["concordância", "verbal", "gramática", "português"],
    body: `<p>O verbo deve concordar em número e pessoa com o sujeito.</p>
      <p>❌ As crianças gosta de brincar.<br>
      ✅ As crianças <strong>gostam</strong> de brincar.</p>`
  },
  {
    id: "por4",
    title: "Ortografia — porque / por que / porquê / por quê",
    category: "portugues",
    tags: ["porque", "por que", "porquê", "ortografia", "português"],
    body: `<p><strong>Por que</strong> → perguntas (Por que você estudou?)<br>
      <strong>Porque</strong> → respostas (Estudei porque quero passar.)<br>
      <strong>Por quê</strong> → fim de frase interrogativa (Você estudou por quê?)<br>
      <strong>Porquê</strong> → substantivo (Não sei o porquê.)</p>`
  },
  {
    id: "por5",
    title: "Figuras de linguagem",
    category: "portugues",
    tags: ["figuras", "linguagem", "metáfora", "português"],
    body: `<p><strong>Metáfora:</strong> comparação sem "como" (Ele é um leão.)<br>
      <strong>Comparação:</strong> usa "como" ou "tal qual".<br>
      <strong>Hipérbole:</strong> exagero (Morri de rir.)<br>
      <strong>Ironia:</strong> dizer o contrário do que se pensa.</p>`
  },
  {
    id: "por6",
    title: "Classes gramaticais",
    category: "portugues",
    tags: ["classes", "gramaticais", "substantivo", "verbo", "português"],
    body: `<p>Principais classes: substantivo, artigo, adjetivo, pronome, verbo, advérbio, preposição, conjunção e interjeição.</p>
      <p><strong>Substantivo:</strong> nomeia seres e coisas (casa, amor).<br>
      <strong>Verbo:</strong> indica ação, estado ou fenômeno (correr, ser, chover).</p>`
  },
  {
    id: "his1",
    title: "Independência do Brasil",
    category: "historia",
    tags: ["independência", "brasil", "dom pedro", "história", "7 de setembro"],
    body: `<p>A Independência do Brasil foi proclamada em <strong>7 de setembro de 1822</strong> por Dom Pedro I, às margens do rio Ipiranga.</p>
      <p>Antes disso, o Brasil era uma colônia de Portugal (desde 1500).</p>
      <p>O grito de "Independência ou Morte!" marcou o fim do domínio português.</p>`
  },
  {
    id: "his2",
    title: "Proclamação da República",
    category: "historia",
    tags: ["república", "proclamação", "deodoro", "história", "15 de novembro"],
    body: `<p>A República foi proclamada em <strong>15 de novembro de 1889</strong>.</p>
      <p>O marechal <strong>Deodoro da Fonseca</strong> foi o primeiro presidente do Brasil.</p>
      <p>Isso encerrou o período monárquico (Império).</p>`
  },
  {
    id: "his3",
    title: "Revolução Francesa",
    category: "historia",
    tags: ["revolução francesa", "1789", "história", "frança"],
    body: `<p>A Revolução Francesa aconteceu em <strong>1789</strong>.</p>
      <p>Lema principal: <em>"Liberdade, Igualdade e Fraternidade"</em>.</p>
      <p>Ela marcou o fim do Absolutismo na França e influenciou o mundo inteiro.</p>`
  },
  {
    id: "his4",
    title: "Descobrimento do Brasil",
    category: "historia",
    tags: ["descobrimento", "brasil", "cabral", "1500", "história"],
    body: `<p>O Brasil foi "descoberto" em <strong>22 de abril de 1500</strong> por Pedro Álvares Cabral.</p>
      <p>A expedição portuguesa chegou a Porto Seguro (Bahia).</p>
      <p>Os portugueses encontraram povos indígenas que já habitavam o território.</p>`
  },
  {
    id: "his5",
    title: "Abolição da Escravatura",
    category: "historia",
    tags: ["abolição", "escravatura", "lei áurea", "1888", "história"],
    body: `<p>A escravidão no Brasil foi abolida em <strong>13 de maio de 1888</strong> pela Lei Áurea.</p>
      <p>A lei foi assinada pela Princesa Isabel.</p>
      <p>O Brasil foi o último país das Américas a abolir a escravidão.</p>`
  },
  {
    id: "his6",
    title: "Era Vargas",
    category: "historia",
    tags: ["vargas", "getúlio", "estado novo", "história"],
    body: `<p>Getúlio Vargas governou o Brasil em dois períodos principais: 1930–1945 e 1951–1954.</p>
      <p>Criou a CLT (Consolidação das Leis do Trabalho) e a Justiça do Trabalho.</p>
      <p>O Estado Novo (1937–1945) foi um período ditatorial.</p>`
  },
  {
    id: "cie1",
    title: "Fotossíntese",
    category: "ciencias",
    tags: ["fotossíntese", "plantas", "cloroplasto", "ciências", "biologia"],
    body: `<p>A <strong>fotossíntese</strong> é o processo pelo qual as plantas produzem seu próprio alimento usando luz solar, água e gás carbônico.</p>
      <p>Ocorre principalmente nos <strong>cloroplastos</strong>.</p>
      <p>Resultado: glicose (alimento) + oxigênio.</p>`
  },
  {
    id: "cie2",
    title: "Célula",
    category: "ciencias",
    tags: ["célula", "citologia", "ciências", "biologia"],
    body: `<p>A célula é a menor unidade da vida. Todos os seres vivos são formados por células.</p>
      <p><strong>Célula animal</strong> × <strong>Célula vegetal</strong>:<br>
      A vegetal tem parede celular e cloroplastos. A animal não.</p>`
  },
  {
    id: "cie3",
    title: "Cadeia alimentar",
    category: "ciencias",
    tags: ["cadeia alimentar", "ecologia", "ciências", "biologia"],
    body: `<p>Cadeia alimentar mostra quem come quem.</p>
      <p>Exemplo: Capim → Gafanhoto → Sapo → Cobra</p>
      <p>O capim é o <strong>produtor</strong>. O gafanhoto é o <strong>consumidor primário</strong>.</p>`
  },
  {
    id: "ing1",
    title: "Verbo to be",
    category: "ingles",
    tags: ["to be", "verbo", "inglês", "am is are"],
    body: `<p>O verbo <strong>to be</strong> significa "ser" ou "estar".</p>
      <p>I <strong>am</strong><br>
      You <strong>are</strong><br>
      He/She/It <strong>is</strong><br>
      We/You/They <strong>are</strong></p>
      <p>Exemplos:<br>
      I am a student.<br>
      She is happy.<br>
      They are my friends.</p>`
  },
  {
    id: "ing2",
    title: "Present Simple",
    category: "ingles",
    tags: ["present simple", "presente", "inglês"],
    body: `<p>Usamos o Present Simple para hábitos e verdades gerais.</p>
      <p>I study every day.<br>
      He plays soccer on weekends.</p>
      <p>Na 3ª pessoa do singular (he/she/it) adicionamos <strong>-s</strong> ou <strong>-es</strong>.</p>`
  },
  {
    id: "ing3",
    title: "Past Simple",
    category: "ingles",
    tags: ["past simple", "passado", "inglês"],
    body: `<p>Usamos o Past Simple para ações terminadas no passado.</p>
      <p>I studied yesterday.<br>
      She went to school.</p>
      <p>Verbos regulares: +ed (play → played). Irregulares têm formas próprias (go → went).</p>`
  },
  {
    id: "fis1",
    title: "Velocidade média",
    category: "fisica",
    tags: ["velocidade", "média", "física", "movimento"],
    body: `<p>Velocidade média = distância ÷ tempo</p>
      <p>Exemplo: um carro percorre 120 km em 2 horas.<br>
      Vm = 120 ÷ 2 = <strong>60 km/h</strong></p>`
  },
  {
    id: "qui1",
    title: "Estados físicos da matéria",
    category: "quimica",
    tags: ["estados físicos", "sólido", "líquido", "gasoso", "química"],
    body: `<p>Os três estados físicos principais são:</p>
      <p>🧊 <strong>Sólido</strong> → forma e volume definidos<br>
      💧 <strong>Líquido</strong> → volume definido, forma variável<br>
      💨 <strong>Gasoso</strong> → forma e volume variáveis</p>`
  }
];

const categories = [
  { id: "matematica", nome: "Matemática", icon: "🔢" },
  { id: "portugues", nome: "Português", icon: "📝" },
  { id: "historia", nome: "História", icon: "🏛️" },
  { id: "ciencias", nome: "Ciências", icon: "🔬" },
  { id: "ingles", nome: "Inglês", icon: "🇬🇧" },
  { id: "fisica", nome: "Física", icon: "⚡" },
  { id: "quimica", nome: "Química", icon: "🧪" },
  { id: "geografia", nome: "Geografia", icon: "🌎" }
];

const quizzes = [
  {
    id: "q1",
    title: "Matemática - Básico",
    category: "matematica",
    level: "facil",
    questions: [
      { q: "Quanto é 15% de 200?", options: ["20", "30", "25", "35"], correct: 1 },
      { q: "Qual é a raiz quadrada de 81?", options: ["8", "9", "10", "7"], correct: 1 },
      { q: "Resolva: 2x + 4 = 14. Qual o valor de x?", options: ["3", "5", "7", "4"], correct: 1 },
      { q: "A área de um retângulo 6 cm × 4 cm é:", options: ["10 cm²", "20 cm²", "24 cm²", "12 cm²"], correct: 2 },
      { q: "3 canetas custam R$ 12. Quanto custam 5 canetas?", options: ["R$ 15", "R$ 18", "R$ 20", "R$ 24"], correct: 1 }
    ]
  },
  {
    id: "q1b",
    title: "Matemática - Intermediário",
    category: "matematica",
    level: "medio",
    questions: [
      { q: "Quanto é 2⁴?", options: ["6", "8", "16", "32"], correct: 2 },
      { q: "A média de 6, 8 e 10 é:", options: ["7", "8", "9", "10"], correct: 1 },
      { q: "Área de um triângulo com base 10 e altura 6:", options: ["30", "60", "16", "20"], correct: 0 },
      { q: "1/4 + 1/4 = ?", options: ["1/8", "1/2", "2/4", "1"], correct: 1 },
      { q: "Se 5 livros custam R$ 40, 8 livros custam:", options: ["R$ 56", "R$ 64", "R$ 72", "R$ 80"], correct: 1 }
    ]
  },
  {
    id: "q1c",
    title: "Matemática - Avançado",
    category: "matematica",
    level: "dificil",
    questions: [
      { q: "Resolva: x² − 5x + 6 = 0. Uma das raízes é:", options: ["1", "2", "5", "6"], correct: 1 },
      { q: "√144 + √25 = ?", options: ["17", "13", "19", "15"], correct: 0 },
      { q: "25% de 25% de 400 é:", options: ["25", "50", "100", "20"], correct: 0 },
      { q: "Se a/b = 2/3 e a = 8, então b =", options: ["10", "12", "14", "16"], correct: 1 },
      { q: "A área de um quadrado de lado √9 é:", options: ["3", "6", "9", "81"], correct: 2 }
    ]
  },
  {
    id: "q2",
    title: "Português - Gramática",
    category: "portugues",
    level: "facil",
    questions: [
      { q: "Em 'Os alunos estudaram', o sujeito é:", options: ["estudaram", "Os alunos", "alunos estudaram", "Os"], correct: 1 },
      { q: "Qual frase está correta?", options: ["Fui a escola", "Fui à escola", "Fui á escola", "Fui a à escola"], correct: 1 },
      { q: "Qual está com a concordância certa?", options: ["As crianças gosta", "As crianças gostam", "As criança gostam", "A crianças gosta"], correct: 1 },
      { q: "A crase é a fusão de:", options: ["a + o", "a + a", "e + a", "de + a"], correct: 1 },
      { q: "Em 'Ela chegou cedo', o predicado é:", options: ["Ela", "chegou", "chegou cedo", "Ela chegou"], correct: 2 }
    ]
  },
  {
    id: "q2b",
    title: "Português - Ortografia e Figuras",
    category: "portugues",
    level: "medio",
    questions: [
      { q: "Qual forma usar em resposta? 'Estudei ___ quero passar.'", options: ["por que", "porque", "porquê", "por quê"], correct: 1 },
      { q: "'Ele é um leão' é exemplo de:", options: ["Comparação", "Metáfora", "Hipérbole", "Ironia"], correct: 1 },
      { q: "Em fim de pergunta: 'Você foi por ___?'", options: ["porque", "por que", "porquê", "por quê"], correct: 3 },
      { q: "Classe da palavra 'correr':", options: ["Substantivo", "Adjetivo", "Verbo", "Advérbio"], correct: 2 },
      { q: "'Morri de rir' é:", options: ["Metáfora", "Comparação", "Hipérbole", "Personificação"], correct: 2 }
    ]
  },
  {
    id: "q3",
    title: "História do Brasil - Básico",
    category: "historia",
    level: "facil",
    questions: [
      { q: "Em que ano foi a Independência do Brasil?", options: ["1808", "1822", "1889", "1500"], correct: 1 },
      { q: "Quem proclamou a Independência?", options: ["Dom João VI", "Dom Pedro I", "Deodoro da Fonseca", "Getúlio Vargas"], correct: 1 },
      { q: "A República foi proclamada em:", options: ["7 de setembro de 1822", "15 de novembro de 1889", "15 de novembro de 1822", "7 de setembro de 1889"], correct: 1 },
      { q: "Quem foi o primeiro presidente do Brasil?", options: ["Getúlio Vargas", "Dom Pedro II", "Deodoro da Fonseca", "Juscelino Kubitschek"], correct: 2 },
      { q: "O lema da Revolução Francesa era:", options: ["Ordem e Progresso", "Liberdade, Igualdade e Fraternidade", "Independência ou Morte", "Paz e Amor"], correct: 1 }
    ]
  },
  {
    id: "q3b",
    title: "História do Brasil - Avançado",
    category: "historia",
    level: "dificil",
    questions: [
      { q: "Em que data o Brasil foi 'descoberto'?", options: ["7 de setembro de 1822", "22 de abril de 1500", "15 de novembro de 1889", "13 de maio de 1888"], correct: 1 },
      { q: "A Lei Áurea foi assinada em:", options: ["1822", "1888", "1889", "1930"], correct: 1 },
      { q: "Quem assinou a Lei Áurea?", options: ["Dom Pedro II", "Princesa Isabel", "Deodoro da Fonseca", "Getúlio Vargas"], correct: 1 },
      { q: "A CLT foi criada no governo de:", options: ["Deodoro", "Getúlio Vargas", "JK", "Lula"], correct: 1 },
      { q: "O Estado Novo durou de:", options: ["1930–1937", "1937–1945", "1945–1951", "1951–1954"], correct: 1 }
    ]
  },
  {
    id: "q4",
    title: "Ciências - Natureza",
    category: "ciencias",
    level: "facil",
    questions: [
      { q: "A fotossíntese acontece principalmente nos:", options: ["Mitocôndrias", "Cloroplastos", "Ribossomos", "Núcleo"], correct: 1 },
      { q: "A menor unidade da vida é:", options: ["O átomo", "A célula", "A molécula", "O tecido"], correct: 1 },
      { q: "Na cadeia Capim → Gafanhoto → Sapo, o gafanhoto é:", options: ["Produtor", "Consumidor primário", "Consumidor secundário", "Decompositor"], correct: 1 },
      { q: "A célula vegetal tem, e a animal não tem:", options: ["Núcleo", "Membrana", "Parede celular e cloroplastos", "Citoplasma"], correct: 2 },
      { q: "As plantas produzem oxigênio durante a:", options: ["Respiração", "Fotossíntese", "Digestão", "Transpiração"], correct: 1 }
    ]
  },
  {
    id: "q5",
    title: "Inglês - Básico",
    category: "ingles",
    level: "facil",
    questions: [
      { q: "Complete: She _____ a teacher.", options: ["am", "is", "are", "be"], correct: 1 },
      { q: "Complete: I _____ from Brazil.", options: ["is", "are", "am", "be"], correct: 2 },
      { q: "Complete: They _____ my friends.", options: ["is", "am", "are", "be"], correct: 2 },
      { q: "Qual está no Present Simple?", options: ["I am studying", "I study every day", "I studied", "I will study"], correct: 1 },
      { q: "He _____ soccer on Sundays.", options: ["play", "plays", "playing", "played"], correct: 1 }
    ]
  },
  {
    id: "q5b",
    title: "Inglês - Passado",
    category: "ingles",
    level: "medio",
    questions: [
      { q: "Past de 'go':", options: ["goed", "went", "gone", "goes"], correct: 1 },
      { q: "I _____ to the park yesterday.", options: ["go", "goes", "went", "going"], correct: 2 },
      { q: "She _____ a book last week.", options: ["read", "reads", "reading", "readed"], correct: 0 },
      { q: "They _____ football on Sunday.", options: ["play", "played", "playing", "plays"], correct: 1 },
      { q: "Past de 'study' (regular):", options: ["studyed", "studied", "studies", "studying"], correct: 1 }
    ]
  }
];

const builtInFlashcards = [
  { id: "fc1", q: "Fórmula da área do retângulo?", a: "base × altura", category: "matematica", custom: false },
  { id: "fc2", q: "Fórmula da área do triângulo?", a: "(base × altura) ÷ 2", category: "matematica", custom: false },
  { id: "fc3", q: "√81 = ?", a: "9", category: "matematica", custom: false },
  { id: "fc4", q: "15% de 200 = ?", a: "30", category: "matematica", custom: false },
  { id: "fc5", q: "O que é crase?", a: "Fusão da preposição 'a' com o artigo 'a' (à)", category: "portugues", custom: false },
  { id: "fc6", q: "Sujeito é...", a: "Quem pratica ou sofre a ação", category: "portugues", custom: false },
  { id: "fc7", q: "Data da Independência do Brasil?", a: "7 de setembro de 1822", category: "historia", custom: false },
  { id: "fc8", q: "Quem proclamou a República?", a: "Deodoro da Fonseca (15/11/1889)", category: "historia", custom: false },
  { id: "fc9", q: "Onde ocorre a fotossíntese?", a: "Principalmente nos cloroplastos", category: "ciencias", custom: false },
  { id: "fc10", q: "I ___ a student (to be)", a: "am", category: "ingles", custom: false },
  { id: "fc11", q: "She ___ happy (to be)", a: "is", category: "ingles", custom: false },
  { id: "fc12", q: "They ___ my friends (to be)", a: "are", category: "ingles", custom: false },
  { id: "fc13", q: "Data da Lei Áurea?", a: "13 de maio de 1888", category: "historia", custom: false },
  { id: "fc14", q: "Fórmula de Bhaskara (resumo)", a: "x = (−b ± √Δ) / 2a , onde Δ = b² − 4ac", category: "matematica", custom: false },
  { id: "fc15", q: "Por que × Porque × Por quê × Porquê", a: "Pergunta / Resposta / Fim de pergunta / Substantivo", category: "portugues", custom: false }
];

// ===================== STATE =====================
let currentUser = null;
let state = {
  favorites: [],
  history: [],
  stats: { exercicios: 0, acertos: 0, pesquisas: 0, pomodoros: 0 },
  notes: [],
  customFlashcards: [],
  streak: 0,
  lastStudyDate: null,
  pomoToday: 0,
  pomoTodayDate: null,
  currentQuiz: null,
  currentQuestion: 0,
  currentScore: 0,
  theme: localStorage.getItem("estudaja_theme") || "light",
  flashDeck: [],
  flashIndex: 0,
  flashFlipped: false,
  editingNoteId: null,
  exerciseFilter: "all",
  exerciseLevel: "all",
  flashFilter: "all"
};

let pomoInterval = null;
let pomoSeconds = 25 * 60;
let pomoRunning = false;
let pomoMode = "focus";
const POMO_TIMES = { focus: 25 * 60, short: 5 * 60, long: 15 * 60 };

function getUsers() {
  return JSON.parse(localStorage.getItem("estudaja_users") || "{}");
}
function saveUsers(users) {
  localStorage.setItem("estudaja_users", JSON.stringify(users));
}
function getUserData(username) {
  const key = "estudaja_data_" + username;
  return JSON.parse(localStorage.getItem(key) || JSON.stringify({
    favorites: [], history: [],
    stats: { exercicios: 0, acertos: 0, pesquisas: 0, pomodoros: 0 },
    notes: [], customFlashcards: [], streak: 0, lastStudyDate: null,
    pomoToday: 0, pomoTodayDate: null
  }));
}
function saveUserData(username, data) {
  localStorage.setItem("estudaja_data_" + username, JSON.stringify(data));
}
function switchLoginTab(tab) {
  document.querySelectorAll(".login-tab").forEach(t => t.classList.remove("active"));
  document.querySelector(`.login-tab[data-tab="${tab}"]`).classList.add("active");
  document.getElementById("formEntrar").style.display = tab === "entrar" ? "block" : "none";
  document.getElementById("formCriar").style.display = tab === "criar" ? "block" : "none";
  document.getElementById("loginError").textContent = "";
  document.getElementById("registerError").textContent = "";
}
function doRegister() {
  const user = document.getElementById("registerUser").value.trim();
  const pass = document.getElementById("registerPass").value;
  const pass2 = document.getElementById("registerPass2").value;
  const error = document.getElementById("registerError");
  if (!user || user.length < 2) { error.textContent = "Digite um nome com pelo menos 2 caracteres."; return; }
  if (!pass || pass.length < 3) { error.textContent = "A senha precisa ter pelo menos 3 caracteres."; return; }
  if (pass !== pass2) { error.textContent = "As senhas não são iguais."; return; }
  const users = getUsers();
  if (users[user.toLowerCase()]) { error.textContent = "Esse nome de usuário já existe. Escolha outro."; return; }
  users[user.toLowerCase()] = { username: user, password: pass };
  saveUsers(users);
  currentUser = user;
  localStorage.setItem("estudaja_current", user);
  loadUserState();
  showApp();
}
function doLogin() {
  const user = document.getElementById("loginUser").value.trim();
  const pass = document.getElementById("loginPass").value;
  const error = document.getElementById("loginError");
  if (!user || !pass) { error.textContent = "Preencha o nome e a senha."; return; }
  const users = getUsers();
  const account = users[user.toLowerCase()];
  if (!account || account.password !== pass) { error.textContent = "Nome ou senha incorretos."; return; }
  currentUser = account.username;
  localStorage.setItem("estudaja_current", currentUser);
  loadUserState();
  showApp();
}
function doLogout() {
  if (pomoInterval) { clearInterval(pomoInterval); pomoInterval = null; pomoRunning = false; }
  currentUser = null;
  localStorage.removeItem("estudaja_current");
  document.getElementById("app").style.display = "none";
  document.getElementById("loginScreen").style.display = "flex";
  document.getElementById("loginUser").value = "";
  document.getElementById("loginPass").value = "";
  document.getElementById("loginError").textContent = "";
}
function loadUserState() {
  const data = getUserData(currentUser);
  state.favorites = data.favorites || [];
  state.history = data.history || [];
  state.stats = data.stats || { exercicios: 0, acertos: 0, pesquisas: 0, pomodoros: 0 };
  if (!state.stats.pomodoros) state.stats.pomodoros = 0;
  state.notes = data.notes || [];
  state.customFlashcards = data.customFlashcards || [];
  state.streak = data.streak || 0;
  state.lastStudyDate = data.lastStudyDate || null;
  state.pomoToday = data.pomoToday || 0;
  state.pomoTodayDate = data.pomoTodayDate || null;
  const today = getTodayStr();
  if (state.pomoTodayDate !== today) { state.pomoToday = 0; state.pomoTodayDate = today; }
}
function persistUserState() {
  if (!currentUser) return;
  saveUserData(currentUser, {
    favorites: state.favorites, history: state.history, stats: state.stats,
    notes: state.notes, customFlashcards: state.customFlashcards,
    streak: state.streak, lastStudyDate: state.lastStudyDate,
    pomoToday: state.pomoToday, pomoTodayDate: state.pomoTodayDate
  });
}
function getTodayStr() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function recordStudyActivity() {
  const today = getTodayStr();
  if (state.lastStudyDate === today) return;
  if (state.lastStudyDate) {
    const last = new Date(state.lastStudyDate + "T12:00:00");
    const now = new Date(today + "T12:00:00");
    const diffDays = Math.round((now - last) / (1000 * 60 * 60 * 24));
    state.streak = diffDays === 1 ? (state.streak || 0) + 1 : 1;
  } else {
    state.streak = 1;
  }
  state.lastStudyDate = today;
  persistUserState();
  updateStreakUI();
}
function updateStreakUI() {
  const s = state.streak || 0;
  document.getElementById("headerStreak").textContent = "🔥 " + s;
  const textEl = document.getElementById("streakText");
  if (s === 0) textEl.textContent = "Comece a estudar hoje e monte sua sequência!";
  else if (s === 1) textEl.textContent = "Você estudou hoje! Continue amanhã 🔥";
  else textEl.textContent = "Estudei " + s + " dias seguidos 🔥";
}
function showApp() {
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("app").style.display = "block";
  document.getElementById("userNameDisplay").textContent = currentUser;
  document.getElementById("heroUserName").textContent = currentUser;
  document.getElementById("profileName").textContent = currentUser;
  applyTheme();
  renderCategories();
  renderExerciseList();
  updateStreakUI();
  updatePomoStats();
}
function applyTheme() {
  if (state.theme === "dark") {
    document.body.classList.add("dark");
    document.getElementById("themeToggle").textContent = "☀️";
  } else {
    document.body.classList.remove("dark");
    document.getElementById("themeToggle").textContent = "🌙";
  }
}
document.getElementById("themeToggle").addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem("estudaja_theme", state.theme);
  applyTheme();
});
function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.section === id);
  });
  if (id === "favoritos") renderFavorites();
  if (id === "perfil") renderProfile();
  if (id === "exercicios") {
    document.getElementById("exerciseHome").style.display = "block";
    document.getElementById("quizArea").style.display = "none";
    renderExerciseList();
  }
  if (id === "flashcards") {
    document.getElementById("flashHome").style.display = "block";
    document.getElementById("flashStudy").style.display = "none";
    document.getElementById("flashCreate").style.display = "none";
    renderFlashDecks();
  }
  if (id === "anotacoes") {
    document.getElementById("notesHome").style.display = "block";
    document.getElementById("noteEditor").style.display = "none";
    renderNotes();
  }
  if (id === "pomodoro") { updatePomoDisplay(); updatePomoStats(); }
}
function goHome() {
  showSection("home");
  document.getElementById("searchInput").value = "";
  document.getElementById("resultsArea").innerHTML = "";
  document.getElementById("categoriesArea").style.display = "block";
  document.getElementById("suggestions").classList.remove("show");
}

function tryMath(query) {
  const q = query.toLowerCase().trim();
  let match = q.match(/(?:raiz quadrada de|raiz de|√)\s*(\d+(?:\.\d+)?)/i);
  if (match) {
    const num = parseFloat(match[1]);
    const result = Math.sqrt(num);
    return {
      title: `Raiz quadrada de ${num}`,
      html: `<div class="math-result">√${num} ≈ ${result.toFixed(4)}</div>
             <p>Valor aproximado: <strong>${result.toFixed(4)}</strong></p>
             <p>Se for um quadrado perfeito, o resultado é inteiro (ex: √16 = 4).</p>`
    };
  }
  match = q.match(/(\d+(?:\.\d+)?)\s*(?:%|por\s*cento)\s*(?:de\s*)?(\d+(?:\.\d+)?)/i);
  if (match) {
    const pct = parseFloat(match[1]);
    const num = parseFloat(match[2]);
    const result = (pct / 100) * num;
    return {
      title: `${pct}% de ${num}`,
      html: `<div class="math-result">${result}</div>
             <p>Cálculo: (${pct} × ${num}) ÷ 100 = <strong>${result}</strong></p>`
    };
  }
  match = q.match(/^(\d+(?:\.\d+)?)\s*([\+\-\*\/x×])\s*(\d+(?:\.\d+)?)$/);
  if (match) {
    const a = parseFloat(match[1]);
    const op = match[2];
    const b = parseFloat(match[3]);
    let result;
    if (op === "+") result = a + b;
    else if (op === "-") result = a - b;
    else if (op === "*" || op === "x" || op === "×") result = a * b;
    else if (op === "/") result = a / b;
    return { title: `${a} ${op} ${b}`, html: `<div class="math-result">${result}</div>` };
  }
  return null;
}
function search(query) {
  const q = query.trim();
  if (!q) {
    document.getElementById("resultsArea").innerHTML = "";
    document.getElementById("categoriesArea").style.display = "block";
    return;
  }
  if (!state.history.includes(q)) {
    state.history.unshift(q);
    if (state.history.length > 10) state.history.pop();
    state.stats.pesquisas++;
    persistUserState();
  }
  recordStudyActivity();
  document.getElementById("categoriesArea").style.display = "none";
  const resultsArea = document.getElementById("resultsArea");
  let html = "";
  const math = tryMath(q);
  if (math) html += `<div class="result-card"><h3>🧮 ${math.title}</h3>${math.html}</div>`;
  const lower = q.toLowerCase();
  const found = contents.filter(c =>
    c.title.toLowerCase().includes(lower) ||
    c.tags.some(t => t.includes(lower)) ||
    c.body.toLowerCase().includes(lower)
  );
  if (found.length === 0 && !math) {
    html += `<div class="result-card"><h3>Nenhum resultado encontrado</h3>
      <p>Tente pesquisar de outra forma. Exemplos:</p>
      <ul><li>"raiz quadrada de 25"</li><li>"15% de 80"</li><li>"Independência do Brasil"</li>
      <li>"verbo to be"</li><li>"fotossíntese"</li></ul></div>`;
  } else {
    found.forEach(item => {
      const isFav = state.favorites.includes(item.id);
      html += `<div class="result-card"><h3>${item.title}</h3>
        <div class="meta">${getCategoryName(item.category)}</div>${item.body}
        <button class="fav-btn ${isFav ? "active" : ""}" onclick="toggleFavorite('${item.id}', this)">
          ${isFav ? "★ Favoritado" : "☆ Favoritar"}</button></div>`;
    });
  }
  resultsArea.innerHTML = html;
}
function getCategoryName(id) {
  const cat = categories.find(c => c.id === id);
  return cat ? cat.nome : id;
}
function quickSearch(text) {
  document.getElementById("searchInput").value = text;
  document.getElementById("clearSearch").style.display = "block";
  search(text);
  document.getElementById("suggestions").classList.remove("show");
}
const allSuggestions = [
  "raiz quadrada de 16", "raiz quadrada de 25", "raiz quadrada de 100",
  "15% de 200", "20% de 150", "10% de 80",
  "equação do primeiro grau", "área do retângulo", "regra de três",
  "potenciação", "frações", "média aritmética", "equação do segundo grau",
  "Independência do Brasil", "Proclamação da República", "Revolução Francesa",
  "descobrimento do Brasil", "abolição da escravatura", "era vargas",
  "fotossíntese", "célula", "cadeia alimentar",
  "verbo to be", "Present Simple", "Past Simple",
  "sujeito e predicado", "crase", "concordância verbal",
  "porque por que", "figuras de linguagem",
  "velocidade média", "estados físicos da matéria"
];
function showSuggestions(query) {
  const box = document.getElementById("suggestions");
  if (!query || query.length < 2) { box.classList.remove("show"); return; }
  const lower = query.toLowerCase();
  const matches = allSuggestions.filter(s => s.includes(lower)).slice(0, 6);
  if (matches.length === 0) { box.classList.remove("show"); return; }
  box.innerHTML = matches.map(s =>
    `<div class="suggestion-item" onclick="quickSearch('${s}')">🔍 ${s}</div>`
  ).join("");
  box.classList.add("show");
}
function toggleFavorite(id, btn) {
  const idx = state.favorites.indexOf(id);
  if (idx === -1) {
    state.favorites.push(id);
    btn.textContent = "★ Favoritado";
    btn.classList.add("active");
  } else {
    state.favorites.splice(idx, 1);
    btn.textContent = "☆ Favoritar";
    btn.classList.remove("active");
  }
  persistUserState();
}
function renderFavorites() {
  const list = document.getElementById("favoritesList");
  if (state.favorites.length === 0) {
    list.innerHTML = `<p class="empty-msg">Você ainda não favoritou nenhum conteúdo.</p>`;
    return;
  }
  let html = "";
  state.favorites.forEach(id => {
    const item = contents.find(c => c.id === id);
    if (item) {
      html += `<div class="result-card"><h3>${item.title}</h3>
        <div class="meta">${getCategoryName(item.category)}</div>${item.body}
        <button class="fav-btn active" onclick="toggleFavorite('${item.id}', this); renderFavorites();">
          ★ Remover dos favoritos</button></div>`;
    }
  });
  list.innerHTML = html;
}
function renderProfile() {
  document.getElementById("statExercicios").textContent = state.stats.exercicios;
  document.getElementById("statAcertos").textContent = state.stats.acertos;
  document.getElementById("statFavoritos").textContent = state.favorites.length;
  document.getElementById("statPesquisas").textContent = state.stats.pesquisas;
  document.getElementById("statStreak").textContent = state.streak || 0;
  document.getElementById("statPomodoros").textContent = state.stats.pomodoros || 0;
  document.getElementById("statNotes").textContent = state.notes.length;
  document.getElementById("statFlash").textContent = state.customFlashcards.length + builtInFlashcards.length;
  const sub = document.getElementById("profileStreakSub");
  sub.textContent = state.streak >= 3
    ? `🔥 ${state.streak} dias seguidos! Continue assim!`
    : "Continue estudando para ganhar medalhas!";
  document.getElementById("medal1").classList.toggle("locked", state.stats.exercicios < 5);
  document.getElementById("medal2").classList.toggle("locked", state.stats.acertos < 10);
  document.getElementById("medal3").classList.toggle("locked", state.stats.acertos < 25);
  document.getElementById("medal4").classList.toggle("locked", state.favorites.length < 5);
  document.getElementById("medal5").classList.toggle("locked", (state.streak || 0) < 3);
  document.getElementById("medal6").classList.toggle("locked", (state.stats.pomodoros || 0) < 10);
  const hist = document.getElementById("historyList");
  if (state.history.length === 0) {
    hist.innerHTML = `<li class="empty-msg">Nenhuma pesquisa ainda.</li>`;
  } else {
    hist.innerHTML = state.history.map(h =>
      `<li onclick="quickSearch('${h}'); showSection('home');">${h}</li>`
    ).join("");
  }
}
function renderExerciseList() {
  const list = document.getElementById("exerciseList");
  let filtered = state.exerciseFilter === "all" ? quizzes : quizzes.filter(q => q.category === state.exerciseFilter);
  if (state.exerciseLevel !== "all") filtered = filtered.filter(q => q.level === state.exerciseLevel);
  if (filtered.length === 0) {
    list.innerHTML = `<p class="empty-msg">Nenhum exercício encontrado com esses filtros.</p>`;
    return;
  }
  const levelLabel = { facil: "Fácil", medio: "Médio", dificil: "Difícil" };
  list.innerHTML = filtered.map(q => `
    <div class="exercise-card" onclick="startQuiz('${q.id}')">
      <div><h3>${q.title}<span class="level-badge ${q.level}">${levelLabel[q.level] || q.level}</span></h3>
        <span style="font-size:0.85rem;color:var(--text-secondary)">${q.questions.length} questões</span></div>
      <span class="badge">${getCategoryName(q.category)}</span>
    </div>`).join("");
}
function startQuiz(id) {
  state.currentQuiz = quizzes.find(q => q.id === id);
  state.currentQuestion = 0;
  state.currentScore = 0;
  document.getElementById("exerciseHome").style.display = "none";
  document.getElementById("quizArea").style.display = "block";
  document.getElementById("quizResult").style.display = "none";
  document.getElementById("quizContent").style.display = "block";
  showQuestion();
}
function showQuestion() {
  const quiz = state.currentQuiz;
  const idx = state.currentQuestion;
  const question = quiz.questions[idx];
  document.getElementById("quizCounter").textContent = `${idx + 1} / ${quiz.questions.length}`;
  document.getElementById("quizBar").style.width = `${(idx / quiz.questions.length) * 100}%`;
  const optionsHtml = question.options.map((opt, i) =>
    `<button class="option" onclick="answerQuestion(${i})">${String.fromCharCode(65 + i)}) ${opt}</button>`
  ).join("");
  document.getElementById("quizContent").innerHTML = `<div class="question-card"><h3>${question.q}</h3>${optionsHtml}</div>`;
}
function answerQuestion(selected) {
  const quiz = state.currentQuiz;
  const question = quiz.questions[state.currentQuestion];
  const options = document.querySelectorAll(".option");
  options.forEach((opt, i) => {
    opt.disabled = true;
    if (i === question.correct) opt.classList.add("correct");
    else if (i === selected) opt.classList.add("wrong");
  });
  if (selected === question.correct) state.currentScore++;
  setTimeout(() => {
    state.currentQuestion++;
    if (state.currentQuestion < quiz.questions.length) showQuestion();
    else finishQuiz();
  }, 900);
}
function finishQuiz() {
  const total = state.currentQuiz.questions.length;
  const score = state.currentScore;
  state.stats.exercicios++;
  state.stats.acertos += score;
  persistUserState();
  recordStudyActivity();
  document.getElementById("quizContent").style.display = "none";
  document.getElementById("quizBar").style.width = "100%";
  const result = document.getElementById("quizResult");
  result.style.display = "block";
  result.innerHTML = `
    <h2>${score === total ? "🎉 Perfeito!" : score >= total / 2 ? "👍 Bom trabalho!" : "💪 Continue praticando!"}</h2>
    <div class="score">${score} / ${total}</div>
    <p>Você acertou <strong>${score}</strong> de <strong>${total}</strong> questões.</p><br>
    <button class="back-btn" onclick="closeQuiz()" style="padding:12px 24px;font-size:1rem;">Voltar aos exercícios</button>`;
}
function closeQuiz() {
  document.getElementById("quizArea").style.display = "none";
  document.getElementById("exerciseHome").style.display = "block";
  renderExerciseList();
}
function renderCategories() {
  const grid = document.getElementById("categoriesGrid");
  grid.innerHTML = categories.map(c => `
    <div class="category-card" onclick="quickSearch('${c.nome}')">
      <span class="icon">${c.icon}</span><h3>${c.nome}</h3></div>`).join("");
}

function setPomoMode(mode) {
  if (pomoRunning) return;
  pomoMode = mode;
  pomoSeconds = POMO_TIMES[mode];
  document.querySelectorAll(".pomo-mode").forEach(b => b.classList.toggle("active", b.dataset.mode === mode));
  updatePomoDisplay();
  const status = document.getElementById("pomoStatus");
  if (mode === "focus") status.textContent = "Pronto para focar";
  else if (mode === "short") status.textContent = "Pausa curta";
  else status.textContent = "Pausa longa";
}
function updatePomoDisplay() {
  const m = Math.floor(pomoSeconds / 60);
  const s = pomoSeconds % 60;
  document.getElementById("pomoDisplay").textContent = String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}
function updatePomoStats() {
  document.getElementById("pomoSessions").textContent = state.pomoToday || 0;
  document.getElementById("pomoTotal").textContent = state.stats.pomodoros || 0;
}
function togglePomo() {
  if (pomoRunning) {
    clearInterval(pomoInterval);
    pomoInterval = null;
    pomoRunning = false;
    document.getElementById("pomoStartBtn").textContent = "▶ Continuar";
    document.getElementById("pomoStartBtn").classList.remove("running");
    document.getElementById("pomoStatus").textContent = "Pausado";
  } else {
    pomoRunning = true;
    document.getElementById("pomoStartBtn").textContent = "⏸ Pausar";
    document.getElementById("pomoStartBtn").classList.add("running");
    document.getElementById("pomoStatus").textContent = pomoMode === "focus" ? "Focando... 💪" : "Descansando... ☕";
    pomoInterval = setInterval(() => {
      pomoSeconds--;
      updatePomoDisplay();
      if (pomoSeconds <= 0) {
        clearInterval(pomoInterval);
        pomoInterval = null;
        pomoRunning = false;
        document.getElementById("pomoStartBtn").textContent = "▶ Iniciar";
        document.getElementById("pomoStartBtn").classList.remove("running");
        onPomoComplete();
      }
    }, 1000);
  }
}
function onPomoComplete() {
  if (pomoMode === "focus") {
    state.stats.pomodoros = (state.stats.pomodoros || 0) + 1;
    state.pomoToday = (state.pomoToday || 0) + 1;
    state.pomoTodayDate = getTodayStr();
    persistUserState();
    recordStudyActivity();
    updatePomoStats();
    document.getElementById("pomoStatus").textContent = "Pomodoro concluído! 🎉 Hora de uma pausa.";
    setPomoMode("short");
  } else {
    document.getElementById("pomoStatus").textContent = "Pausa terminada! Volte ao foco.";
    setPomoMode("focus");
  }
  document.title = "⏰ Timer finalizado! — EstudaJá";
  setTimeout(() => { document.title = "EstudaJá — Estude de um jeito inteligente"; }, 5000);
}
function resetPomo() {
  if (pomoInterval) { clearInterval(pomoInterval); pomoInterval = null; }
  pomoRunning = false;
  pomoSeconds = POMO_TIMES[pomoMode];
  document.getElementById("pomoStartBtn").textContent = "▶ Iniciar";
  document.getElementById("pomoStartBtn").classList.remove("running");
  document.getElementById("pomoStatus").textContent =
    pomoMode === "focus" ? "Pronto para focar" : (pomoMode === "short" ? "Pausa curta" : "Pausa longa");
  updatePomoDisplay();
}
function getAllFlashcards() {
  return [...builtInFlashcards, ...state.customFlashcards];
}
function renderFlashDecks() {
  const list = document.getElementById("flashDeckList");
  let cards = getAllFlashcards();
  if (state.flashFilter === "meus") cards = state.customFlashcards;
  else if (state.flashFilter !== "all") cards = cards.filter(c => c.category === state.flashFilter);
  if (cards.length === 0) {
    list.innerHTML = `<p class="empty-msg">Nenhum flashcard neste filtro. Crie o seu!</p>`;
    return;
  }
  const byCat = {};
  cards.forEach(c => {
    const cat = c.custom ? "meus" : c.category;
    if (!byCat[cat]) byCat[cat] = [];
    byCat[cat].push(c);
  });
  const idsAll = JSON.stringify(cards.map(c => c.id));
  let html = `<div class="exercise-card" onclick='startFlashStudy(${idsAll})'>
    <div><h3>📚 Estudar todos deste filtro</h3>
    <span style="font-size:0.85rem;color:var(--text-secondary)">${cards.length} cartões</span></div>
    <span class="badge">Iniciar</span></div>`;
  Object.keys(byCat).forEach(cat => {
    const deck = byCat[cat];
    const name = cat === "meus" ? "Meus cartões" : getCategoryName(cat);
    const ids = JSON.stringify(deck.map(c => c.id));
    html += `<div class="exercise-card" onclick='startFlashStudy(${ids})'>
      <div><h3>${name}</h3>
      <span style="font-size:0.85rem;color:var(--text-secondary)">${deck.length} cartões</span></div>
      <span class="badge">Estudar</span></div>`;
  });
  list.innerHTML = html;
}
function startFlashStudy(ids) {
  const all = getAllFlashcards();
  state.flashDeck = ids.map(id => all.find(c => c.id === id)).filter(Boolean);
  if (state.flashDeck.length === 0) return;
  state.flashDeck = state.flashDeck.sort(() => Math.random() - 0.5);
  state.flashIndex = 0;
  state.flashFlipped = false;
  document.getElementById("flashHome").style.display = "none";
  document.getElementById("flashCreate").style.display = "none";
  document.getElementById("flashStudy").style.display = "block";
  const controls = document.querySelector(".flash-controls");
  if (controls) controls.style.display = "flex";
  const hint = document.querySelector(".flash-hint");
  if (hint) hint.style.display = "block";
  document.getElementById("flashCardBox").innerHTML = `
    <div class="flashcard" id="flashCard" onclick="flipFlash()">
      <div class="flash-front" id="flashFront"></div>
      <div class="flash-back" id="flashBack"></div>
    </div>`;
  showFlashCard();
  recordStudyActivity();
}
function showFlashCard() {
  const card = state.flashDeck[state.flashIndex];
  document.getElementById("flashCounter").textContent = `${state.flashIndex + 1} / ${state.flashDeck.length}`;
  document.getElementById("flashFront").textContent = card.q;
  document.getElementById("flashBack").textContent = card.a;
  document.getElementById("flashCard").classList.remove("flipped");
  state.flashFlipped = false;
}
function flipFlash() {
  state.flashFlipped = !state.flashFlipped;
  document.getElementById("flashCard").classList.toggle("flipped", state.flashFlipped);
}
function rateFlash(knew) {
  if (!knew && state.flashDeck.length > 1) {
    const card = state.flashDeck.splice(state.flashIndex, 1)[0];
    state.flashDeck.push(card);
  } else {
    state.flashIndex++;
  }
  if (state.flashIndex >= state.flashDeck.length) {
    document.getElementById("flashCardBox").innerHTML = `
      <div style="text-align:center;padding:40px;">
        <h2>🎉 Deck concluído!</h2>
        <p style="margin:16px 0;color:var(--text-secondary)">Ótimo trabalho revisando os cartões.</p>
        <button class="primary-btn" onclick="closeFlashStudy()">Voltar</button>
      </div>`;
    const controls = document.querySelector(".flash-controls");
    if (controls) controls.style.display = "none";
    const hint = document.querySelector(".flash-hint");
    if (hint) hint.style.display = "none";
    return;
  }
  showFlashCard();
}
function closeFlashStudy() {
  document.getElementById("flashStudy").style.display = "none";
  document.getElementById("flashHome").style.display = "block";
  renderFlashDecks();
}
function showCreateFlash() {
  document.getElementById("flashHome").style.display = "none";
  document.getElementById("flashStudy").style.display = "none";
  document.getElementById("flashCreate").style.display = "block";
  document.getElementById("flashQ").value = "";
  document.getElementById("flashA").value = "";
}
function closeFlashCreate() {
  document.getElementById("flashCreate").style.display = "none";
  document.getElementById("flashHome").style.display = "block";
}
function saveFlashcard() {
  const q = document.getElementById("flashQ").value.trim();
  const a = document.getElementById("flashA").value.trim();
  const cat = document.getElementById("flashCat").value;
  if (!q || !a) { alert("Preencha pergunta e resposta."); return; }
  state.customFlashcards.push({ id: "cfc_" + Date.now(), q, a, category: cat, custom: true });
  persistUserState();
  closeFlashCreate();
  renderFlashDecks();
}
function renderNotes() {
  const list = document.getElementById("notesList");
  if (state.notes.length === 0) {
    list.innerHTML = `<p class="empty-msg">Você ainda não tem anotações. Crie a primeira!</p>`;
    return;
  }
  const sorted = [...state.notes].sort((a, b) => b.updated - a.updated);
  list.innerHTML = sorted.map(n => `
    <div class="note-card" onclick="editNote('${n.id}')">
      <h3>${escapeHtml(n.title)}</h3>
      <div class="meta">${getCategoryName(n.category)} · ${formatDate(n.updated)}</div>
      <div class="preview">${escapeHtml(n.body.substring(0, 120))}${n.body.length > 120 ? "..." : ""}</div>
    </div>`).join("");
}
function escapeHtml(t) {
  const d = document.createElement("div");
  d.textContent = t;
  return d.innerHTML;
}
function formatDate(ts) {
  const d = new Date(ts);
  return d.toLocaleDateString("pt-BR") + " " + d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}
function showCreateNote() {
  state.editingNoteId = null;
  document.getElementById("notesHome").style.display = "none";
  document.getElementById("noteEditor").style.display = "block";
  document.getElementById("noteTitle").value = "";
  document.getElementById("noteBody").value = "";
  document.getElementById("noteCat").value = "matematica";
  document.getElementById("deleteNoteBtn").style.display = "none";
}
function editNote(id) {
  const note = state.notes.find(n => n.id === id);
  if (!note) return;
  state.editingNoteId = id;
  document.getElementById("notesHome").style.display = "none";
  document.getElementById("noteEditor").style.display = "block";
  document.getElementById("noteTitle").value = note.title;
  document.getElementById("noteBody").value = note.body;
  document.getElementById("noteCat").value = note.category;
  document.getElementById("deleteNoteBtn").style.display = "inline-block";
}
function closeNoteEditor() {
  document.getElementById("noteEditor").style.display = "none";
  document.getElementById("notesHome").style.display = "block";
  renderNotes();
}
function saveNote() {
  const title = document.getElementById("noteTitle").value.trim();
  const body = document.getElementById("noteBody").value.trim();
  const category = document.getElementById("noteCat").value;
  if (!title) { alert("Digite um título para a anotação."); return; }
  if (state.editingNoteId) {
    const note = state.notes.find(n => n.id === state.editingNoteId);
    if (note) { note.title = title; note.body = body; note.category = category; note.updated = Date.now(); }
  } else {
    state.notes.push({ id: "note_" + Date.now(), title, body, category, updated: Date.now() });
  }
  persistUserState();
  recordStudyActivity();
  closeNoteEditor();
}
function deleteNote() {
  if (!state.editingNoteId) return;
  if (!confirm("Excluir esta anotação?")) return;
  state.notes = state.notes.filter(n => n.id !== state.editingNoteId);
  persistUserState();
  closeNoteEditor();
}
document.getElementById("searchInput").addEventListener("input", (e) => {
  const val = e.target.value;
  document.getElementById("clearSearch").style.display = val ? "block" : "none";
  showSuggestions(val);
  if (val.length >= 2) search(val);
  else {
    document.getElementById("resultsArea").innerHTML = "";
    document.getElementById("categoriesArea").style.display = "block";
  }
});
document.getElementById("clearSearch").addEventListener("click", () => {
  document.getElementById("searchInput").value = "";
  document.getElementById("clearSearch").style.display = "none";
  document.getElementById("suggestions").classList.remove("show");
  document.getElementById("resultsArea").innerHTML = "";
  document.getElementById("categoriesArea").style.display = "block";
});
document.querySelectorAll(".filter-btn").forEach(btn => {
  if (btn.dataset.filter) {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn[data-filter]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.exerciseFilter = btn.dataset.filter;
      renderExerciseList();
    });
  }
});
document.querySelectorAll(".level-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".level-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.exerciseLevel = btn.dataset.level;
    renderExerciseList();
  });
});
document.querySelectorAll("#flashCatFilters .filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#flashCatFilters .filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.flashFilter = btn.dataset.flashcat;
    renderFlashDecks();
  });
});
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-wrapper")) {
    document.getElementById("suggestions").classList.remove("show");
  }
});
const savedUser = localStorage.getItem("estudaja_current");
if (savedUser) {
  const users = getUsers();
  if (users[savedUser.toLowerCase()]) {
    currentUser = savedUser;
    loadUserState();
    showApp();
  } else {
    localStorage.removeItem("estudaja_current");
  }
}
