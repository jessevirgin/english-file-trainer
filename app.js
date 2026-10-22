// ==========================================
// ЧАСТЬ 1: БАЗА ДАННЫХ СЛОВ (НАЧАЛО)
// ==========================================

const vocabularyData = {
    "7A": {
        title: "Модуль 7A: Education (Образование)",
        words: [
            // Страница 66-67: Школы и процессы
            { en: "boarding school", ru: "школа-интернат" },
            { en: "state school", ru: "государственная школа" },
            { en: "private school", ru: "частная школа" },
            { en: "nursery school", ru: "детский сад" },
            { en: "primary school", ru: "начальная школа" },
            { en: "secondary school", ru: "средняя школа" },
            { en: "be expelled", ru: "быть отчисленным" },
            { en: "punish", ru: "наказывать" },
            { en: "cheat", ru: "списывать" },
            { en: "pass an exam", ru: "сдать экзамен" },
            { en: "fail an exam", ru: "завалить экзамен" },
            { en: "education", ru: "образование" },
            { en: "full", ru: "полный" },
            { en: "lunch", ru: "обед" },
            { en: "music", ru: "музыка" },
            { en: "pupil", ru: "ученик" },
            { en: "put", ru: "класть" },
            { en: "result", ru: "результат" },
            { en: "rude", ru: "грубый" },
            { en: "rules", ru: "правила" },
            { en: "student", ru: "студент" },
            { en: "study", ru: "учиться" },
            { en: "subject", ru: "учебный предмет" },
            { en: "true", ru: "верный" },
            { en: "university", ru: "университет" },
            { en: "biology", ru: "биология" },
            { en: "chemistry", ru: "химия" },
            { en: "school subjects", ru: "школьные предметы" },
            { en: "mixed school", ru: "совместная школа" },
            { en: "single-sex school", ru: "раздельная школа" },
            { en: "geography", ru: "география" },
            { en: "history", ru: "история" },
            { en: "information technology", ru: "информатика" },
            { en: "literature", ru: "литература" },
            { en: "maths", ru: "математика" },
            { en: "physics", ru: "физика" },
            { en: "wear a uniform", ru: "носить форму" },
            { en: "strict", ru: "строгий" },
            { en: "punishments", ru: "наказания" },
            { en: "behave well", ru: "вести себя хорошо" },
            { en: "misbehave", ru: "вести себя плохо" },

            // Страница 68: Аудирование BBC и эксперимент
            { en: "education system", ru: "система образования" },
            { en: "superior", ru: "превосходящий" },
            { en: "set up an experiment", ru: "провести эксперимент" },
            { en: "shock", ru: "шок" },
            { en: "copy from the board", ru: "списывать с доски" },
            { en: "do experiments", ru: "проводить опыты" },
            { en: "attitude to learning", ru: "отношение к учебе" },
            { en: "pay attention", ru: "обращать внимание" },
            { en: "have problems with disciplining students", ru: "иметь проблемы с дисциплиной студентов" },
            { en: "expel several students from the class", ru: "выгнать нескольких студентов из класса" },
            { en: "change their approach", ru: "изменить свой подход" },
            { en: "make a good impression on the parents", ru: "произвести хорошее впечатление на родителей" },
            { en: "Asian countries", ru: "азиатские страны" },
            { en: "Western countries", ru: "западные страны" },
            { en: "of the same age", ru: "того же возраста" },
            { en: "unique experiment", ru: "уникальный эксперимент" },
            { en: "take tests", ru: "писать контрольные" },
            { en: "highly successful", ru: "очень успешный" },
            { en: "produce better results", ru: "приносить лучшие результаты" },
            { en: "science", ru: "естественные науки" },
            { en: "Mandarin", ru: "китайский язык" },
            { en: "teaching style", ru: "стиль преподавания" },
            { en: "secondary school students", ru: "учащиеся средней школы" },

            // Страница 69-70: Высшее образование и карьера
            { en: "A level results", ru: "результаты выпускных экзаменов" },
            { en: "celebrate", ru: "праздновать" },
            { en: "marks / grades", ru: "оценки" },
            { en: "graduate", ru: "выпуститься из университета" },
            { en: "Is it really worth it?", ru: "Стоит ли оно того на самом деле?" },
            { en: "top grade", ru: "высший балл" },
            { en: "give me a place", ru: "предоставить мне место" },
            { en: "has a degree", ru: "имеет диплом" },
            { en: "unemployed", ru: "безработный" },
            { en: "run her own business", ru: "вести собственный бизнес" },
            { en: "prepare students for life", ru: "готовить учащихся к жизни" },
            { en: "practical things", ru: "практические вещи" },
            { en: "childcare", ru: "уход за детьми" },
            { en: "healthy food", ru: "здоровая еда" },
            { en: "physical education (PE)", ru: "физкультура" },
            { en: "optional", ru: "необязательный" },
            { en: "have jobs during term-time", ru: "работать во время семестра" },
            { en: "get a good job", ru: "получить хорошую работу" },
            { en: "live independently", ru: "жить самостоятельно" },
            { en: "a waste of time", ru: "пустая трата времени" },
            { en: "social benefits", ru: "социальные блага" },
            { en: "do an apprenticeship", ru: "проходить практику на производстве" },
            { en: "be in debt", ru: "быть в долгах" },
            { en: "earn money", ru: "зарабатывать деньги" },
            { en: "completely agree", ru: "полностью согласен" },
            { en: "partly agree", ru: "частично согласен" },
            { en: "software engineer", ru: "инженер-программист" },
            { en: "global tech company", ru: "международная технологическая компания" },
            { en: "essential", ru: "крайне важный" },
            { en: "self-taught", ru: "самоучка" },
            { en: "organizing and presenting opinions", ru: "организация и презентация мнения" }
        ]
    },
// ==========================================
// ЧАСТЬ 2: МОДУЛЬ HALLOWEEN И ПЕРЕМЕННЫЕ
// ==========================================

    "halloween": {
        title: "🎃 Спецвыпуск: Halloween Vocabulary",
        words: [
            // Существа и персонажи
            { en: "ghost", ru: "привидение" },
            { en: "witch", ru: "ведьма" },
            { en: "vampire", ru: "вампир" },
            { en: "werewolf", ru: "оборотень" },
            { en: "zombie", ru: "зомби" },
            { en: "mummy", ru: "мумия" },
            { en: "skeleton", ru: "скелет" },
            { en: "monster", ru: "чудовище" },
            { en: "black cat", ru: "черный кот" },
            { en: "bat", ru: "летучая мышь" },
            { en: "demon", ru: "демон" },
            { en: "goblin", ru: "гоблин" },
            
            // Атрибуты и локации
            { en: "pumpkin", ru: "тыква" },
            { en: "jack-o'-lantern", ru: "фонарь из тыквы" },
            { en: "cauldron", ru: "котел" },
            { en: "potion", ru: "зелье" },
            { en: "broomstick", ru: "помело" },
            { en: "costume", ru: "костюм" },
            { en: "mask", ru: "маска" },
            { en: "candy / sweets", ru: "конфеты" },
            { en: "cobweb / spiderweb", ru: "паутина" },
            { en: "cemetery / graveyard", ru: "кладбище" },
            { en: "tombstone / gravestone", ru: "надгробие" },
            { en: "coffin", ru: "гроб" },
            { en: "haunted house", ru: "дом с привидениями" },
            { en: "skull", ru: "череп" },
            { en: "candle", ru: "свеча" },
            { en: "scarecrow", ru: "пугало" },
            
            // Атмосферные глаголы
            { en: "carve", ru: "вырезать" },
            { en: "dress up", ru: "наряжаться" },
            { en: "trick-or-treat", ru: "выпрашивать сладости" },
            { en: "haunt", ru: "являться (о призраках)" },
            { en: "scare / frighten", ru: "пугать" },
            { en: "terrify", ru: "ужасать" },
            { en: "howl", ru: "выть" },
            { en: "cackle", ru: "хихикать / гоготать (о ведьмах)" },
            { en: "scream", ru: "кричать / вопить" },
            
            // Прилагательные (описания)
            { en: "spooky", ru: "жутковатый" },
            { en: "creepy", ru: "бросающий в дрожь" },
            { en: "eerie", ru: "мрачный / зловещий" },
            { en: "scary", ru: "страшный" },
            { en: "frightening", ru: "пугающий" },
            { en: "terrifying", ru: "ужасающий" },
            { en: "gloomy", ru: "темный / унылый" },
            { en: "wicked", ru: "злой / нечестивый" },
            { en: "ghostly", ru: "призрачный" },
            { en: "gruesome", ru: "чудовищный / кошмарный" },
            { en: "mysterious", ru: "таинственный" },
            { en: "supernatural", ru: "сверхъестественный" },
            { en: "superstitious", ru: "суеверный" }
        ]
    }
};

