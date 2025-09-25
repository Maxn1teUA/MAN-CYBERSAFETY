// 1. КОНФІГУРАЦІЯ КВІЗУ (20 запитань)
// Якщо 'multi: true', це питання з кількома відповідями, і 'correctAnswer' має бути масивом!
const questions = [
    {
        question: "Що таке 'фішинг'?",
        answers: [
            "Програма для прискорення інтернету.",
            "Спроба обманом отримати конфіденційні дані (паролі, номери карток).", 
            "Метод шифрування даних."
        ],
        correctAnswer: ["Спроба обманом отримати конфіденційні дані (паролі, номери карток)."],
        multi: false
    },
    {
        question: "Який пароль вважається найнадійнішим?",
        answers: [
            "Коротке слово, яке легко запам'ятати.",
            "Комбінація букв (великих і малих), цифр та спеціальних символів (мін. 12 символів).", 
            "Ваше ім'я та дата народження."
        ],
        correctAnswer: ["Комбінація букв (великих і малих), цифр та спеціальних символів (мін. 12 символів)."],
        multi: false
    },
    {
        question: "Що потрібно зробити, якщо ви отримали підозрілий електронний лист від банку?",
        answers: [
            "Негайно перейти за посиланням у листі.",
            "Зателефонувати в банк за офіційним номером, щоб перевірити інформацію.", 
            "Відповісти на лист, щоб уточнити деталі."
        ],
        correctAnswer: ["Зателефонувати в банк за офіційним номером, щоб перевірити інформацію."],
        multi: false
    },
    {
        question: "Чому важливо використовувати двофакторну автентифікацію (2FA)?",
        answers: [
            "Вона пришвидшує вхід на сайт.",
            "Вона вимагає додаткового коду (наприклад, з телефону) для входу, підвищуючи безпеку.", 
            "Вона робить ваш пароль довшим."
        ],
        correctAnswer: ["Вона вимагає додаткового коду (наприклад, з телефону) для входу, підвищуючи безпеку."],
        multi: false
    },
    {
        question: "Чи безпечно використовувати одну й ту ж саму адресу електронної пошти та пароль для всіх вебсайтів?",
        answers: [
            "Так, це економить час.",
            "Ні, якщо зламають один сайт, зловмисники отримають доступ до всіх ваших обліковок.", 
        ],
        correctAnswer: ["Ні, якщо зламають один сайт, зловмисники отримають доступ до всіх ваших обліковок."],
        multi: false
    },
    {
        question: "Що означає символ 'замок' у адресному рядку браузера?",
        answers: [
            "Сайт використовує застаріле шифрування.",
            "З'єднання є захищеним за протоколом HTTPS (безпека даних).", 
            "На цьому сайті не можна зберігати паролі."
        ],
        correctAnswer: ["З'єднання є захищеним за протоколом HTTPS (безпека даних)."],
        multi: false
    },
    {
        question: "Що таке 'шкідливе ПЗ' (Malware)?",
        answers: [
            "Будь-яка програма, яка працює повільно.",
            "Програмне забезпечення, створене для нанесення шкоди або несанкціонованого доступу до системи.", 
            "Рекламні банери на вебсайтах."
        ],
        correctAnswer: ["Програмне забезпечення, створене для нанесення шкоди або несанкціонованого доступу до системи."],
        multi: false
    },
    {
        question: "Як правильно оновлювати програмне забезпечення (ОС, додатки)?",
        answers: [
            "Тільки коли це дійсно необхідно (раз на рік).",
            "Регулярно, оскільки оновлення часто містять виправлення критичних вразливостей безпеки.", 
            "Вимкнути всі автоматичні оновлення, щоб зберегти швидкість роботи."
        ],
        correctAnswer: ["Регулярно, оскільки оновлення часто містять виправлення критичних вразливостей безпеки."],
        multi: false
    },
    {
        question: "Яка мета атаки 'відмова в обслуговуванні' (DDoS)?",
        answers: [
            "Викрасти паролі користувачів.",
            "Зробити вебсайт або мережевий ресурс недоступним для законних користувачів шляхом перевантаження.", 
            "Зашифрувати файли користувача і вимагати викуп."
        ],
        correctAnswer: ["Зробити вебсайт або мережевий ресурс недоступним для законних користувачів шляхом перевантаження."],
        multi: false
    },
    {
        question: "Яку інформацію не варто публікувати у соціальних мережах? (Виберіть 2 правильні відповіді)",
        answers: [
            "Фото вашої вечері.",
            "Повний номер вашої банківської картки.", 
            "Деталі приватного життя, які можуть бути використані для відповідей на секретні питання.",
            "Ваше фото з відпочинку."
        ],
        correctAnswer: [
            "Повний номер вашої банківської картки.", 
            "Деталі приватного життя, які можуть бути використані для відповідей на секретні питання."
        ],
        multi: true
    },
    // НОВІ 10 ЗАПИТАНЬ (Разом 20)
    {
        question: "Що таке 'Ransomware' (програма-вимагач)?",
        answers: [
            "Антивірусна програма з розширеними функціями.",
            "Шкідливе ПЗ, яке шифрує ваші файли і вимагає викуп за їх розблокування.",
            "Програма для віддаленого доступу до комп'ютера."
        ],
        correctAnswer: ["Шкідливе ПЗ, яке шифрує ваші файли і вимагає викуп за їх розблокування."],
        multi: false
    },
    {
        question: "Що допоможе захистити ваш смартфон від фізичної крадіжки даних? (Виберіть 2 правильні відповіді)",
        answers: [
            "Використання яскравих шпалер.",
            "Блокування пристрою за допомогою PIN-коду, візерунка або біометрії.",
            "Увімкнення функції віддаленого видалення даних.",
            "Регулярна зміна мелодії дзвінка."
        ],
        correctAnswer: [
            "Блокування пристрою за допомогою PIN-коду, візерунка або біометрії.",
            "Увімкнення функції віддаленого видалення даних."
        ],
        multi: true
    },
    {
        question: "Що слід робити, коли ви використовуєте публічний Wi-Fi у кафе чи аеропорту?",
        answers: [
            "Обмінюватися конфіденційною інформацією та паролями.",
            "Використовувати VPN (віртуальну приватну мережу) для шифрування трафіку.",
            "Заходити на банківські сайти без додаткового захисту."
        ],
        correctAnswer: ["Використовувати VPN (віртуальну приватну мережу) для шифрування трафіку."],
        multi: false
    },
    {
        question: "Який тип облікового запису є найбезпечнішим для роботи на комп'ютері?",
        answers: [
            "Обліковий запис адміністратора.",
            "Обліковий запис із правами гостя.",
            "Обліковий запис з обмеженими правами (стандартний користувач)."
        ],
        correctAnswer: ["Обліковий запис з обмеженими правами (стандартний користувач)."],
        multi: false
    },
    {
        question: "Що таке 'соціальна інженерія' у контексті кібербезпеки?",
        answers: [
            "Використання складного програмного коду для зламу.",
            "Використання психологічних маніпуляцій, щоб змусити людей видати конфіденційну інформацію.",
            "Метод створення захищених хмарних сховищ."
        ],
        correctAnswer: ["Використання психологічних маніпуляцій, щоб змусити людей видати конфіденційну інформацію."],
        multi: false
    },
    {
        question: "Коли варто оновлювати програмне забезпечення? (Виберіть 2 правильні відповіді)",
        answers: [
            "Тільки коли з'явиться нова функція.",
            "Щойно вийшло оновлення безпеки, що виправляє вразливість.",
            "Коли вас примусить система.",
            "Регулярно, щоб запобігти використанню старих 'дірок' хакерами."
        ],
        correctAnswer: [
            "Щойно вийшло оновлення безпеки, що виправляє вразливість.",
            "Регулярно, щоб запобігти використанню старих 'дірок' хакерами."
        ],
        multi: true
    },
    {
        question: "Які ознаки можуть вказувати на те, що ваш комп'ютер заражений? (Виберіть 3 правильні відповіді)",
        answers: [
            "Надмірно повільна робота.",
            "Несподівана поява нових панелей інструментів у браузері.",
            "Збільшення кількості спаму.",
            "Висока швидкість завантаження файлів."
        ],
        correctAnswer: [
            "Надмірно повільна робота.",
            "Несподівана поява нових панелей інструментів у браузері.",
            "Збільшення кількості спаму."
        ],
        multi: true
    },
    {
        question: "Що таке 'патч' у програмуванні?",
        answers: [
            "Коротка інструкція з використання ПЗ.",
            "Швидке виправлення (оновлення), що закриває знайдену вразливість або помилку в програмі.",
            "Код для обходу системи ліцензування."
        ],
        correctAnswer: ["Швидке виправлення (оновлення), що закриває знайдену вразливість або помилку в програмі."],
        multi: false
    },
    {
        question: "Що потрібно робити з файлами, які ви завантажили з інтернету?",
        answers: [
            "Одразу відкрити, якщо вони виглядають важливими.",
            "Завжди сканувати їх на наявність вірусів перед відкриттям.",
            "Надіслати їх другу, щоб він перевірив їх першим."
        ],
        correctAnswer: ["Завжди сканувати їх на наявність вірусів перед відкриттям."],
        multi: false
    },
    {
        question: "Які дії підвищують безпеку даних у хмарних сховищах? (Виберіть 2 правильні відповіді)",
        answers: [
            "Використання простого пароля.",
            "Увімкнення двофакторної автентифікації.",
            "Регулярне створення резервних копій.",
            "Надання доступу всім користувачам."
        ],
        correctAnswer: [
            "Увімкнення двофакторної автентифікації.",
            "Регулярне створення резервних копій."
        ],
        multi: true
    }
];

