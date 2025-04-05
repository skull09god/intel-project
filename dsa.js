const questions = [
    { 
        question: "What does DSA stand for?", 
        options: ["Data Storage Algorithm", "Data Structure and Algorithms", "Dynamic System Architecture", "Digital Software Application"],
        answer: "Data Structure and Algorithms" 
    },
    { 
        question: "Which data structure follows the Last In, First Out (LIFO) principle?", 
        options: ["Queue", "Stack", "Linked List", "Array"],
        answer: "Stack" 
    },
    { 
        question: "Which sorting algorithm has the best average-case time complexity?", 
        options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
        answer: "Merge Sort" 
    },
    { 
        question: "What is the time complexity of binary search?", 
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        answer: "O(log n)" 
    },
    { 
        question: "Which of the following is a linear data structure?", 
        options: ["Graph", "Tree", "Stack", "Heap"],
        answer: "Stack" 
    },
    { 
        question: "Which data structure is used in recursion?", 
        options: ["Queue", "Stack", "Heap", "Graph"],
        answer: "Stack" 
    },
    { 
        question: "Which algorithm is used to find the shortest path in a graph?", 
        options: ["Depth First Search", "Breadth First Search", "Dijkstra’s Algorithm", "Kruskal’s Algorithm"],
        answer: "Dijkstra’s Algorithm" 
    },
    { 
        question: "What is the worst-case time complexity of Quick Sort?", 
        options: ["O(n log n)", "O(n^2)", "O(log n)", "O(n)"],
        answer: "O(n^2)" 
    },
    { 
        question: "Which data structure is best suited for implementing a priority queue?", 
        options: ["Stack", "Queue", "Heap", "Linked List"],
        answer: "Heap" 
    },
    { 
        question: "Which of the following is NOT a tree traversal method?", 
        options: ["Inorder", "Preorder", "Postorder", "Depthorder"],
        answer: "Depthorder" 
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