// Глобальные переменные для отслеживания настроек и прогресса текущей сессии
let currentWords = [];
let currentIndex = 0;
let score = 0;
let gameMode = 'quiz'; 
let langMode = 'en-ru'; 
let selectedModuleKey = "7A"; 

// Поиск и сохранение ссылок на экраны приложения
const screenSettings = document.getElementById('screen-settings');
const screenGame = document.getElementById('screen-game');
const screenResults = document.getElementById('screen-results');

// Поиск элементов управления стартового экрана
const startBtn = document.getElementById('start-btn');
// ==========================================
// ЧАСТЬ 3: ЭЛЕМЕНТЫ ИНТЕРФЕЙСА И ЗАПУСК ИГРЫ
// ==========================================

// Поиск элементов игрового процесса
const progressText = document.getElementById('progress-text');
const scoreText = document.getElementById('score-text');
const progressBarFill = document.getElementById('progress-bar-fill');
const targetWordElement = document.getElementById('target-word');
const quizOptionsContainer = document.getElementById('quiz-options');
const inputContainer = document.getElementById('input-container');
const userAnswerInput = document.getElementById('user-answer');
const submitBtn = document.getElementById('submit-btn');
const feedbackElement = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const quitBtn = document.getElementById('quit-btn');

// Поиск элементов экрана результатов
const finalScoreElement = document.getElementById('final-score');
const resultMessageElement = document.getElementById('result-message');
const restartBtn = document.getElementById('restart-btn');