// 2. ЗМІННІ СТАНУ та ЕЛЕМЕНТИ DOM
let userName = '';
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswers = [];

const introScreen = document.getElementById('intro-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startQuizBtn = document.getElementById('start-quiz-btn');
const userNameInput = document.getElementById('user-name');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const nextQuestionBtn = document.getElementById('next-question-btn');
const questionCountSpan = document.getElementById('question-count');

// Елементи для відображення результатів
const resultH2 = document.querySelector('#result-screen h2'); 
const resultNameSpan = document.getElementById('result-name');
const correctAnswersCountSpan = document.getElementById('correct-answers-count');
const progressBarFill = document.getElementById('progress-bar-fill');
const progressPercentageSpan = document.getElementById('progress-percentage');
const safetyLevelTitle = document.getElementById('safety-level-title');
const safetyLevelDescription = document.getElementById('safety-level-description');
const adviceList = document.getElementById('advice-list');
const restartQuizBtn = document.getElementById('restart-quiz-btn');

// Елементи для документації (НОВІ)
const showDocBtn = document.getElementById('show-doc-btn'); 
const docModal = document.getElementById('documentation-modal'); 
const closeBtn = document.querySelector('.close-btn'); 
const docContent = document.getElementById('doc-content'); 
const printDocBtn = document.querySelector('.print-doc-btn');


// 3. ФУНКЦІЯ ДОПОМОГИ: Рандомізація масиву
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 4. ФУНКЦІЯ ПЕРЕХОДУ МІЖ ЕКРАНАМИ
function switchScreen(activeScreenId) {
    introScreen.classList.remove('active');
    quizScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    document.getElementById(activeScreenId).classList.add('active');
}

// 5. ФУНКЦІЯ СТАРТУ КВІЗУ
startQuizBtn.addEventListener('click', () => {
    userName = userNameInput.value.trim();

    if (userName.length < 2) {
        alert("Будь ласка, введіть своє ім'я!");
        return;
    }

    currentQuestionIndex = 0;
    score = 0;
    selectedAnswers = [];
    
    switchScreen('quiz-screen');
    loadQuestion();
});

// 6. ФУНКЦІЯ ЗАВАНТАЖЕННЯ ПИТАННЯ
function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    
    const answersToDisplay = [...currentQuestion.answers]; 
    shuffleArray(answersToDisplay); 

    questionCountSpan.textContent = `Питання ${currentQuestionIndex + 1} з ${questions.length}`;
    
    if (currentQuestion.multi) {
        const count = currentQuestion.correctAnswer.length;
        // Використовуємо strong для виділення
        questionText.innerHTML = `${currentQuestion.question} <br> <strong>(Виберіть ${count} правильні відповіді)</strong>`;
    } else {
        questionText.textContent = currentQuestion.question;
    }
    
    answersContainer.innerHTML = ''; 
    nextQuestionBtn.classList.add('hidden'); 
    nextQuestionBtn.disabled = true;
    selectedAnswers = []; 

    let answerKey = 'A'; 
    
    answersToDisplay.forEach(answerText => {
        const button = document.createElement('button');
        button.classList.add('answer-btn');
        
        // Додаємо клас multi-select для активації стилів чекбоксів
        if (currentQuestion.multi) {
            button.classList.add('multi-select');
        }

        button.textContent = `${answerKey}. ${answerText}`; 
        button.dataset.answer = answerText; 
        button.addEventListener('click', handleAnswerClick);
        answersContainer.appendChild(button);

        answerKey = String.fromCharCode(answerKey.charCodeAt(0) + 1);
    });
}

