const questions = [
    { 
        question: "Who is the creator of the C programming language?", 
        options: ["James Gosling", "Dennis Ritchie", "Bjarne Stroustrup", "Guido van Rossum"],
        answer: "Dennis Ritchie" 
    },
    { 
        question: "Which of the following is a correct variable declaration in C?", 
        options: ["int 1var;", "int var_name;", "float int;", "char str[ ] = 'Hello';"],
        answer: "int var_name;" 
    },
    { 
        question: "What is the correct syntax to print in C?", 
        options: ["System.out.println()", "print()", "printf()", "cout<<"],
        answer: "printf()" 
    },
    { 
        question: "Which format specifier is used for integers in C?", 
        options: ["%d", "%f", "%c", "%s"],
        answer: "%d" 
    },
    { 
        question: "Which keyword is used to define a constant in C?", 
        options: ["static", "define", "const", "final"],
        answer: "const" 
    },
    { 
        question: "What is the size of an int variable (in bytes) in C (typically)?", 
        options: ["2", "4", "8", "16"],
        answer: "4" 
    },
    { 
        question: "Which data type is used to store a single character in C?", 
        options: ["string", "char", "int", "float"],
        answer: "char" 
    },
    { 
        question: "Which of the following loops will execute at least once?", 
        options: ["for", "while", "do-while", "if"],
        answer: "do-while" 
    },
    { 
        question: "Which of the following is NOT a valid C storage class?", 
        options: ["auto", "static", "extern", "private"],
        answer: "private" 
    },
    { 
        question: "What will be the output of `printf('%d', 5+2);`?", 
        options: ["5", "2", "7", "Error"],
        answer: "7" 
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");

function loadQuestion() {
    questionContainer.innerHTML = ""; // Clear previous question
    const currentQuestion = questions[currentQuestionIndex];
    
    let questionElement = document.createElement("p");
    questionElement.textContent = currentQuestion.question;
    questionContainer.appendChild(questionElement);

    currentQuestion.options.forEach(option => {
        let button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.onclick = () => checkAnswer(option);
        questionContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.style.display = "none";
    nextButton.style.display = "none";
    
    resultContainer.innerHTML = `<p>You scored <strong>${score}</strong> out of <strong>${questions.length}</strong>.</p>`;
    
    if (score > 5) {
        resultContainer.innerHTML += "<p>🎉 Congratulations! You can enroll in the course.</p>";
    } else {
        resultContainer.innerHTML += "<p>❌ You did not pass. Try again!</p>";

        let tryAgainButton = document.createElement("button");
        tryAgainButton.textContent = "Try Again";
        tryAgainButton.classList.add("option-btn");
        tryAgainButton.onclick = resetQuiz;
        resultContainer.appendChild(tryAgainButton);
    }

    resultContainer.style.display = "block";
}

// Function to restart the quiz
function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.style.display = "none";
    questionContainer.style.display = "block";
    nextButton.style.display = "block";
    loadQuestion();
}

// Start the quiz
loadQuestion();
