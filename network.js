const questions = [
    { 
        question: "What does IP stand for?", 
        options: ["Internet Process", "Internet Protocol", "Internal Protocol", "Interface Program"],
        answer: "Internet Protocol" 
    },
    { 
        question: "What is the primary purpose of a router?", 
        options: ["To connect networks", "To store data", "To monitor traffic", "To protect against viruses"],
        answer: "To connect networks" 
    },
    { 
        question: "Which layer of the OSI model deals with IP addresses?", 
        options: ["Physical", "Data Link", "Network", "Transport"],
        answer: "Network" 
    },
    { 
        question: "What protocol is used to transfer web pages?", 
        options: ["FTP", "HTTP", "SMTP", "TCP"],
        answer: "HTTP" 
    },
    { 
        question: "What is a MAC address used for?", 
        options: ["Identifying devices on a network", "Storing web pages", "Encrypting messages", "Connecting to a VPN"],
        answer: "Identifying devices on a network" 
    },
    { 
        question: "Which device assigns IP addresses dynamically?", 
        options: ["Switch", "Router", "DHCP Server", "Firewall"],
        answer: "DHCP Server" 
    },
    { 
        question: "What does DNS do?", 
        options: ["Translates domain names to IP addresses", "Encrypts network traffic", "Manages firewall settings", "Routes packets between networks"],
        answer: "Translates domain names to IP addresses" 
    },
    { 
        question: "Which protocol is used for sending emails?", 
        options: ["FTP", "SMTP", "POP3", "HTTP"],
        answer: "SMTP" 
    },
    { 
        question: "What is the default subnet mask for a Class C network?", 
        options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
        answer: "255.255.255.0" 
    },
    { 
        question: "What is the function of a switch in networking?", 
        options: ["To filter and forward network traffic", "To translate domain names", "To connect to a VPN", "To store data permanently"],
        answer: "To filter and forward network traffic" 
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