// 7. ФУНКЦІЯ ОБРОБКИ КЛІКУ НА ВІДПОВІДЬ
function handleAnswerClick(event) {
    const clickedButton = event.target;
    const answerText = clickedButton.dataset.answer;
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.multi) {
        // Логіка для multi-select
        clickedButton.classList.toggle('selected');
        
        if (clickedButton.classList.contains('selected')) {
            selectedAnswers.push(answerText);
        } else {
            selectedAnswers = selectedAnswers.filter(a => a !== answerText);
        }

        nextQuestionBtn.disabled = selectedAnswers.length === 0;
        nextQuestionBtn.classList.remove('hidden');

    } else {
        // Логіка для single-select 

        if (document.querySelector('.answer-btn.selected')) return; 

        selectedAnswers.push(answerText);

        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.classList.remove('selected');
            btn.disabled = true; 
        });
        clickedButton.classList.add('selected');

        const isCorrect = (selectedAnswers[0] === currentQuestion.correctAnswer[0]); 
        
        if (isCorrect) {
            clickedButton.style.backgroundColor = '#2ecc71'; 
            score++; 
        } else {
            clickedButton.style.backgroundColor = '#e74c3c'; 
            // Підсвічуємо правильну
            document.querySelector(`[data-answer="${currentQuestion.correctAnswer[0]}"]`).style.backgroundColor = '#2ecc71';
        }
        
        nextQuestionBtn.disabled = false;
        nextQuestionBtn.classList.remove('hidden');
    }
}

