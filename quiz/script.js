const questions = [
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5"],
        answer: "4"  
    },
    {
        question: "What language makes websites interactive?",
        choices: ["HTML", "CSS", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "Which keyword creates a variable that can change?",
        choices: ["const", "let", "function"],
        answer: "let"
    },
    {
        question: "Which method finds an HTML element by its id?",
        choices: ["queryArray()", "getElementById()", "createElement()"],
        answer: "getElementById()"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionDisplay = document.getElementById("question");
const choicesDisplay = document.getElementById("choices");
const scoreDisplay = document.getElementById("score");

function showQuestion(){
    if(currentQuestionIndex === questions.length){
        questionDisplay.textContent = "Quiz finished";
        choicesDisplay.innerHTML = "";
        scoreDisplay.textContent = "Your score: " + score + "/" + questions.length;

        const restartBtn = document.createElement("button");
        restartBtn.textContent = "Restart Quiz";

        restartBtn.addEventListener("click", function(){
            currentQuestionIndex = 0;
            score = 0;
            scoreDisplay.textContent = "Score: 0";

            showQuestion();
        })

        choicesDisplay.appendChild(restartBtn);
        return;
    }
    const currentQuestion = questions[currentQuestionIndex];

    questionDisplay.textContent = currentQuestion.question;
    choicesDisplay.innerHTML = "";

    currentQuestion.choices.forEach(function(choice){
        const button = document.createElement("button");
        button.textContent = choice;


        button.addEventListener("click", function(){
            if(choice === currentQuestion.answer){
                score = score +1
                scoreDisplay.textContent = "Score: " + score;
            }
            currentQuestionIndex = currentQuestionIndex + 1
            showQuestion();
        });
        choicesDisplay.appendChild(button);
    });
};
showQuestion();






//Questions 
//Q1: since all the object use the same property name question choicess...
//how we know which one we access when questions.question?
//A: index access questions[index].property
//Q2L why no comma here A: seperate so optional