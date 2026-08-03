// Dados das matérias com exemplos e exercícios
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

            <h3 class="section-divider">📌 Exemplos</h3>

            <div class="example-box">
                <h4>Exemplo 1 – Sujeito e Predicado</h4>
                <p><strong>Frase:</strong> "Os alunos estudaram bastante para a prova."</p>
                <p>• <strong>Sujeito:</strong> Os alunos</p>
                <p>• <strong>Predicado:</strong> estudaram bastante para a prova</p>
            </div>

            <div class="example-box">
                <h4>Exemplo 2 – Concordância Verbal</h4>
                <p>❌ Errado: "As crianças gosta de brincar."</p>
                <p>✅ Correto: "As crianças <strong>gostam</strong> de brincar."</p>
                <p>(O verbo deve concordar com o sujeito no plural)</p>
            </div>

            <h3 class="section-divider">✏️ Exercícios</h3>

            <div class="exercise-box">
                <h4>Exercício 1</h4>
                <p>Identifique o <strong>sujeito</strong> e o <strong>predicado</strong> nas frases:</p>
                <p>a) O professor explicou a matéria com clareza.</p>
                <p>b) As meninas jogaram vôlei no recreio.</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p><strong>a)</strong> Sujeito: O professor | Predicado: explicou a matéria com clareza</p>
                    <p><strong>b)</strong> Sujeito: As meninas | Predicado: jogaram vôlei no recreio</p>
                </div>
            </div>

            <div class="exercise-box">
                <h4>Exercício 2</h4>
                <p>Corrija a concordância verbal:</p>
                <p>a) "Nós vai ao cinema amanhã."</p>
                <p>b) "Ele e eu gosta de matemática."</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p><strong>a)</strong> Nós <strong>vamos</strong> ao cinema amanhã.</p>
                    <p><strong>b)</strong> Ele e eu <strong>gostamos</strong> de matemática.</p>
                </div>
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

            <h3 class="section-divider">📌 Exemplos</h3>

            <div class="example-box">
                <h4>Exemplo – Uso da Crase</h4>
                <p>✅ "Vou <strong>à</strong> escola todos os dias." (a + a)</p>
                <p>✅ "Entreguei o trabalho <strong>à</strong> professora."</p>
                <p>❌ "Vou a escola" (faltou a crase)</p>
            </div>

            <div class="example-box">
                <h4>Exemplo – Oração Subordinada</h4>
                <p>"Eu estudei bastante <strong>porque queria tirar uma boa nota</strong>."</p>
                <p>A parte destacada é uma oração subordinada adverbial causal.</p>
            </div>

            <h3 class="section-divider">✏️ Exercícios</h3>

            <div class="exercise-box">
                <h4>Exercício 1 – Crase</h4>
                <p>Coloque a crase quando necessário:</p>
                <p>a) Fui a praia no domingo.</p>
                <p>b) Ele se referiu a aluna com carinho.</p>
                <p>c) Vou a Bahia nas férias.</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p><strong>a)</strong> Fui <strong>à</strong> praia no domingo.</p>
                    <p><strong>b)</strong> Ele se referiu <strong>à</strong> aluna com carinho.</p>
                    <p><strong>c)</strong> Vou <strong>à</strong> Bahia nas férias.</p>
                </div>
            </div>

            <div class="exercise-box">
                <h4>Exercício 2 – Redação</h4>
                <p>Escreva um parágrafo (5 a 8 linhas) defendendo a importância da leitura no dia a dia. Lembre-se de ter uma tese clara.</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver dica de resposta</button>
                <div class="answer">
                    <p>Uma boa resposta deve conter:</p>
                    <ul>
                        <li>Uma tese clara (ex: "A leitura é fundamental para o desenvolvimento pessoal e profissional")</li>
                        <li>Pelo menos dois argumentos</li>
                        <li>Exemplos concretos</li>
                        <li>Coesão entre as frases</li>
                    </ul>
                </div>
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

            <h3 class="section-divider">📌 Exemplos</h3>

            <div class="example-box">
                <h4>Exemplo 1 – Porcentagem</h4>
                <p>Quanto é 20% de 150?</p>
                <p>Cálculo: 20/100 × 150 = 0,20 × 150 = <strong>30</strong></p>
            </div>

            <div class="example-box">
                <h4>Exemplo 2 – Equação do 1º grau</h4>
                <p>Resolva: 2x + 5 = 17</p>
                <p>2x = 17 – 5</p>
                <p>2x = 12</p>
                <p>x = 12 ÷ 2</p>
                <p><strong>x = 6</strong></p>
            </div>

            <div class="example-box">
                <h4>Exemplo 3 – Área do retângulo</h4>
                <p>Um retângulo tem lados 8 cm e 5 cm.</p>
                <p>Área = base × altura = 8 × 5 = <strong>40 cm²</strong></p>
            </div>

            <h3 class="section-divider">✏️ Exercícios</h3>

            <div class="exercise-box">
                <h4>Exercício 1</h4>
                <p>Calcule:</p>
                <p>a) 15% de 200</p>
                <p>b) 30% de 90</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p><strong>a)</strong> 0,15 × 200 = <strong>30</strong></p>
                    <p><strong>b)</strong> 0,30 × 90 = <strong>27</strong></p>
                </div>
            </div>

            <div class="exercise-box">
                <h4>Exercício 2</h4>
                <p>Resolva as equações:</p>
                <p>a) 3x – 7 = 8</p>
                <p>b) 5x + 10 = 40</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p><strong>a)</strong> 3x = 15 → x = <strong>5</strong></p>
                    <p><strong>b)</strong> 5x = 30 → x = <strong>6</strong></p>
                </div>
            </div>

            <div class="exercise-box">
                <h4>Exercício 3</h4>
                <p>Um terreno retangular tem 12 metros de comprimento e 7 metros de largura. Qual é a área desse terreno?</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p>Área = 12 × 7 = <strong>84 m²</strong></p>
                </div>
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
                    <li>Progressões (PA e PG)</li>
                    <li>Análise combinatória e probabilidade</li>
                </ul>
            </div>

            <h3 class="section-divider">📌 Exemplos</h3>

            <div class="example-box">
                <h4>Exemplo – Função Afim</h4>
                <p>f(x) = 2x + 3</p>
                <p>Quando x = 4 → f(4) = 2×4 + 3 = <strong>11</strong></p>
            </div>

            <div class="example-box">
                <h4>Exemplo – Progressão Aritmética (PA)</h4>
                <p>Sequência: 3, 7, 11, 15...</p>
                <p>Razão (r) = 4</p>
                <p>Próximo termo = 15 + 4 = <strong>19</strong></p>
            </div>

            <div class="example-box">
                <h4>Exemplo – Probabilidade</h4>
                <p>Em um dado comum, qual a probabilidade de sair o número 5?</p>
                <p>P = 1/6 ≈ <strong>16,67%</strong></p>
            </div>

            <h3 class="section-divider">✏️ Exercícios</h3>

            <div class="exercise-box">
                <h4>Exercício 1</h4>
                <p>Dada a função f(x) = 3x – 5, calcule f(2) e f(0).</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p>f(2) = 3×2 – 5 = <strong>1</strong></p>
                    <p>f(0) = 3×0 – 5 = <strong>-5</strong></p>
                </div>
            </div>

            <div class="exercise-box">
                <h4>Exercício 2</h4>
                <p>Em uma PA de razão 5, o primeiro termo é 2. Qual é o 6º termo?</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p>a₆ = a₁ + (6-1)×r = 2 + 5×5 = 2 + 25 = <strong>27</strong></p>
                </div>
            </div>

            <div class="exercise-box">
                <h4>Exercício 3</h4>
                <p>Uma urna tem 4 bolas azuis e 6 bolas vermelhas. Qual a probabilidade de tirar uma bola azul?</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p>Total de bolas = 10</p>
                    <p>P = 4/10 = <strong>2/5 ou 40%</strong></p>
                </div>
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
                <h4>🇧🇷 História do Brasil</h4>
                <ul>
                    <li>Brasil Colônia</li>
                    <li>Independência do Brasil</li>
                    <li>Período Imperial</li>
                    <li>Proclamação da República</li>
                </ul>
            </div>

            <h3 class="section-divider">📌 Exemplos</h3>

            <div class="example-box">
                <h4>Exemplo – Independência do Brasil</h4>
                <p>A Independência foi proclamada em <strong>7 de setembro de 1822</strong> por Dom Pedro I, às margens do rio Ipiranga.</p>
                <p>Antes disso, o Brasil era uma colônia de Portugal.</p>
            </div>

            <div class="example-box">
                <h4>Exemplo – Proclamação da República</h4>
                <p>Aconteceu em <strong>15 de novembro de 1889</strong>. O marechal Deodoro da Fonseca foi o primeiro presidente do Brasil.</p>
            </div>

            <h3 class="section-divider">✏️ Exercícios</h3>

            <div class="exercise-box">
                <h4>Exercício 1</h4>
                <p>Em que ano o Brasil se tornou independente de Portugal?</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p><strong>1822</strong> (7 de setembro)</p>
                </div>
            </div>

            <div class="exercise-box">
                <h4>Exercício 2</h4>
                <p>Quem foi o primeiro presidente do Brasil após a Proclamação da República?</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p><strong>Marechal Deodoro da Fonseca</strong></p>
                </div>
            </div>

            <div class="exercise-box">
                <h4>Exercício 3</h4>
                <p>Complete: O Brasil foi colônia de Portugal por aproximadamente ______ anos.</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p>Aproximadamente <strong>322 anos</strong> (1500 a 1822)</p>
                </div>
            </div>
        `,
        medio: `
            <h3>Principais conteúdos – Ensino Médio</h3>
            
            <div class="topic-box">
                <h4>🌍 Temas principais</h4>
                <ul>
                    <li>Revolução Francesa</li>
                    <li>Primeira e Segunda Guerra Mundial</li>
                    <li>Era Vargas</li>
                    <li>Ditadura Militar e redemocratização</li>
                </ul>
            </div>

            <h3 class="section-divider">📌 Exemplos</h3>

            <div class="example-box">
                <h4>Exemplo – Revolução Francesa</h4>
                <p>Aconteceu em <strong>1789</strong>. Um dos lemas mais famosos foi: <em>"Liberdade, Igualdade e Fraternidade"</em>.</p>
                <p>Marcou o fim do Absolutismo na França.</p>
            </div>

            <div class="example-box">
                <h4>Exemplo – Era Vargas</h4>
                <p>Getúlio Vargas governou o Brasil em dois períodos importantes: 1930-1945 e 1951-1954. Criou a CLT (Consolidação das Leis do Trabalho).</p>
            </div>

            <h3 class="section-divider">✏️ Exercícios</h3>

            <div class="exercise-box">
                <h4>Exercício 1</h4>
                <p>Qual foi o principal lema da Revolução Francesa?</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p><strong>Liberdade, Igualdade e Fraternidade</strong></p>
                </div>
            </div>

            <div class="exercise-box">
                <h4>Exercício 2</h4>
                <p>O que significa a sigla CLT e quem a criou no Brasil?</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p><strong>CLT</strong> = Consolidação das Leis do Trabalho. Foi criada por <strong>Getúlio Vargas</strong>.</p>
                </div>
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
                <h4>🗺️ Temas principais</h4>
                <ul>
                    <li>Planeta Terra (movimentos e coordenadas)</li>
                    <li>Relevo, clima e vegetação</li>
                    <li>Regiões do Brasil</li>
                    <li>Urbanização</li>
                </ul>
            </div>

            <h3 class="section-divider">📌 Exemplos</h3>

            <div class="example-box">
                <h4>Exemplo – Movimentos da Terra</h4>
                <p><strong>Rotação:</strong> A Terra gira em torno de si mesma (dura cerca de 24 horas) → dia e noite.</p>
                <p><strong>Translação:</strong> A Terra gira em torno do Sol (dura cerca de 365 dias) → estações do ano.</p>
            </div>

            <div class="example-box">
                <h4>Exemplo – Regiões do Brasil</h4>
                <p>O Brasil é dividido em 5 regiões: Norte, Nordeste, Centro-Oeste, Sudeste e Sul.</p>
            </div>

            <h3 class="section-divider">✏️ Exercícios</h3>

            <div class="exercise-box">
                <h4>Exercício 1</h4>
                <p>Qual movimento da Terra é responsável pela existência do dia e da noite?</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p><strong>Rotação</strong></p>
                </div>
            </div>

            <div class="exercise-box">
                <h4>Exercício 2</h4>
                <p>Quantas regiões oficiais o Brasil possui? Cite-as.</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p>O Brasil possui <strong>5 regiões</strong>: Norte, Nordeste, Centro-Oeste, Sudeste e Sul.</p>
                </div>
            </div>
        `,
        medio: `
            <h3>Principais conteúdos – Ensino Médio</h3>
            
            <div class="topic-box">
                <h4>🌍 Temas principais</h4>
                <ul>
                    <li>Globalização</li>
                    <li>Questões ambientais</li>
                    <li>Geopolítica</li>
                    <li>Agronegócio e indústria no Brasil</li>
                </ul>
            </div>

            <h3 class="section-divider">📌 Exemplos</h3>

            <div class="example-box">
                <h4>Exemplo – Globalização</h4>
                <p>É o processo de integração econômica, cultural e política entre os países. Exemplo: produtos chineses vendidos no Brasil e empresas brasileiras que exportam para outros países.</p>
            </div>

            <h3 class="section-divider">✏️ Exercícios</h3>

            <div class="exercise-box">
                <h4>Exercício 1</h4>
                <p>O que é globalização? Dê um exemplo do seu dia a dia.</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p>Globalização é a integração entre países. Exemplo: usar um celular fabricado em outro país ou assistir a um filme hollywoodiano.</p>
                </div>
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
                <h4>🌱 Temas principais</h4>
                <ul>
                    <li>Células</li>
                    <li>Sistemas do corpo humano</li>
                    <li>Cadeias alimentares</li>
                    <li>Meio ambiente</li>
                </ul>
            </div>

            <h3 class="section-divider">📌 Exemplos</h3>

            <div class="example-box">
                <h4>Exemplo – Célula</h4>
                <p>A célula é a menor unidade da vida. Todos os seres vivos são formados por células.</p>
                <p>Existem células animais e células vegetais (as vegetais têm parede celular e cloroplastos).</p>
            </div>

            <div class="example-box">
                <h4>Exemplo – Cadeia Alimentar</h4>
                <p>Capim → Gafanhoto → Sapo → Cobra</p>
                <p>O capim é o produtor. O gafanhoto é o consumidor primário.</p>
            </div>

            <h3 class="section-divider">✏️ Exercícios</h3>

            <div class="exercise-box">
                <h4>Exercício 1</h4>
                <p>Qual é a principal diferença entre célula animal e célula vegetal?</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p>A célula vegetal possui <strong>parede celular</strong> e <strong>cloroplastos</strong> (responsáveis pela fotossíntese). A célula animal não tem esses elementos.</p>
                </div>
            </div>

            <div class="exercise-box">
                <h4>Exercício 2</h4>
                <p>Na cadeia alimentar: Folha → Lagarta → Pássaro, quem é o consumidor secundário?</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p>O <strong>pássaro</strong> (ele come a lagarta, que é o consumidor primário).</p>
                </div>
            </div>
        `,
        medio: `
            <h3>Principais conteúdos – Ensino Médio (Biologia)</h3>
            
            <div class="topic-box">
                <h4>🧬 Temas principais</h4>
                <ul>
                    <li>Citologia e Genética</li>
                    <li>Evolução</li>
                    <li>Ecologia</li>
                    <li>Fisiologia humana</li>
                </ul>
            </div>

            <h3 class="section-divider">📌 Exemplos</h3>

            <div class="example-box">
                <h4>Exemplo – DNA</h4>
                <p>O DNA (ácido desoxirribonucleico) carrega as informações genéticas de todos os seres vivos. Ele tem formato de dupla hélice.</p>
            </div>

            <div class="example-box">
                <h4>Exemplo – Mitose × Meiose</h4>
                <p><strong>Mitose:</strong> divisão celular que gera células idênticas (crescimento e regeneração).</p>
                <p><strong>Meiose:</strong> divisão que gera gametas (óvulos e espermatozoides) com metade dos cromossomos.</p>
            </div>

            <h3 class="section-divider">✏️ Exercícios</h3>

            <div class="exercise-box">
                <h4>Exercício 1</h4>
                <p>Qual é a função principal do DNA?</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p>Armazenar e transmitir as <strong>informações genéticas</strong> (características hereditárias).</p>
                </div>
            </div>

            <div class="exercise-box">
                <h4>Exercício 2</h4>
                <p>Qual tipo de divisão celular é responsável pela formação dos gametas?</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p><strong>Meiose</strong></p>
                </div>
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
            
            <div class="topic-box">
                <h4>Temas introdutórios</h4>
                <ul>
                    <li>Movimento e velocidade</li>
                    <li>Forças</li>
                    <li>Energia</li>
                    <li>Calor e temperatura</li>
                </ul>
            </div>

            <h3 class="section-divider">📌 Exemplos</h3>

            <div class="example-box">
                <h4>Exemplo – Velocidade</h4>
                <p>Um carro percorre 120 km em 2 horas.</p>
                <p>Velocidade média = distância ÷ tempo = 120 ÷ 2 = <strong>60 km/h</strong></p>
            </div>

            <h3 class="section-divider">✏️ Exercícios</h3>

            <div class="exercise-box">
                <h4>Exercício 1</h4>
                <p>Um ciclista percorreu 45 km em 3 horas. Qual foi sua velocidade média?</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p>Velocidade = 45 ÷ 3 = <strong>15 km/h</strong></p>
                </div>
            </div>
        `,
        medio: `
            <h3>Principais conteúdos – Ensino Médio</h3>
            
            <div class="topic-box">
                <h4>🚀 Mecânica</h4>
                <ul>
                    <li>Cinemática (MRU e MRUV)</li>
                    <li>Leis de Newton</li>
                    <li>Trabalho e energia</li>
                    <li>Eletricidade básica</li>
                </ul>
            </div>

            <h3 class="section-divider">📌 Exemplos</h3>

            <div class="example-box">
                <h4>Exemplo – 1ª Lei de Newton (Inércia)</h4>
                <p>"Um corpo em repouso tende a permanecer em repouso, e um corpo em movimento tende a permanecer em movimento, a menos que uma força atue sobre ele."</p>
            </div>

            <div class="example-box">
                <h4>Exemplo – MRU</h4>
                <p>Um carro se move com velocidade constante de 80 km/h. Em 3 horas ele percorre:</p>
                <p>S = v × t = 80 × 3 = <strong>240 km</strong></p>
            </div>

            <h3 class="section-divider">✏️ Exercícios</h3>

            <div class="exercise-box">
                <h4>Exercício 1</h4>
                <p>Um objeto está em MRU com velocidade de 15 m/s. Quanto tempo ele leva para percorrer 300 metros?</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p>t = S ÷ v = 300 ÷ 15 = <strong>20 segundos</strong></p>
                </div>
            </div>

            <div class="exercise-box">
                <h4>Exercício 2</h4>
                <p>Explique com suas palavras a 1ª Lei de Newton.</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p>A 1ª Lei de Newton diz que um corpo continua em repouso ou em movimento retilíneo uniforme se a resultante das forças sobre ele for zero (princípio da inércia).</p>
                </div>
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
            
            <div class="topic-box">
                <h4>Temas introdutórios</h4>
                <ul>
                    <li>Matéria e estados físicos</li>
                    <li>Substâncias e misturas</li>
                    <li>Separação de misturas</li>
                    <li>Átomo (modelo simples)</li>
                </ul>
            </div>

            <h3 class="section-divider">📌 Exemplos</h3>

            <div class="example-box">
                <h4>Exemplo – Estados físicos da água</h4>
                <p>Sólido → Gelo &nbsp;|&nbsp; Líquido → Água &nbsp;|&nbsp; Gasoso → Vapor</p>
            </div>

            <div class="example-box">
                <h4>Exemplo – Separação de misturas</h4>
                <p>Para separar areia e água: usa-se a <strong>filtração</strong>.</p>
                <p>Para separar sal e água: usa-se a <strong>evaporação</strong> ou destilação.</p>
            </div>

            <h3 class="section-divider">✏️ Exercícios</h3>

            <div class="exercise-box">
                <h4>Exercício 1</h4>
                <p>Qual método de separação você usaria para separar feijão e pedrinhas?</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p><strong>Catação</strong> (separação manual) ou peneiração.</p>
                </div>
            </div>
        `,
        medio: `
            <h3>Principais conteúdos – Ensino Médio</h3>
            
            <div class="topic-box">
                <h4>⚛️ Temas principais</h4>
                <ul>
                    <li>Estrutura atômica e tabela periódica</li>
                    <li>Ligações químicas</li>
                    <li>Funções inorgânicas</li>
                    <li>Reações e estequiometria</li>
                    <li>Química orgânica (introdução)</li>
                </ul>
            </div>

            <h3 class="section-divider">📌 Exemplos</h3>

            <div class="example-box">
                <h4>Exemplo – Ligação Iônica</h4>
                <p>Ocorre entre metal e ametal. Exemplo clássico: <strong>NaCl</strong> (cloreto de sódio – sal de cozinha).</p>
                <p>O sódio doa 1 elétron e o cloro recebe.</p>
            </div>

            <div class="example-box">
                <h4>Exemplo – Ácido e Base</h4>
                <p><strong>Ácido:</strong> HCl (ácido clorídrico)</p>
                <p><strong>Base:</strong> NaOH (hidróxido de sódio)</p>
            </div>

            <h3 class="section-divider">✏️ Exercícios</h3>

            <div class="exercise-box">
                <h4>Exercício 1</h4>
                <p>Qual tipo de ligação química ocorre no sal de cozinha (NaCl)?</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p><strong>Ligação iônica</strong></p>
                </div>
            </div>

            <div class="exercise-box">
                <h4>Exercício 2</h4>
                <p>Classifique em ácido ou base: H₂SO₄ e Ca(OH)₂</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p>H₂SO₄ = <strong>Ácido</strong> (ácido sulfúrico)</p>
                    <p>Ca(OH)₂ = <strong>Base</strong> (hidróxido de cálcio)</p>
                </div>
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
                    <li>Verbo to be</li>
                    <li>Present Simple</li>
                    <li>Present Continuous</li>
                    <li>Vocabulário do dia a dia</li>
                </ul>
            </div>

            <h3 class="section-divider">📌 Exemplos</h3>

            <div class="example-box">
                <h4>Exemplo – Verb to be</h4>
                <p>I <strong>am</strong> a student.</p>
                <p>She <strong>is</strong> happy.</p>
                <p>They <strong>are</strong> my friends.</p>
            </div>

            <div class="example-box">
                <h4>Exemplo – Present Simple</h4>
                <p>I study every day.</p>
                <p>He plays soccer on weekends.</p>
            </div>

            <h3 class="section-divider">✏️ Exercícios</h3>

            <div class="exercise-box">
                <h4>Exercício 1</h4>
                <p>Complete with the correct form of the verb to be (am / is / are):</p>
                <p>a) She _____ my sister.</p>
                <p>b) We _____ students.</p>
                <p>c) I _____ from Brazil.</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p>a) She <strong>is</strong> my sister.</p>
                    <p>b) We <strong>are</strong> students.</p>
                    <p>c) I <strong>am</strong> from Brazil.</p>
                </div>
            </div>

            <div class="exercise-box">
                <h4>Exercício 2</h4>
                <p>Translate to English:</p>
                <p>a) Eu gosto de matemática.</p>
                <p>b) Ela mora em São Paulo.</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p>a) I like mathematics. / I like math.</p>
                    <p>b) She lives in São Paulo.</p>
                </div>
            </div>
        `,
        medio: `
            <h3>Principais conteúdos – Ensino Médio</h3>
            
            <div class="topic-box">
                <h4>📚 Temas principais</h4>
                <ul>
                    <li>Tempos verbais (Past Simple, Present Perfect...)</li>
                    <li>Passive voice</li>
                    <li>Conditionals</li>
                    <li>Interpretação de textos (ENEM)</li>
                </ul>
            </div>

            <h3 class="section-divider">📌 Exemplos</h3>

            <div class="example-box">
                <h4>Exemplo – Past Simple</h4>
                <p>I studied yesterday.</p>
                <p>She went to the cinema last week.</p>
            </div>

            <div class="example-box">
                <h4>Exemplo – Present Perfect</h4>
                <p>I have studied English for 3 years.</p>
                <p>(Eu estudo inglês há 3 anos / Eu tenho estudado inglês por 3 anos)</p>
            </div>

            <h3 class="section-divider">✏️ Exercícios</h3>

            <div class="exercise-box">
                <h4>Exercício 1</h4>
                <p>Complete with the Past Simple:</p>
                <p>a) She _____ (watch) a movie yesterday.</p>
                <p>b) They _____ (go) to the park last Sunday.</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p>a) She <strong>watched</strong> a movie yesterday.</p>
                    <p>b) They <strong>went</strong> to the park last Sunday.</p>
                </div>
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
            
            <div class="topic-box">
                <h4>Temas comuns</h4>
                <ul>
                    <li>O que é pensar?</li>
                    <li>Diferença entre opinião e conhecimento</li>
                    <li>Ética e respeito</li>
                    <li>Valores e convivência</li>
                </ul>
            </div>

            <h3 class="section-divider">📌 Exemplos</h3>

            <div class="example-box">
                <h4>Exemplo – Opinião × Conhecimento</h4>
                <p><strong>Opinião:</strong> "Eu acho que chocolate é o melhor sorvete."</p>
                <p><strong>Conhecimento:</strong> "A água ferve a 100°C ao nível do mar." (pode ser comprovado)</p>
            </div>

            <h3 class="section-divider">✏️ Exercícios</h3>

            <div class="exercise-box">
                <h4>Exercício 1</h4>
                <p>Qual a diferença entre opinião e conhecimento? Dê um exemplo de cada.</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p><strong>Opinião</strong> é pessoal e subjetiva. <strong>Conhecimento</strong> pode ser verificado e comprovado. Exemplo de opinião: "Azul é a cor mais bonita." Exemplo de conhecimento: "A Terra gira em torno do Sol."</p>
                </div>
            </div>
        `,
        medio: `
            <h3>Principais conteúdos – Ensino Médio</h3>
            
            <div class="topic-box">
                <h4>🧠 Principais temas</h4>
                <ul>
                    <li>Sócrates, Platão e Aristóteles</li>
                    <li>Ética e moral</li>
                    <li>Política</li>
                    <li>Conhecimento e verdade</li>
                </ul>
            </div>

            <h3 class="section-divider">📌 Exemplos</h3>

            <div class="example-box">
                <h4>Exemplo – Sócrates</h4>
                <p>Sócrates dizia: <em>"Só sei que nada sei"</em>. Ele usava o diálogo (método socrático) para fazer as pessoas pensarem.</p>
            </div>

            <h3 class="section-divider">✏️ Exercícios</h3>

            <div class="exercise-box">
                <h4>Exercício 1</h4>
                <p>O que significa a frase de Sócrates "Só sei que nada sei"?</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p>Significa que o verdadeiro sábio reconhece a própria ignorância e está sempre aberto a aprender mais.</p>
                </div>
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
            
            <div class="topic-box">
                <h4>Temas introdutórios</h4>
                <ul>
                    <li>O que é sociedade</li>
                    <li>Cultura e diversidade</li>
                    <li>Direitos e deveres</li>
                    <li>Desigualdades sociais</li>
                </ul>
            </div>

            <h3 class="section-divider">📌 Exemplos</h3>

            <div class="example-box">
                <h4>Exemplo – Cultura</h4>
                <p>Cultura é o conjunto de costumes, crenças, valores, língua e arte de um povo. Exemplo: o futebol e o carnaval fazem parte da cultura brasileira.</p>
            </div>

            <h3 class="section-divider">✏️ Exercícios</h3>

            <div class="exercise-box">
                <h4>Exercício 1</h4>
                <p>Dê dois exemplos de elementos da cultura brasileira.</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p>Exemplos: futebol, carnaval, feijoada, samba, língua portuguesa, festas juninas, etc.</p>
                </div>
            </div>
        `,
        medio: `
            <h3>Principais conteúdos – Ensino Médio</h3>
            
            <div class="topic-box">
                <h4>👥 Temas principais</h4>
                <ul>
                    <li>Durkheim, Weber e Marx</li>
                    <li>Cultura e indústria cultural</li>
                    <li>Cidadania e movimentos sociais</li>
                    <li>Trabalho e desigualdade</li>
                </ul>
            </div>

            <h3 class="section-divider">📌 Exemplos</h3>

            <div class="example-box">
                <h4>Exemplo – Cidadania</h4>
                <p>Cidadania é o exercício dos direitos e deveres de uma pessoa na sociedade (votar, estudar, respeitar as leis, cobrar direitos, etc.).</p>
            </div>

            <h3 class="section-divider">✏️ Exercícios</h3>

            <div class="exercise-box">
                <h4>Exercício 1</h4>
                <p>O que é cidadania? Cite um direito e um dever do cidadão.</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p>Cidadania é o conjunto de direitos e deveres. Direito: votar / educação. Dever: respeitar as leis / pagar impostos.</p>
                </div>
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
                    <li>Artes visuais</li>
                    <li>Música</li>
                    <li>Teatro</li>
                    <li>Dança</li>
                </ul>
            </div>

            <h3 class="section-divider">📌 Exemplos</h3>

            <div class="example-box">
                <h4>Exemplo – Elementos da música</h4>
                <p>Melodia, ritmo e harmonia são os três elementos básicos da música.</p>
            </div>

            <h3 class="section-divider">✏️ Exercícios</h3>

            <div class="exercise-box">
                <h4>Exercício 1</h4>
                <p>Cite as quatro principais linguagens artísticas estudadas na escola.</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p>Artes visuais, Música, Teatro e Dança.</p>
                </div>
            </div>
        `,
        medio: `
            <h3>Principais conteúdos – Ensino Médio</h3>
            
            <div class="topic-box">
                <h4>🎨 Temas principais</h4>
                <ul>
                    <li>História da Arte</li>
                    <li>Arte moderna e contemporânea</li>
                    <li>Arte brasileira</li>
                    <li>Análise de obras</li>
                </ul>
            </div>

            <h3 class="section-divider">📌 Exemplos</h3>

            <div class="example-box">
                <h4>Exemplo – Semana de Arte Moderna</h4>
                <p>Aconteceu em 1922 em São Paulo. Foi um marco da arte moderna no Brasil (Anita Malfatti, Oswald de Andrade, Mário de Andrade, etc.).</p>
            </div>

            <h3 class="section-divider">✏️ Exercícios</h3>

            <div class="exercise-box">
                <h4>Exercício 1</h4>
                <p>Em que ano aconteceu a Semana de Arte Moderna e por que ela foi importante?</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p>Aconteceu em <strong>1922</strong>. Foi importante porque marcou a ruptura com a arte tradicional e o início do Modernismo no Brasil.</p>
                </div>
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
                    <li>Esportes coletivos e individuais</li>
                    <li>Ginástica</li>
                    <li>Saúde e cuidados com o corpo</li>
                </ul>
            </div>

            <h3 class="section-divider">📌 Exemplos</h3>

            <div class="example-box">
                <h4>Exemplo – Esportes coletivos</h4>
                <p>Futebol, vôlei, basquete e handebol são exemplos de esportes coletivos (jogados em equipe).</p>
            </div>

            <h3 class="section-divider">✏️ Exercícios</h3>

            <div class="exercise-box">
                <h4>Exercício 1</h4>
                <p>Cite três esportes coletivos e dois esportes individuais.</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p><strong>Coletivos:</strong> futebol, vôlei, basquete, handebol...<br>
                    <strong>Individuais:</strong> natação, atletismo, tênis, ginástica artística...</p>
                </div>
            </div>
        `,
        medio: `
            <h3>Principais conteúdos – Ensino Médio</h3>
            
            <div class="topic-box">
                <h4>🏃 Temas</h4>
                <ul>
                    <li>Treinamento e condicionamento físico</li>
                    <li>Saúde e qualidade de vida</li>
                    <li>Corpo e mídia</li>
                    <li>Esportes e inclusão</li>
                </ul>
            </div>

            <h3 class="section-divider">📌 Exemplos</h3>

            <div class="example-box">
                <h4>Exemplo – Sedentarismo</h4>
                <p>Sedentarismo é a falta de atividade física regular. Ele aumenta o risco de várias doenças (obesidade, problemas cardíacos, etc.).</p>
            </div>

            <h3 class="section-divider">✏️ Exercícios</h3>

            <div class="exercise-box">
                <h4>Exercício 1</h4>
                <p>O que é sedentarismo e por que ele é prejudicial à saúde?</p>
                <button class="toggle-answer" onclick="toggleAnswer(this)">Ver resposta</button>
                <div class="answer">
                    <p>Sedentarismo é a falta de exercícios físicos. É prejudicial porque aumenta o risco de obesidade, diabetes, problemas no coração e diminui a qualidade de vida.</p>
                </div>
            </div>
        `
    }
];

// Função para mostrar/esconder respostas
function toggleAnswer(button) {
    const answer = button.nextElementSibling;
    if (answer.classList.contains('show')) {
        answer.classList.remove('show');
        button.textContent = 'Ver resposta';
    } else {
        answer.classList.add('show');
        button.textContent = 'Esconder resposta';
    }
}

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