// Наполнение меню выбора модулей красивыми плитками при загрузке страницы
function initializeApp() {
    const moduleContainer = document.getElementById('module-options');
    if (!moduleContainer) return;
    moduleContainer.innerHTML = '';
    
    Object.keys(vocabularyData).forEach((moduleKey, index) => {
        const label = document.createElement('label');
        
        if (index === 0) {
            label.className = 'selected-card';
            selectedModuleKey = moduleKey;
        }
        
        label.innerHTML = `
            <input type="radio" name="module-radio" value="${moduleKey}" ${index === 0 ? 'checked' : ''} style="display:none;">
            ${vocabularyData[moduleKey].title}
        `;
        
        label.addEventListener('click', () => {
            const allLabels = moduleContainer.querySelectorAll('label');
            allLabels.forEach(l => l.classList.remove('selected-card'));
            label.classList.add('selected-card');
            selectedModuleKey = moduleKey;
        });
        
        moduleContainer.appendChild(label);
    });
}

// ЛОГИКА ЗАПУСКА ТРЕНИРОВКИ
startBtn.addEventListener('click', () => {
    if (!selectedModuleKey || !vocabularyData[selectedModuleKey]) return;

    gameMode = document.querySelector('input[name="game-mode"]:checked').value;
    langMode = document.querySelector('input[name="lang-mode"]:checked').value;

    currentWords = [...vocabularyData[selectedModuleKey].words];
    currentWords.sort(() => Math.random() - 0.5);

    // Берем 10 случайных слов на один раунд из нашего списка
    if (currentWords.length > 10) {
        currentWords = currentWords.slice(0, 10);
    }

    currentIndex = 0;
    score = 0;

    screenSettings.classList.add('hidden');
    screenGame.classList.remove('hidden');

    showQuestion();
});
// ==========================================
// ЧАСТЬ 4: ПОКАЗ ВОПРОСА И ВАРИАНТОВ ОТВЕТА
// ==========================================