// 8. ФУНКЦІЯ ПЕРЕХОДУ ДО НАСТУПНОГО ПИТАННЯ
nextQuestionBtn.addEventListener('click', () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswers.length === 0) {
        alert("Будь ласка, виберіть принаймні одну відповідь.");
        return;
    }
    
    if (currentQuestion.multi) {
        
        document.querySelectorAll('.answer-btn').forEach(btn => btn.disabled = true);

        const correctAnswers = currentQuestion.correctAnswer;
        const selected = selectedAnswers.slice().sort();
        const correct = correctAnswers.slice().sort();
        
        const isCorrect = (selected.length === correct.length && selected.every((val, index) => val === correct[index]));

        // Візуальний фідбек для multi-select:
        document.querySelectorAll('.answer-btn').forEach(btn => {
            const isCorrectAnswer = correctAnswers.includes(btn.dataset.answer);
            const isSelected = selectedAnswers.includes(btn.dataset.answer);

            if (isCorrectAnswer) {
                btn.style.backgroundColor = '#2ecc71';
            } else if (isSelected && !isCorrectAnswer) {
                btn.style.backgroundColor = '#e74c3c'; 
            }
        });

        if (isCorrect) {
            score++;
        }
        
        setTimeout(() => {
            currentQuestionIndex++;
            loadQuestion();
        }, 1200); 
        
    } else {
        currentQuestionIndex++;
        loadQuestion();
    }
});


