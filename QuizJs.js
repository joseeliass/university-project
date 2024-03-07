const questions = [
    {
        question: "<title> is an HTML element that should be added in:",
            answers:[
                {text: "<p>" , correct : false},
                {text: "<head>" , correct : true},
                {text: "<body>" , correct : false},
                {text: "<header>" , correct : false}
            ]
    },
    {
        question: "What does HTML stands for?",
            answers:
            [
                {text: "Hyper Tag Markup Language", correct : false},
                {text: "Hyperlinks Text Markup Language" , correct : false},
                {text: "HTML Text Markup Language" , correct : false},
                {text: "HyperText Markup Language" , correct : true}
            ]
    },
    {
        question: "What symbol indicates a tag?",
            answers:
            [
                {text: "<>", correct : true},
                {text: "{}" , correct : false},
                {text: "," , correct : false},
                {text: "!" , correct : false}
            ]
    },
    {
        question: "What is the correct tag for a line break?",
            answers:
            [
                {text: "brk", correct : false},
                {text: "line" , correct : false},
                {text: "bk" , correct : false},
                {text: "br" , correct : true}
            ]
    },
    {
        question: "A CSS file can be applied to only one HTMl file.",
            answers:
            [
                {text: "True", correct : false},
                {text: "False" , correct : true},
                {text: "Sometimes" , correct : false},
                {text: "Maybe", correct: false}
            ]
    },
    {
        question: "What does CSS stand for?",
            answers:
            [
                {text: "Computing Style Sheet", correct : false},
                {text: "Creative Style System" , correct : false},
                {text: "Cascading Style Shet" , correct : true},
                {text: "Creative Style Sheet", correct: false}
            ]
    },
    {
        question: "Where should a CSS file be referenced in a HTML file",
            answers:
            [
                {text: "Before any HTML code", correct : false},
                {text: "After all HTML code" , correct : false},
                {text: "Inside the head section" , correct : true},
                {text: "Inside the body section", correct: false}
            ]
    },
    {
        question: "What is the correct format for aligning written content to the center of the page in CSS?",
            answers:
            [
                {text: "Text-align:center;", correct : true},
                {text: "Font-align:center;" , correct : false},
                {text: "Text:align-center;" , correct : false},
                {text: "Font:align-center;", correct: false}
            ]
    },
    {
        question: "What is the correct format for changing the background colour of a div in CSS?",
            answers:
            [
                {text: "Bg-color:red;", correct : false},
                {text: "Background:red;" , correct : false},
                {text: "Background-colour:red;" , correct : false},
                {text: "Background-color:red;", correct: true}
            ]
    },
    {
        question: "What is the correct format for a div?",
            answers:
            [
                {text: "Div-id = example", correct : false},
                {text: "Div id = \"example\"" , correct : true},
                {text: "Div = \"example\"" , correct : false},
                {text: "Div.example", correct: false}
            ]
    },
    {
        question: "JavaScript is an _______ language.",
            answers:
            [
                {text: "Object-Oriented", correct : true},
                {text: "Object-Based" , correct : false},
                {text: "Procedural" , correct : false},
                {text: "None of the above", correct: false}
            ]
    },
    {
        question: "Which of the following keywords is used to define a variable in JavaScript?",
            answers:
            [
                {text: "var", correct : false},
                {text: "let" , correct : false},
                {text: "Both A and B" , correct : true},
                {text: "None of the above", correct: false}
            ]
    },
    {
        question: "Which of the following methods is used to access HTML elements using JS?",
            answers:
            [
                {text: "getElementbyId()", correct : false},
                {text: "getElementsByClassName()" , correct : false},
                {text: "Both A and B" , correct : true},
                {text: "Non of the above", correct: false}
            ]
    },
    {
        question: "Which of the following mehods can be used to display data in some form using JS?",
            answers:
            [
                {text: "document.write()", correct : false},
                {text: "console.log()" , correct : false},
                {text: "window.alert()" , correct : false},
                {text: "All of the above", correct: true}
            ]
    },
    {
        question: "How can a datatype be declared to be a constant type?",
            answers:
            [
                {text: "const", correct : true},
                {text: "var" , correct : false},
                {text: "let" , correct : false},
                {text: "constant", correct: false}
            ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz()
{
    currentQuestionIndex = 0;
    score = 0;
    nextButton.textContent = "Next";
    showQuestion();
}

function showQuestion()
{
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.textContent = questionNo + ". " + currentQuestion.question ;

    currentQuestion.answers.forEach (answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) 
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    });
}

function resetState()
{
    nextButton.style.display = "none";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e)
{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if (isCorrect) 
    {
        selectedBtn.classList.add("correct");
        score++;
    }
    else
    {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>
        {
            if (button.dataset.correct === "true") 
            {
                button.classList.add("correct");
            } 
            button.disabled = true;
        });
        nextButton.style.display = "block";
}

nextButton.addEventListener("click", () =>
{
    if (currentQuestionIndex < questions.length) 
    {
        currentQuestionIndex++;
        if (currentQuestionIndex< questions.length) 
        {
            showQuestion();
        }
        else
        {
            showScore();
        }
    }
    else{
        startQuiz();
    }
});

function showScore()
{
    resetState();
    questionElement.innerHTML = `You scored ${parseInt((score*100/15))}/100 ! 
                                You answered ${score} out of ${questions.length} correctly.`;
    nextButton.innerHTML = "PLAY AGAIN";
    nextButton.style.display = "block";
}

startQuiz();