// ФУНКЦИЯ ОТОБРАЖЕНИЯ ТЕКУЩЕГО ВОПРОСА
function showQuestion() {
    feedbackElement.classList.add('hidden');
    feedbackElement.innerHTML = '';
    nextBtn.classList.add('hidden');
    
    progressText.textContent = `Вопрос ${currentIndex + 1} из ${currentWords.length}`;
    scoreText.textContent = `Счёт: ${score}`;

    // Обновление полосы прогресса
    const progressPercent = ((currentIndex + 1) / currentWords.length) * 100;
    progressBarFill.style.width = `${progressPercent}%`;

    const currentWordObj = currentWords[currentIndex];
    const displayWord = langMode === 'en-ru' ? currentWordObj.en : currentWordObj.ru;
    const correctAnswer = langMode === 'en-ru' ? currentWordObj.ru : currentWordObj.en;

    targetWordElement.textContent = displayWord;

    if (gameMode === 'quiz') {
        quizOptionsContainer.classList.remove('hidden');
        inputContainer.classList.add('hidden');
        generateQuizOptions(correctAnswer);
    } else {
        quizOptionsContainer.classList.add('hidden');
        inputContainer.classList.remove('hidden');
        userAnswerInput.value = '';
        userAnswerInput.classList.remove('input-success', 'input-error');
        userAnswerInput.disabled = false;
        submitBtn.classList.remove('hidden');
        setTimeout(() => userAnswerInput.focus(), 50);
    }
}

// ГЕНЕРАЦИЯ ВАРИАНТОВ ОТВЕТОВ (ДЛЯ РЕЖИМА QUIZ)
function generateQuizOptions(correctAnswer) {
    quizOptionsContainer.innerHTML = '';

    const allWordsInModule = vocabularyData[selectedModuleKey].words;
    const allPossibleAnswers = allWordsInModule.map(item => langMode === 'en-ru' ? item.ru : item.en);
    const wrongAnswersPool = allPossibleAnswers.filter(ans => ans !== correctAnswer);

    wrongAnswersPool.sort(() => Math.random() - 0.5);
    const selectedWrongAnswers = wrongAnswersPool.slice(0, 3);

    const finalOptions = [correctAnswer, ...selectedWrongAnswers];
    finalOptions.sort(() => Math.random() - 0.5);

    finalOptions.forEach(optionText => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = optionText;
        btn.addEventListener('click', () => handleAnswerSelection(btn, optionText, correctAnswer));
        quizOptionsContainer.appendChild(btn);
    });
}
// ==========================================
// ЧАСТЬ 5: ПРОВЕРКА ОТВЕТОВ, ИТОГИ И СЛУШАТЕЛИ
// ==========================================

// ОБРАБОТКА ВЫБОРА ОТВЕТА (РЕЖИМ QUIZ) - С КНОПКОЙ "ДАЛЬШЕ"
function handleAnswerSelection(selectedBtn, chosenAnswer, correctAnswer) {
    const allButtons = quizOptionsContainer.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);

    if (chosenAnswer === correctAnswer) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('wrong');
        allButtons.forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.classList.add('correct');
            }
        });
    }
    scoreText.textContent = `Счёт: ${score}`;
    nextBtn.classList.remove('hidden');
}

