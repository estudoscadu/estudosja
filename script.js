// Dados das matérias
const materias = [
    {
        id: "portugues",
        nome: "Português",
        icone: "📝",
        descricao: "Gramática, interpretação e redação",
        fundamental: `
            <h3>Principais conteúdos – Ensino Fundamental</h3>
            
            <div class="topic-box">
                <h4>📚 Gramática</h4>
                <ul>
                    <li>Classes de palavras (substantivo, verbo, adjetivo, etc.)</li>
                    <li>Sujeito e predicado</li>
                    <li>Concordância verbal e nominal</li>
                    <li>Acentuação e ortografia</li>
                    <li>Pontuação</li>
                </ul>
            </div>

            <div class="topic-box">
                <h4>📖 Interpretação de Texto</h4>
                <ul>
                    <li>Ideia principal e secundária</li>
                    <li>Tipos de texto (narrativo, descritivo, injuntivo)</li>
                    <li>Gêneros textuais (conto, crônica, notícia, charge)</li>
                    <li>Figuras de linguagem básicas</li>
                </ul>
            </div>

            <div class="topic-box">
                <h4>✍️ Produção de Texto</h4>
                <ul>
                    <li>Estrutura de parágrafo</li>
                    <li>Narrativa (conto e crônica)</li>
                    <li>Descrição e relato</li>
                    <li>Carta e bilhete</li>
                </ul>
            </div>

            <div class="note">
                💡 <strong>Dica:</strong> Leia todos os dias! Quanto mais você lê, melhor fica a interpretação e a escrita.
            </div>
        `,
        medio: `
            <h3>Principais conteúdos – Ensino Médio</h3>
            
            <div class="topic-box">
                <h4>📚 Gramática Avançada</h4>
                <ul>
                    <li>Análise sintática completa</li>
                    <li>Orações coordenadas e subordinadas</li>
                    <li>Regência verbal e nominal</li>
                    <li>Crase</li>
                    <li>Colocação pronominal</li>
                </ul>
            </div>

            <div class="topic-box">
                <h4>📖 Literatura</h4>
                <ul>
                    <li>Trovadorismo, Humanismo e Classicismo</li>
                    <li>Barroco e Arcadismo</li>
                    <li>Romantismo, Realismo e Naturalismo</li>
                    <li>Modernismo (1ª, 2ª e 3ª gerações)</li>
                    <li>Literatura contemporânea</li>
                </ul>
            </div>

            <div class="topic-box">
                <h4>✍️ Redação (ENEM e vestibulares)</h4>
                <ul>
                    <li>Estrutura dissertativo-argumentativa</li>
                    <li>Tese, argumentos e proposta de intervenção</li>
                    <li>Competências do ENEM</li>
                    <li>Coesão e coerência</li>
                </ul>
            </div>

            <div class="note">
                💡 <strong>Dica:</strong> Treine redação toda semana e leia textos de opinião (artigos de jornal).
            </div>
        `
    },
    {
        id: "matematica",
        nome: "Matemática",
        icone: "🔢",
        descricao: "Números, geometria, álgebra e mais",
        fundamental: `
            <h3>Principais conteúdos – Ensino Fundamental</h3>
            
            <div class="topic-box">
                <h4>➕ Números e Operações</h4>
                <ul>
                    <li>Números naturais, inteiros e racionais</li>
                    <li>Frações e números decimais</li>
                    <li>Porcentagem</li>
                    <li>Potenciação e radiciação</li>
                    <li>MMC e MDC</li>
                </ul>
            </div>

            <div class="topic-box">
                <h4>📐 Geometria</h4>
                <ul>
                    <li>Formas geométricas planas</li>
                    <li>Perímetro e área</li>
                    <li>Ângulos e polígonos</li>
                    <li>Sólidos geométricos (volume)</li>
                    <li>Teorema de Pitágoras (introdução)</li>
                </ul>
            </div>

            <div class="topic-box">
                <h4>📊 Álgebra e Grandezas</h4>
                <ul>
                    <li>Equações do 1º grau</li>
                    <li>Sistemas de equações</li>
                    <li>Proporcionalidade</li>
                    <li>Regra de três</li>
                    <li>Introdução a gráficos</li>
                </ul>
            </div>

            <div class="note">
                💡 <strong>Dica:</strong> Pratique bastante exercícios. Matemática se aprende resolvendo!
            </div>
        `,
        medio: `
            <h3>Principais conteúdos – Ensino Médio</h3>
            
            <div class="topic-box">
                <h4>📈 Funções</h4>
                <ul>
                    <li>Função afim e função quadrática</li>
                    <li>Função exponencial e logarítmica</li>
                    <li>Função modular</li>
                    <li>Gráfico de funções</li>
                </ul>
            </div>

            <div class="topic-box">
                <h4>📐 Geometria e Trigonometria</h4>
                <ul>
                    <li>Geometria plana avançada</li>
                    <li>Trigonometria no triângulo retângulo</li>
                    <li>Ciclo trigonométrico</li>
                    <li>Geometria espacial (prismas, pirâmides, cilindros, cones e esferas)</li>
                </ul>
            </div>

            <div class="topic-box">
                <h4>📊 Outros temas importantes</h4>
                <ul>
                    <li>Progressões (PA e PG)</li>
                    <li>Análise combinatória e probabilidade</li>
                    <li>Matrizes e determinantes</li>
                    <li>Estatística básica</li>
                    <li>Geometria analítica</li>
                </ul>
            </div>

            <div class="note">
                💡 <strong>Dica:</strong> Foque em entender o “porquê” das fórmulas, não só decorar.
            </div>
        `
    },
    {
        id: "historia",
        nome: "História",
        icone: "🏛️",
        descricao: "Do passado ao Brasil atual",
        fundamental: `
            <h3>Principais conteúdos – Ensino Fundamental</h3>
            
            <div class="topic-box">
                <h4>🌍 História Geral</h4>
                <ul>
                    <li>Pré-História</li>
                    <li>Egito, Mesopotâmia, Grécia e Roma</li>
                    <li>Idade Média</li>
                    <li>Grandes Navegações</li>
                    <li>Revolução Francesa e Independências na América</li>
                </ul>
            </div>

            <div class="topic-box">
                <h4>🇧🇷 História do Brasil</h4>
                <ul>
                    <li>Brasil Colônia</li>
                    <li>Independência do Brasil</li>
                    <li>Período Imperial</li>
                    <li>Proclamação da República</li>
                    <li>Era Vargas e Ditadura Militar (visão geral)</li>
                </ul>
            </div>

            <div class="note">
                💡 <strong>Dica:</strong> Tente ligar os acontecimentos com o que acontece hoje. História ajuda a entender o presente!
            </div>
        `,
        medio: `
            <h3>Principais conteúdos – Ensino Médio</h3>
            
            <div class="topic-box">
                <h4>🌍 História Geral</h4>
                <ul>
                    <li>Antiguidade Oriental e Clássica</li>
                    <li>Feudalismo e Idade Média</li>
                    <li>Renascimento, Reforma e Absolutismo</li>
                    <li>Iluminismo e Revoluções (Inglesa, Francesa e Industrial)</li>
                    <li>Primeira e Segunda Guerra Mundial</li>
                    <li>Guerra Fria</li>
                </ul>
            </div>

            <div class="topic-box">
                <h4>🇧🇷 História do Brasil</h4>
                <ul>
                    <li>Colonização e escravidão</li>
                    <li>Independência e Primeiro Reinado</li>
                    <li>Segundo Reinado e Abolição</li>
                    <li>República Velha</li>
                    <li>Era Vargas</li>
                    <li>Ditadura Militar e redemocratização</li>
                    <li>Brasil contemporâneo</li>
                </ul>
            </div>

            <div class="note">
                💡 <strong>Dica:</strong> Faça linhas do tempo. Elas ajudam muito a organizar os acontecimentos.
            </div>
        `
    },
    {
        id: "geografia",
        nome: "Geografia",
        icone: "🌎",
        descricao: "Planeta, países e o Brasil",
        fundamental: `
            <h3>Principais conteúdos – Ensino Fundamental</h3>
            
            <div class="topic-box">
                <h4>🗺️ Geografia Física</h4>
                <ul>
                    <li>Planeta Terra (movimentos e coordenadas)</li>
                    <li>Relevo, clima e vegetação</li>
                    <li>Hidrografia</li>
                    <li>Domínios morfoclimáticos do Brasil</li>
                </ul>
            </div>

            <div class="topic-box">
                <h4>👥 Geografia Humana</h4>
                <ul>
                    <li>População (crescimento e distribuição)</li>
                    <li>Urbanização</li>
                    <li>Agricultura e indústria</li>
                    <li>Regiões do Brasil</li>
                </ul>
            </div>

            <div class="note">
                💡 <strong>Dica:</strong> Use mapas! Visualizar ajuda muito a fixar o conteúdo.
            </div>
        `,
        medio: `
            <h3>Principais conteúdos – Ensino Médio</h3>
            
            <div class="topic-box">
                <h4>🌍 Temas principais</h4>
                <ul>
                    <li>Geopolítica e ordem mundial</li>
                    <li>Globalização</li>
                    <li>Blocos econômicos</li>
                    <li>Questões ambientais (aquecimento global, desmatamento)</li>
                    <li>Demografia e migrações</li>
                    <li>Agronegócio e indústria no Brasil</li>
                    <li>Urbanização e problemas urbanos</li>
                    <li>Energia e recursos naturais</li>
                </ul>
            </div>

            <div class="note">
                💡 <strong>Dica:</strong> Fique de olho nas notícias. Muitos temas de geografia aparecem no dia a dia.
            </div>
        `
    },
    {
        id: "ciencias",
        nome: "Ciências / Biologia",
        icone: "🔬",
        descricao: "Natureza, corpo humano e seres vivos",
        fundamental: `
            <h3>Principais conteúdos – Ensino Fundamental (Ciências)</h3>
            
            <div class="topic-box">
                <h4>🌱 Seres Vivos</h4>
                <ul>
                    <li>Células (básicas)</li>
                    <li>Classificação dos seres vivos</li>
                    <li>Cadeias e teias alimentares</li>
                    <li>Ecossistemas</li>
                </ul>
            </div>

            <div class="topic-box">
                <h4>🫀 Corpo Humano</h4>
                <ul>
                    <li>Sistemas do corpo (digestório, respiratório, circulatório...)</li>
                    <li>Alimentação e saúde</li>
                    <li>Reprodução humana (visão geral)</li>
                </ul>
            </div>

            <div class="topic-box">
                <h4>🌍 Ambiente</h4>
                <ul>
                    <li>Solo, água e ar</li>
                    <li>Poluição e sustentabilidade</li>
                    <li>Reciclagem</li>
                </ul>
            </div>
        `,
        medio: `
            <h3>Principais conteúdos – Ensino Médio (Biologia)</h3>
            
            <div class="topic-box">
                <h4>🧬 Citologia e Genética</h4>
                <ul>
                    <li>Célula animal e vegetal</li>
                    <li>Mitose e meiose</li>
                    <li>DNA, RNA e síntese proteica</li>
                    <li>Leis de Mendel</li>
                    <li>Biotecnologia</li>
                </ul>
            </div>

            <div class="topic-box">
                <h4>🦠 Evolução e Ecologia</h4>
                <ul>
                    <li>Teorias da evolução</li>
                    <li>Ecossistemas e biomas</li>
                    <li>Ciclos biogeoquímicos</li>
                    <li>Impactos ambientais</li>
                </ul>
            </div>

            <div class="topic-box">
                <h4>🫀 Fisiologia Humana</h4>
                <ul>
                    <li>Sistemas do corpo em profundidade</li>
                    <li>Imunologia</li>
                    <li>Hormônios</li>
                </ul>
            </div>
        `
    },
    {
        id: "fisica",
        nome: "Física",
        icone: "⚡",
        descricao: "Movimento, energia e forças",
        fundamental: `
            <h3>Introdução – Final do Fundamental</h3>
            <p>No final do Ensino Fundamental a Física começa a ser apresentada de forma mais clara dentro de Ciências.</p>
            
            <div class="topic-box">
                <h4>Temas introdutórios</h4>
                <ul>
                    <li>Movimento e velocidade</li>
                    <li>Forças (empurrar, puxar, gravidade)</li>
                    <li>Energia (cinética e potencial)</li>
                    <li>Calor e temperatura</li>
                    <li>Luz e som (noções básicas)</li>
                </ul>
            </div>
        `,
        medio: `
            <h3>Principais conteúdos – Ensino Médio</h3>
            
            <div class="topic-box">
                <h4>🚀 Mecânica</h4>
                <ul>
                    <li>Cinemática (MRU, MRUV, queda livre)</li>
                    <li>Leis de Newton</li>
                    <li>Trabalho, potência e energia</li>
                    <li>Quantidade de movimento e impulsão</li>
                    <li>Gravitação</li>
                </ul>
            </div>

            <div class="topic-box">
                <h4>🌡️ Termologia e Óptica</h4>
                <ul>
                    <li>Temperatura, calor e dilatação</li>
                    <li>Trocas de calor</li>
                    <li>Espelhos e lentes</li>
                    <li>Reflexão e refração</li>
                </ul>
            </div>

            <div class="topic-box">
                <h4>⚡ Eletricidade e Ondulatória</h4>
                <ul>
                    <li>Carga elétrica e corrente</li>
                    <li>Circuitos elétricos</li>
                    <li>Ondas e som</li>
                    <li>Eletromagnetismo (introdução)</li>
                </ul>
            </div>
        `
    },
    {
        id: "quimica",
        nome: "Química",
        icone: "🧪",
        descricao: "Átomos, reações e substâncias",
        fundamental: `
            <h3>Introdução – Final do Fundamental</h3>
            <p>A Química aparece principalmente no 9º ano dentro de Ciências.</p>
            
            <div class="topic-box">
                <h4>Temas introdutórios</h4>
                <ul>
                    <li>Matéria e suas propriedades</li>
                    <li>Estados físicos</li>
                    <li>Substâncias e misturas</li>
                    <li>Separação de misturas</li>
                    <li>Átomo (modelo simples)</li>
                    <li>Reações químicas simples</li>
                </ul>
            </div>
        `,
        medio: `
            <h3>Principais conteúdos – Ensino Médio</h3>
            
            <div class="topic-box">
                <h4>⚛️ Química Geral</h4>
                <ul>
                    <li>Estrutura atômica</li>
                    <li>Tabela periódica</li>
                    <li>Ligações químicas</li>
                    <li>Funções inorgânicas (ácidos, bases, sais e óxidos)</li>
                    <li>Reações químicas e balanceamento</li>
                    <li>Cálculos estequiométricos</li>
                </ul>
            </div>

            <div class="topic-box">
                <h4>🔥 Físico-Química</h4>
                <ul>
                    <li>Soluções</li>
                    <li>Termoquímica</li>
                    <li>Cinética química</li>
                    <li>Equilíbrio químico</li>
                    <li>Eletroquímica</li>
                </ul>
            </div>

            <div class="topic-box">
                <h4>🌿 Química Orgânica</h4>
                <ul>
                    <li>Introdução ao carbono</li>
                    <li>Hidrocarbonetos</li>
                    <li>Funções orgânicas</li>
                    <li>Isomeria</li>
                    <li>Reações orgânicas (básicas)</li>
                </ul>
            </div>
        `
    },
    {
        id: "ingles",
        nome: "Inglês",
        icone: "🇬🇧",
        descricao: "Vocabulário, gramática e conversação",
        fundamental: `
            <h3>Principais conteúdos – Ensino Fundamental</h3>
            
            <div class="topic-box">
                <h4>📚 Conteúdos básicos</h4>
                <ul>
                    <li>Saudações e apresentações</li>
                    <li>Números, cores e família</li>
                    <li>Verbo to be</li>
                    <li>Present Simple</li>
                    <li>Present Continuous</li>
                    <li>Preposições de lugar</li>
                    <li>Vocabulário do dia a dia</li>
                </ul>
            </div>

            <div class="note">
                💡 <strong>Dica:</strong> Ouça músicas e assista desenhos/filmes em inglês com legenda.
            </div>
        `,
        medio: `
            <h3>Principais conteúdos – Ensino Médio</h3>
            
            <div class="topic-box">
                <h4>📚 Gramática e interpretação</h4>
                <ul>
                    <li>Tempos verbais (Past Simple, Present Perfect, Future...)</li>
                    <li>Conditional sentences</li>
                    <li>Passive voice</li>
                    <li>Relative clauses</li>
                    <li>Phrasal verbs</li>
                    <li>Interpretação de textos (ENEM)</li>
                    <li>False friends</li>
                </ul>
            </div>

            <div class="note">
                💡 <strong>Dica:</strong> No ENEM, inglês cobra principalmente interpretação de texto. Pratique bastante leitura!
            </div>
        `
    },
    {
        id: "filosofia",
        nome: "Filosofia",
        icone: "🤔",
        descricao: "Pensamento, ética e conhecimento",
        fundamental: `
            <h3>Introdução à Filosofia</h3>
            <p>No Ensino Fundamental a Filosofia aparece de forma mais leve, ajudando a pensar sobre o mundo e as relações humanas.</p>
            
            <div class="topic-box">
                <h4>Temas comuns</h4>
                <ul>
                    <li>O que é pensar?</li>
                    <li>Diferença entre opinião e conhecimento</li>
                    <li>Ética e respeito</li>
                    <li>Valores e convivência</li>
                    <li>Perguntas sobre a vida e a sociedade</li>
                </ul>
            </div>
        `,
        medio: `
            <h3>Principais conteúdos – Ensino Médio</h3>
            
            <div class="topic-box">
                <h4>🧠 Principais temas</h4>
                <ul>
                    <li>O que é Filosofia?</li>
                    <li>Mito e Filosofia</li>
                    <li>Sócrates, Platão e Aristóteles</li>
                    <li>Racionalismo e Empirismo</li>
                    <li>Ética e moral</li>
                    <li>Política (Maquiavel, Hobbes, Locke, Rousseau)</li>
                    <li>Existencialismo</li>
                    <li>Escola de Frankfurt e pensamento contemporâneo</li>
                </ul>
            </div>
        `
    },
    {
        id: "sociologia",
        nome: "Sociologia",
        icone: "👥",
        descricao: "Sociedade, cultura e cidadania",
        fundamental: `
            <h3>Introdução à Sociologia</h3>
            <p>No Fundamental os temas de Sociologia aparecem ligados a História, Geografia e Ciências Humanas.</p>
            
            <div class="topic-box">
                <h4>Temas introdutórios</h4>
                <ul>
                    <li>O que é sociedade</li>
                    <li>Cultura e diversidade</li>
                    <li>Regras e convivência</li>
                    <li>Direitos e deveres</li>
                    <li>Desigualdades sociais (visão geral)</li>
                </ul>
            </div>
        `,
        medio: `
            <h3>Principais conteúdos – Ensino Médio</h3>
            
            <div class="topic-box">
                <h4>👥 Principais temas</h4>
                <ul>
                    <li>O que é Sociologia?</li>
                    <li>Émile Durkheim, Max Weber e Karl Marx</li>
                    <li>Cultura e indústria cultural</li>
                    <li>Socialização</li>
                    <li>Cidadania e movimentos sociais</li>
                    <li>Trabalho e desigualdade</li>
                    <li>Poder, política e Estado</li>
                    <li>Globalização e redes sociais</li>
                </ul>
            </div>
        `
    },
    {
        id: "artes",
        nome: "Artes",
        icone: "🎨",
        descricao: "Música, teatro, dança e artes visuais",
        fundamental: `
            <h3>Principais conteúdos – Ensino Fundamental</h3>
            
            <div class="topic-box">
                <h4>🎨 Linguagens artísticas</h4>
                <ul>
                    <li>Artes visuais (desenho, pintura, colagem)</li>
                    <li>Música (ritmo, melodia, instrumentos)</li>
                    <li>Teatro e expressão corporal</li>
                    <li>Dança</li>
                    <li>Patrimônio cultural</li>
                </ul>
            </div>
        `,
        medio: `
            <h3>Principais conteúdos – Ensino Médio</h3>
            
            <div class="topic-box">
                <h4>🎨 Temas principais</h4>
                <ul>
                    <li>História da Arte (principais movimentos)</li>
                    <li>Arte moderna e contemporânea</li>
                    <li>Arte brasileira</li>
                    <li>Música popular brasileira</li>
                    <li>Teatro e performance</li>
                    <li>Arte e tecnologia</li>
                    <li>Análise de obras</li>
                </ul>
            </div>
        `
    },
    {
        id: "edfisica",
        nome: "Educação Física",
        icone: "⚽",
        descricao: "Esportes, saúde e movimento",
        fundamental: `
            <h3>Principais conteúdos – Ensino Fundamental</h3>
            
            <div class="topic-box">
                <h4>🏃 Temas</h4>
                <ul>
                    <li>Jogos e brincadeiras</li>
                    <li>Esportes coletivos (futebol, vôlei, basquete...)</li>
                    <li>Esportes individuais</li>
                    <li>Ginástica</li>
                    <li>Dança e expressão corporal</li>
                    <li>Saúde e cuidados com o corpo</li>
                </ul>
            </div>
        `,
        medio: `
            <h3>Principais conteúdos – Ensino Médio</h3>
            
            <div class="topic-box">
                <h4>🏃 Temas</h4>
                <ul>
                    <li>Esportes e regras oficiais</li>
                    <li>Treinamento e condicionamento físico</li>
                    <li>Saúde, qualidade de vida e sedentarismo</li>
                    <li>Corpo, mídia e padrões de beleza</li>
                    <li>Lazer e práticas corporais</li>
                    <li>Esportes adaptados e inclusão</li>
                </ul>
            </div>
        `
    }
];