// 9. ФУНКЦІЯ ВІДОБРАЖЕННЯ РЕЗУЛЬТАТІВ (Оновлено для глітча)
function showResults() {
    switchScreen('result-screen');
    
    const totalQuestions = questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    // --- ОНОВЛЕННЯ ДЛЯ ГЛІТЧА ---
    resultH2.setAttribute('data-name-text', userName); // Встановлюємо ім'я для CSS-анімації
    resultNameSpan.textContent = userName;
    // ----------------------------
    
    correctAnswersCountSpan.textContent = score;

    progressBarFill.style.width = `${percentage}%`;
    progressPercentageSpan.textContent = `${percentage}%`;
    
    progressBarFill.style.backgroundColor = (percentage >= 80) ? '#2ecc71' : (percentage >= 50 ? '#f39c12' : '#e74c3c');
    
    let levelTitle, levelDesc, adviceSections;

    // Генерація детальних порад для документа (скорочено, оскільки повний текст у іншій функції)
    function generateDetailedAdvice(level) {
        const advice = {
            "Високий": {
                "Загальний висновок": "Ви демонструєте відмінні знання та навички безпечної поведінки. Ваші дії мінімізують більшість поширених ризиків. Продовжуйте вдосконалюватись!",
                "1. Паролі та 2FA": ["**Використовуйте менеджер паролів** та програми-автентифікатори (не SMS)."],
                "2. Фішинг": ["Перед переходом за посиланням **завжди** перевіряйте реальну URL-адресу."],
                "3. Оновлення": ["Налаштуйте **автоматичне оновлення** ОС та всіх програм."]
            },
            "Середній": {
                "Загальний висновок": "Ваші основи хороші, але є прогалини, які можуть бути використані зловмисниками. Необхідно посилити захист у критичних зонах.",
                "1. Паролі та 2FA": ["**Не використовуйте один і той самий пароль**. Негайно **увімкніть 2FA** для пошти та фінансових сервісів."],
                "2. Фішинг": ["Будьте уважні до листів, які вимагають **термінових дій**."],
                "3. Оновлення": ["**Не ігноруйте сповіщення** про оновлення безпеки."]
            },
            "Низький": {
                "Загальний висновок": "Ваші знання з кібербезпеки вимагають термінового посилення. Ваш пристрій і особисті дані знаходяться у зоні високого ризику.",
                "1. Паролі та 2FA": ["**Перший крок:** Змініть усі слабкі паролі на складні. **Критично важливо:** Увімкніть 2FA для основної пошти."],
                "2. Фішинг": ["**Завжди припускайте, що лист є шахрайством.** Не натискайте на посилання."],
                "3. Оновлення": ["Встановіть **надійне антивірусне ПЗ** і проведіть повне сканування."]
            }
        };

    return advice[level];
    }


    if (percentage >= 80) {
        levelTitle = "Експерт з кібербезпеки! 🛡️";
        levelDesc = "Ваші знання на **високому рівні**. Ви чудово розумієте основи безпечної поведінки в інтернеті. Ви заслуговуєте на повагу в кіберпросторі.";
        adviceSections = generateDetailedAdvice("Високий");
    } else if (percentage >= 50) {
        levelTitle = "Середній рівень безпеки. 🤔";
        levelDesc = "Ви знаєте базові правила, але є прогалини. Ви знаходитесь у зоні ризику, якщо не посилите свій захист у ключових моментах.";
        adviceSections = generateDetailedAdvice("Середній");
    } else {
        levelTitle = "Низький рівень безпеки! Потрібно попрацювати! 🚨";
        levelDesc = "Ваші знання з кібербезпеки досить **низькі**. Ви знаходитесь у зоні підвищеного ризику зламу та втрати даних.";
        adviceSections = generateDetailedAdvice("Низький");
    }

    safetyLevelTitle.textContent = levelTitle;
    safetyLevelDescription.textContent = levelDesc;
    
    // Виведення ДЕТАЛЬНИХ Порад
    adviceList.innerHTML = '';
    
    for (const sectionTitle in adviceSections) {
        const h4 = document.createElement('h4');
        h4.textContent = sectionTitle;
        adviceList.appendChild(h4);

        if (Array.isArray(adviceSections[sectionTitle])) {
            const ul = document.createElement('ul');
            adviceSections[sectionTitle].forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = item; 
                ul.appendChild(li);
            });
            adviceList.appendChild(ul);
        } else {
            const p = document.createElement('p');
            p.textContent = adviceSections[sectionTitle];
            adviceList.appendChild(p);
        }
    }
}

