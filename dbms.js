const questions = [
    { 
        question: "What does DBMS stand for?", 
        options: ["Database Management System", "Data Backup and Management Software", "Digital Backup Management System", "Database Monitoring Service"],
        answer: "Database Management System" 
    },
    { 
        question: "Which of the following is NOT a type of database model?", 
        options: ["Hierarchical", "Relational", "Distributed", "Compiler-based"],
        answer: "Compiler-based" 
    },
    { 
        question: "Which language is used to interact with databases?", 
        options: ["C++", "Python", "SQL", "HTML"],
        answer: "SQL" 
    },
    { 
        question: "What is a primary key?", 
        options: ["A unique identifier for each record", "A foreign key reference", "An encryption key", "A composite key"],
        answer: "A unique identifier for each record" 
    },
    { 
        question: "Which SQL command is used to retrieve data from a database?", 
        options: ["SELECT", "UPDATE", "DELETE", "INSERT"],
        answer: "SELECT" 
    },
    { 
        question: "What is normalization in DBMS?", 
        options: ["Breaking a database into smaller tables to reduce redundancy", "Combining multiple tables", "Backing up a database", "Deleting duplicate data"],
        answer: "Breaking a database into smaller tables to reduce redundancy" 
    },
    { 
        question: "Which of these is NOT an SQL constraint?", 
        options: ["PRIMARY KEY", "FOREIGN KEY", "ORDER BY", "CHECK"],
        answer: "ORDER BY" 
    },
    { 
        question: "What does ACID stand for in databases?", 
        options: ["Atomicity, Consistency, Isolation, Durability", "Automated, Centralized, Indexed, Distributed", "All Columns Indexed Data", "Advanced Consistency and Integrity Design"],
        answer: "Atomicity, Consistency, Isolation, Durability" 
    },
    { 
        question: "What is a foreign key?", 
        options: ["A unique key in a single table", "A key that references a primary key in another table", "A key used for encryption", "A randomly generated key"],
        answer: "A key that references a primary key in another table" 
    },
    { 
        question: "Which SQL statement is used to delete records from a table?", 
        options: ["DELETE", "REMOVE", "DROP", "CLEAR"],
        answer: "DELETE" 
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
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

    resultContainer.innerHTML = `<h2>Your Score: ${score} / ${questions.length}</h2>`;
    
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
    loadQuestion();
}

// Start the quiz
loadQuestion();
