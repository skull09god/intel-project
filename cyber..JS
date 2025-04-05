const questions = [
    { 
        question: "What does a firewall do?", 
        options: ["Monitors network traffic", "Blocks unauthorized access", "Creates viruses", "Deletes files"],
        answer: "Blocks unauthorized access" 
    },
    { 
        question: "What is phishing?", 
        options: ["A type of malware", "A cyber attack using deceptive emails", "A firewall technique", "A secure network protocol"],
        answer: "A cyber attack using deceptive emails" 
    },
    { 
        question: "What does HTTPS stand for?", 
        options: ["HyperText Transfer Protocol Secure", "High-Tech Protocol System", "Hyper Transfer Privacy Standard", "Home Transfer Protection Service"],
        answer: "HyperText Transfer Protocol Secure" 
    },
    { 
        question: "What is malware?", 
        options: ["A programming language", "Malicious software", "A secure protocol", "An authentication method"],
        answer: "Malicious software" 
    },
    { 
        question: "Which of the following is a strong password?", 
        options: ["123456", "password", "P@ssw0rd!123", "qwerty"],
        answer: "P@ssw0rd!123" 
    },
    { 
        question: "What is two-factor authentication (2FA)?", 
        options: ["A software update", "An extra layer of security", "A type of phishing", "A computer virus"],
        answer: "An extra layer of security" 
    },
    { 
        question: "What is social engineering in cybersecurity?", 
        options: ["A way to improve internet speed", "Manipulating people to disclose confidential info", "A firewall mechanism", "A type of encryption"],
        answer: "Manipulating people to disclose confidential info" 
    },
    { 
        question: "What is a VPN used for?", 
        options: ["Securing internet connections", "Slowing down network traffic", "Hacking websites", "Creating malware"],
        answer: "Securing internet connections" 
    },
    { 
        question: "Which is an example of ransomware?", 
        options: ["A password manager", "Malware that locks files and demands payment", "An encrypted email", "A type of firewall"],
        answer: "Malware that locks files and demands payment" 
    },
    { 
        question: "What is the purpose of an antivirus program?", 
        options: ["Detect and remove malicious software", "Speed up the internet", "Block emails", "Improve computer graphics"],
        answer: "Detect and remove malicious software" 
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
        resultContainer.innerHTML += "<p>🎉 Congratulations! You can enroll in the course. 🎓</p>";
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