// 10. ФУНКЦІЯ ПОВТОРНОГО ПРОХОДЖЕННЯ
restartQuizBtn.addEventListener('click', () => {
    switchScreen('intro-screen');
    userNameInput.value = '';
});

// 11. ФУНКЦІЯ ГЕНЕРАЦІЇ ПОВНОЇ ДОКУМЕНТАЦІЇ (ОГРОМНИЙ ТЕКСТ)
function generateFullDocumentation() {
    return `
        <h4>1. Управління Паролями та Автентифікація (Ваш Фундамент)</h4>
        <ul>
            <li>**Складність Пароля:** Пароль повинен містити мінімум **12 символів**, включаючи великі та малі літери, цифри та спеціальні символи ($, #, %, &). Уникайте використання особистої інформації, наприклад імен чи дат народження.</li>
            <li>**Унікальність:** Ніколи не використовуйте один і той самий пароль для двох різних сервісів. Якщо зламають один сервіс, зловмисники отримають доступ до всіх ваших обліковок.</li>
            <li>**Менеджери Паролів:** Використовуйте надійні менеджери паролів (наприклад, **Bitwarden, 1Password, LastPass**) для безпечного зберігання та генерації унікальних, надскладних паролів. Зберігайте майстер-пароль від менеджера в безпечному місці (наприклад, на папері).</li>
            <li>**Двофакторна Автентифікація (2FA/MFA):** Увімкніть 2FA на всіх важливих обліковках (пошта, банк, соцмережі). Використовуйте **програми-автентифікатори** (Google/Microsoft Authenticator, Authy) замість SMS, оскільки SMS є менш захищеним.</li>
            <li>**Регулярна Зміна?** Сучасні рекомендації не вимагають частої зміни складних, унікальних паролів, якщо тільки не було витоку даних.</li>
        </ul>

        <h4>2. Захист від Фішингу та Соціальної Інженерії (Людський Фактор)</h4>
        <ul>
            <li>**Перевірка Джерела:** Якщо ви отримали підозрілий лист (від банку, податкової, тощо), **ніколи не натискайте на посилання**. Завжди переходьте на сайт організації, вводячи адресу вручну або використовуючи офіційний додаток.</li>
            <li>**Аналіз Посилань:** Перш ніж натиснути, наведіть курсор миші на посилання (на ПК) або утримуйте палець (на мобільному), щоб побачити реальну адресу. Шукайте помилки в назві (**typosquatting**), наприклад, \`g00gle.com\` замість \`google.com\`.</li>
            <li>**Ознаки Шахрайства:** Будьте уважні до листів, що містять: **емоційний тиск** ("Ваш рахунок буде заблоковано через 2 години!"), **прохання про термінову оплату** або **нереальні обіцянки** ("Ви виграли $1,000,000!"). Легітимні організації не використовують такі методи.</li>
            <li>**Телефонні Шахраї (Вішинг):** Ніколи не повідомляйте паролі, коди 2FA чи повні номери карток по телефону, навіть якщо особа представляється співробітником банку. Покладіть слухавку і **самостійно** зателефонуйте в організацію за офіційним номером.</li>
        </ul>

        <h4>3. Програмне Забезпечення та Управління Пристроями</h4>
        <ul>
            <li>**Регулярне Оновлення:** Регулярно оновлюйте операційну систему (ОС), браузер та всі встановлені програми. Оновлення містять **патчі** (виправлення), які закривають уразливості безпеки, знайдені хакерами. **Відкладати оновлення – це небезпечно.**</li>
            <li>**Антивірусний Захист:** Використовуйте надійний антивірус або вбудовані засоби захисту ОС (Windows Defender, XProtect на macOS). Регулярно запускайте повне сканування.</li>
            <li>**Неофіційне ПЗ:** Уникайте завантаження програм та файлів із піратських сайтів, торрентів або невідомих джерел. Вони майже завжди містять шкідливе ПЗ (**Malware, Adware, Spyware**).</li>
            <li>**Обмежені Права:** На вашому комп'ютері використовуйте обліковий запис із **обмеженими правами (стандартний користувач)** для повсякденної роботи, а не обліковий запис адміністратора. Це обмежує шкоду від вірусів, які можуть бути встановлені без вашого дозволу.</li>
            <li>**Шифрування Пристроїв:** Переконайтеся, що жорсткий диск вашого комп'ютера та пам'ять смартфона зашифровані (BitLocker на Windows, FileVault на macOS, шифрування Android/iOS). Це захистить ваші дані, якщо пристрій буде вкрадено.</li>
        </ul>
        
        <h4>4. Мережева Безпека та Wi-Fi</h4>
        <ul>
            <li>**Використання VPN:** У громадських місцях (кафе, аеропорти, готелі) **ніколи не вводьте конфіденційні дані** (паролі, картки) у публічних мережах. Завжди використовуйте **VPN (Віртуальна Приватна Мережа)** для шифрування всього трафіку.</li>
            <li>**Домашній Wi-Fi:** Використовуйте надійне шифрування (мінімум **WPA2-PSK, а краще WPA3**) для домашньої мережі. Змініть стандартний пароль роутера на унікальний і складний.</li>
            <li>**HTTPS:** Завжди перевіряйте наявність **символу замка** та префікса **https://** в адресному рядку браузера. Це означає, що ваше з'єднання із сайтом зашифроване.</li>
        </ul>
        
        <h4>5. Резервне Копіювання (План "Б" у разі катастрофи)</h4>
        <ul>
            <li>**Правило 3-2-1:** Це золоте правило: Зберігайте мінімум **3** копії важливих даних, на **2** різних типах носіїв (наприклад, внутрішній диск і зовнішній HDD), і **1** копію зберігайте поза домом (у хмарі або в іншому місці).</li>
            <li>**Захист від Ransomware:** Резервні копії — це єдиний надійний захист від програм-вимагачів (Ransomware), які шифрують ваші дані. Якщо дані зашифровано, ви можете просто відновити їх із копії, не сплачуючи викуп.</li>
        </ul>
    `;
}

// 12. ЛОГІКА МОДАЛЬНОГО ВІКНА
showDocBtn.addEventListener('click', () => {
    // Вставляємо згенерований текст
    docContent.innerHTML = generateFullDocumentation();
    docModal.style.display = "block";
});

// Кнопка закриття (X)
closeBtn.addEventListener('click', () => {
    docModal.style.display = "none";
});

// Закриття по кліку за межами вікна
window.addEventListener('click', (event) => {
    if (event.target === docModal) {
        docModal.style.display = "none";
    }
});

// Кнопка друку документації
printDocBtn.addEventListener('click', () => {
    window.print();
});


// Ініціалізація
document.addEventListener('DOMContentLoaded', () => {
    switchScreen('intro-screen');
});