// Elementos do DOM
const subjectsGrid = document.getElementById('subjectsGrid');
const subjectDetail = document.getElementById('subjectDetail');
const subjectsSection = document.getElementById('subjectsSection');
const homeSection = document.getElementById('homeSection');
const backBtn = document.getElementById('backBtn');
const detailIcon = document.getElementById('detailIcon');
const detailTitle = document.getElementById('detailTitle');
const fundamentalContent = document.getElementById('fundamentalContent');
const medioContent = document.getElementById('medioContent');
const searchInput = document.getElementById('searchInput');
const tabButtons = document.querySelectorAll('.tab-btn');

// Renderizar cards das matérias
function renderSubjects(lista = materias) {
    subjectsGrid.innerHTML = '';
    
    if (lista.length === 0) {
        subjectsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #64748b;">Nenhuma matéria encontrada.</p>';
        return;
    }

    lista.forEach(materia => {
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.innerHTML = `
            <span class="icon">${materia.icone}</span>
            <h3>${materia.nome}</h3>
            <p>${materia.descricao}</p>
        `;
        card.addEventListener('click', () => openSubject(materia));
        subjectsGrid.appendChild(card);
    });
}

// Abrir matéria
function openSubject(materia) {
    detailIcon.textContent = materia.icone;
    detailTitle.textContent = materia.nome;
    fundamentalContent.innerHTML = materia.fundamental;
    medioContent.innerHTML = materia.medio;

    // Resetar tabs
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabButtons[0].classList.add('active');
    fundamentalContent.classList.add('active');
    medioContent.classList.remove('active');

    // Mostrar detalhe e esconder lista
    homeSection.style.display = 'none';
    subjectsSection.style.display = 'none';
    subjectDetail.style.display = 'block';

    // Rolar para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Voltar para a lista
backBtn.addEventListener('click', () => {
    subjectDetail.style.display = 'none';
    homeSection.style.display = 'block';
    subjectsSection.style.display = 'block';
    searchInput.value = '';
    renderSubjects();
});

// Tabs
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const level = btn.dataset.level;

        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (level === 'fundamental') {
            fundamentalContent.classList.add('active');
            medioContent.classList.remove('active');
        } else {
            medioContent.classList.add('active');
            fundamentalContent.classList.remove('active');
        }
    });
});

// Pesquisa
searchInput.addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase().trim();
    
    if (termo === '') {
        renderSubjects();
        return;
    }

    const filtradas = materias.filter(m => 
        m.nome.toLowerCase().includes(termo) || 
        m.descricao.toLowerCase().includes(termo)
    );
    
    renderSubjects(filtradas);
});

// Inicializar
renderSubjects();
