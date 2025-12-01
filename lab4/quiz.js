
const quizQuestions = [
    {
        question: "What is 12 + 8?",
        answer: "20"
    },
    {
        question: "What is 15 - 7?",
        answer: "8"
    },
    {
        question: "What is 6 × 4?",
        answer: "24"
    },
    {
        question: "What is 36 ÷ 6?",
        answer: "6"
    },
    {
        question: "What is 9 + 10?",
        answer: "19"
    }
];


function runQuiz() {
    let score = 0; 

    for (let i = 0; i < quizQuestions.length; i++) {
        const userAnswer = prompt(quizQuestions[i].question);

        
        if (userAnswer === null) {
            alert("Quiz cancelled!");
            return;
        }

        
        const cleanedAnswer = userAnswer.toLowerCase().trim();

        // Check answer
        if (cleanedAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct! 🎉");
        } else {
            alert("Wrong ❌\nCorrect answer: " + quizQuestions[i].answer);
        }
    }

    // Final score
    alert("Quiz complete!\nYour score: " + score + "/" + quizQuestions.length);
}

// Run quiz
runQuiz();