// ОБРАБОТКА РУЧНОГО ВВОДА ОТВЕТА
function handleInputSubmit() {
    const currentWordObj = currentWords[currentIndex];
    const correctAnswer = langMode === 'en-ru' ? currentWordObj.ru : currentWordObj.en;
    
    const userRawAnswer = userAnswerInput.value;
    const cleanUserAnswer = userRawAnswer.trim().toLowerCase();
    const cleanCorrectAnswer = correctAnswer.trim().toLowerCase();

    userAnswerInput.disabled = true;
    submitBtn.classList.add('hidden');

    if (cleanUserAnswer === cleanCorrectAnswer) {
        userAnswerInput.classList.add('input-success');
        showFeedback(true, "Отлично, абсолютно верно!");
        score++;
    } else {
        userAnswerInput.classList.add('input-error');
        showFeedback(false, `Неверно ➔ ${correctAnswer}`, userRawAnswer);
    }
    scoreText.textContent = `Счёт: ${score}`;
    nextBtn.classList.remove('hidden');
}

// ВЫВОД ТЕКСТОВОЙ ОБРАТНОЙ СВЯЗИ (ДЛЯ РУЧНОГО РЕЖИМА)
function showFeedback(isCorrect, mainMessage, userRawAnswer = "") {
    feedbackElement.className = 'feedback-box'; 
    feedbackElement.classList.add(isCorrect ? 'correct' : 'wrong');
    
    if (isCorrect) {
        feedbackElement.textContent = mainMessage;
    } else {
        const displayUserAns = userRawAnswer.trim() || "(пусто)";
        feedbackElement.innerHTML = `
            <div>${mainMessage}</div>
            <div style="font-size: 13px; font-weight: 500; color: #7f1d1d; margin-top: 6px;">Ваш ответ: ${displayUserAns}</div>
        `;
    }
    feedbackElement.classList.remove('hidden');
}

// ЛОГИКА ПЕРЕХОДА К СЛЕДУЮЩЕМУ ВОПРОСУ
function goToNextQuestion() {
    currentIndex++;
    if (currentIndex < currentWords.length) {
        showQuestion();
    } else {
        showResultsScreen();
    }
}

nextBtn.addEventListener('click', goToNextQuestion);
submitBtn.addEventListener('click', handleInputSubmit);

userAnswerInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !userAnswerInput.disabled) {
        handleInputSubmit();
    }
});

// Досрочный выход во время игры
quitBtn.addEventListener('click', () => {
    screenGame.classList.add('hidden');
    screenSettings.classList.remove('hidden');
});

// ЭКРАН ИТОГОВ
function showResultsScreen() {
    screenGame.classList.add('hidden');
    screenResults.classList.remove('hidden');

    finalScoreElement.textContent = `${score} / ${currentWords.length}`;

    const percentage = (score / currentWords.length) * 100;
    if (percentage === 100) {
        resultMessageElement.textContent = "Невероятно! Идеальный результат, вы выучили все слова! 🎉";
        finalScoreElement.style.color = "#166534";
    } else if (percentage >= 70) {
        resultMessageElement.textContent = "Хорошая работа! Отличные знания лексики модуля! 👍";
        finalScoreElement.style.color = "#4f46e5";
    } else if (percentage >= 40) {
        resultMessageElement.textContent = "Неплохо, но стоит ещё немного повторить материал. 📚";
        finalScoreElement.style.color = "#d97706";
    } else {
        resultMessageElement.textContent = "Нужно подучить слова модуля и попробовать снова! 🔄";
        finalScoreElement.style.color = "#991b1b";
    }
}

// ВОЗВРАТ ИЗ ЭКРАНА РЕЗУЛЬТАТОВ В МЕНЮ
restartBtn.addEventListener('click', () => {
    screenResults.classList.add('hidden');
    screenSettings.classList.remove('hidden');
});

// Старт инициализации приложения
initializeApp();
