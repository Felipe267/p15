const areaToggleLinks = document.querySelectorAll('.area-toggle');
        const areaContents = document.querySelectorAll('.area-content');

        areaToggleLinks.forEach((link, index) => {
            link.addEventListener('click', function(event) {
                event.preventDefault();

                if (areaContents[index].style.display === 'block') {
                    areaContents[index].style.display = 'none';
                } else {
                    areaContents[index].style.display = 'block';
                }

                areaToggleLinks.forEach(areaToggleLink => areaToggleLink.classList.remove('active'));
                this.classList.add('active');
            });
        });

        const quizzes = [
            {
                questions: [
                    {
                        question: "1.Qual partícula subatômica possui uma carga negativa e orbita ao redor do núcleo do átomo?",
                        options: ["Próton", "Nêutron", "Elétron", "Íon", "Átomo"],
                        correctAnswer: "Elétron"
                    },
                    {
                        question: "2.De acordo com o modelo atômico proposto por Rutherford, qual é a característica principal do átomo?",
                        options: ["Os elétrons estão distribuídos uniformemente em toda a massa do átomo.", "O átomo é uma esfera sólida e indivisível.", "A maioria da massa e carga positiva do átomo está concentrada no núcleo.", "Os elétrons estão dispostos em órbitas quantizadas ao redor do núcleo.", "O núcleo é formado por nêutrons e elétrons."],
                        correctAnswer: "A maioria da massa e carga positiva do átomo está concentrada no núcleo."
                    }
                    // Adicione mais perguntas aqui
                ],
                questionContainer: document.getElementById("questionContainer1"),
                questionElement: document.getElementById("question1"),
                quizForm: document.getElementById("quizForm1"),
                resultElement: document.getElementById("result1"),
                scoreContainer: document.getElementById("scoreContainer1"),
                scoreElement: document.getElementById("score1"),
                totalQuestionsElement: document.getElementById("totalQuestions1"),
                checkButton: document.getElementById("checkButton1"),
                currentQuestionIndex: 0,
                score: 0
            },
            {
                questions: [
                    {
                        question: "1.Qual é a distribuição eletrônica do átomo de cloro (Z = 17)?",
                        options: ["1s² 2s² 2p⁶ 3s² 3p⁵", "1s² 2s² 2p⁶ 3s² 3p³", " 1s² 2s² 2p⁶ 3s² 3p⁶", "1s² 2s² 2p⁶ 3s² 3p⁴", "1s² 2s² 2p⁶ 3s² 3p²"],
                        correctAnswer: "1s² 2s² 2p⁶ 3s² 3p⁵"
                    },
                    {
                        question: "2.Qual é a configuração eletrônica abreviada do elemento ferro (Z = 26)?",
                        options: ["[Ar] 4s² 3d⁶", "[Ar] 4s² 3d⁸", "[Ne] 4s² 3d⁶", "[Kr] 4s² 3d⁶", "[Kr] 4s² 3d⁶"],
                        correctAnswer: "[Ar] 4s² 3d⁶"
                    },
                    {
                        question: "Qual é a distribuição eletrônica do íon oxigênio (O²⁻)?",
                        options: ["1s² 2s² 2p²", "1s² 2s² 2p³", "1s² 2s² 2p⁴", "1s² 2s² 2p⁶", "1s² 2s² 2p⁶ 3s² 3p⁶"],
                        correctAnswer: "1s² 2s² 2p⁴"
                    }    
                ],
                questionContainer: document.getElementById("questionContainer2"),
                questionElement: document.getElementById("question2"),
                quizForm: document.getElementById("quizForm2"),
                resultElement: document.getElementById("result2"),
                scoreContainer: document.getElementById("scoreContainer2"),
                scoreElement: document.getElementById("score2"),
                totalQuestionsElement: document.getElementById("totalQuestions2"),
                checkButton: document.getElementById("checkButton2"),
                currentQuestionIndex: 0,
                score: 0
            },
            {
                questions: [
                    {
                        question: "1. Qual é a geometria molecular da molécula de água (H2O)?",
                        options: ["Linear", "Trigonal plana", "Angular", "Tetraédrica","Bipiramidal"],
                        correctAnswer: "Angular"
                    },
                    {
                        question: "2. Qual é a principal força intermolecular presente nos hidrocarbonetos não polares, como o metano (CH4)?",
                        options: ["Ligações de hidrogênio", "Forças dipolo-dipolo", "Forças de dispersão de London", "Ligações covalentes", "NDA"],
                        correctAnswer: "Forças de dispersão de London"
                    },
                    {
                        question: "3. Qual das seguintes forças intermoleculares é a mais fraca?",
                        options: ["Ligações de hidrogênio", "Forças dipolo-dipolo", "Forças de dispersão de London", "Ligações covalentes", "NDA"],
                        correctAnswer: "Ligações covalentes"
                    }
                ],
                questionContainer: document.getElementById("questionContainer3"),
                questionElement: document.getElementById("question3"),
                quizForm: document.getElementById("quizForm3"),
                resultElement: document.getElementById("result3"),
                scoreContainer: document.getElementById("scoreContainer3"),
                scoreElement: document.getElementById("score3"),
                totalQuestionsElement: document.getElementById("totalQuestions3"),
                checkButton: document.getElementById("checkButton3"),
                currentQuestionIndex: 0,
                score: 0
            },
            {
                questions: [
                    {
                        question: "1. Qual das seguintes afirmações sobre entalpia está correta?",
                        options: ["A entalpia de reação é a energia total de um sistema", "A variação de entalpia (∆H) é positiva para reações exotérmicas", "A entalpia padrão de formação de elementos simples é sempre negativa", "A entalpia não está relacionada com a quantidade de calor trocada em uma reação", "A lei da conservação de energia não se aplica às mudanças de entalpia"],
                        correctAnswer: "A variação de entalpia (∆H) é positiva para reações exotérmicas"
                    },
                    {
                        question: "2. O que é a lei da conservação de energia em relação à entalpia?",
                        options: ["A entalpia de um sistema isolado aumenta constantemente", "A entalpia de um sistema isolado diminui constantemente", "A entalpia total de um sistema isolado permanece constante", "A entalpia só é conservada em sistemas em equilíbrio térmico", "A entalpia é apenas uma forma de energia potencial"],
                        correctAnswer: "A entalpia total de um sistema isolado permanece constante"
                    },
                    {
                        question: "3. Em uma reação química, se a energia liberada na formação de produtos for maior do que a energia absorvida na quebra dos reagentes, então:",
                        options: ["A reação é endotérmica", "A reação é exotérmica", "A reação é isotérmica", "A reação não envolve troca de energia", "A reação é espontânea"],
                        correctAnswer: "A reação é endotérmica"
                    },
                    {
                        question: "4. Qual é o valor da variação de entalpia padrão (∆H°) para uma reação que libera 150 kJ de energia?",
                        options: ["+150 kJ", "-150 kJ", "+1.50 kJ", "-1.50 kJ", "0 kJ"],
                        correctAnswer: "-150 kJ"
                    },
                    {
                        question: "Se uma reação química ocorre espontaneamente e libera calor para o ambiente, como você descreveria o valor da entalpia padrão (∆H°) para essa reação?",
                        options: ["∆H° é positivo, indicando uma reação endotérmica", "∆H° é negativo, indicando uma reação exotérmica", "∆H° é igual a zero, indicando que nenhuma energia é trocada", "∆H° não tem relação com a espontaneidade de uma reação", "∆H° é sempre positivo para reações espontâneas"],
                        correctAnswer: "∆H° é negativo, indicando uma reação exotérmica"
                    }    
                ],
                questionContainer: document.getElementById("questionContainer4"),
                questionElement: document.getElementById("question4"),
                quizForm: document.getElementById("quizForm4"),
                resultElement: document.getElementById("result4"),
                scoreContainer: document.getElementById("scoreContainer4"),
                scoreElement: document.getElementById("score4"),
                totalQuestionsElement: document.getElementById("totalQuestions4"),
                checkButton: document.getElementById("checkButton4"),
                currentQuestionIndex: 0,
                score: 0
            },
            {
                questions: [
                    {
                        question: "1. Qual dos seguintes gases é considerado um dos principais responsáveis pelo efeito estufa e contribui para o aquecimento global?",
                        options: ["Oxigênio (O2)", "Nitrogênio (N2)", "Dióxido de enxofre (SO2)", "Metano (CH4)", "Hidrogênio (H2)"],
                        correctAnswer: "Metano (CH4)"
                    },
                    {
                        question: "2. Para reduzir a poluição da água causada por nutrientes em excesso, como nitrogênio e fósforo, é importante controlar a:",
                        options: ["Erosão do solo", "Acidificação atmosférica", "Formação de camada de ozônio", "Emissão de dióxido de carbono (CO2)", "Dispersão de compostos orgânicos voláteis"],
                        correctAnswer: "Erosão do solo"
                    },
                    {
                        question: "3. Qual é o principal objetivo da separação e reciclagem de resíduos sólidos, como plásticos, papel e vidro?",
                        options: ["Aumentar a produção de resíduos", "Reduzir a geração de energia", "Promover a degradação ambiental", "Diminuir a extração de matérias-primas", "Aumentar a dependência de aterros sanitários"],
                        correctAnswer: "Diminuir a extração de matérias-primas"
                    }
                ],
                questionContainer: document.getElementById("questionContainer5"),
                questionElement: document.getElementById("question5"),
                quizForm: document.getElementById("quizForm5"),
                resultElement: document.getElementById("result5"),
                scoreContainer: document.getElementById("scoreContainer5"),
                scoreElement: document.getElementById("score5"),
                totalQuestionsElement: document.getElementById("totalQuestions5"),
                checkButton: document.getElementById("checkButton5"),
                currentQuestionIndex: 0,
                score: 0
            }
        ];

        function showQuestion(quiz) {
            const currentQuestion = quiz.questions[quiz.currentQuestionIndex];
            quiz.questionElement.textContent = currentQuestion.question;

            quiz.quizForm.innerHTML = "";
            currentQuestion.options.forEach((option, index) => {
                const label = document.createElement("label");
                const input = document.createElement("input");
                input.type = "radio";
                input.name = `answer${quiz.currentQuestionIndex}`;
                input.value = option;
                label.appendChild(input);
                label.appendChild(document.createTextNode(option));
                quiz.quizForm.appendChild(label);
            });
        }

        function checkAnswer(quiz) {
            const selectedAnswer = document.querySelector(`input[name="answer${quiz.currentQuestionIndex}"]:checked`);

            if (selectedAnswer) {
                const userAnswer = selectedAnswer.value;
                const correctAnswer = quiz.questions[quiz.currentQuestionIndex].correctAnswer;

                if (userAnswer === correctAnswer) {
                    quiz.resultElement.textContent = "Resposta correta!";
                    quiz.score++;
                } else {
                    quiz.resultElement.textContent = "Resposta incorreta. Tente novamente.";
                }

                quiz.currentQuestionIndex++;
                if (quiz.currentQuestionIndex < quiz.questions.length) {
                    showQuestion(quiz);
                } else {
                    quiz.questionContainer.style.display = "none";
                    quiz.checkButton.style.display = "none";
                    quiz.scoreContainer.style.display = "block";
                    quiz.scoreElement.textContent = quiz.score;
                    quiz.totalQuestionsElement.textContent = quiz.questions.length;
                }
            } else {
                alert("Selecione uma resposta antes de verificar.");
            }
        }

        quizzes.forEach((quiz, index) => {
            showQuestion(quiz);
            quiz.checkButton.addEventListener("click", () => checkAnswer(quiz));
        });