let questions = [
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "string", "define"],
    answer: "var"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Apple"],
    answer: "Netscape"
  },
  {
    question: "Which symbol is used for comments in JavaScript (single line)?",
    options: ["//", "##", "<!-- -->", "**"],
    answer: "//"
  },
  {
    question: "Which method is used to print something in the browser console?",
    options: ["console.print()", "print()", "console.log()", "log.console()"],
    answer: "console.log()"
  },
  {
    question: "Which keyword is used to define a constant in JavaScript?",
    options: ["let", "const", "var", "constant"],
    answer: "const"
  },
  {
    question: "Which method converts JSON data to a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
    answer: "JSON.parse()"
  },
  {
    question: "Which operator is used to compare both value and type?",
    options: ["==", "=", "===", "!="],
    answer: "==="
  },
  {
    question: "Which function is used to display an alert box?",
    options: ["alert()", "msg()", "prompt()", "display()"],
    answer: "alert()"
  },
  {
    question: "Which loop is guaranteed to run at least once?",
    options: ["for loop", "while loop", "do...while loop", "foreach loop"],
    answer: "do...while loop"
  },
  {
    question: "Which keyword is used to create a function in JavaScript?",
    options: ["func", "function", "define", "method"],
    answer: "function"
  }
];


let currentQuestions = 0;
let score = 0;

let questionsElement = document.getElementById("question");
let optionsElement = document.getElementById("options");
let resultElement = document.getElementById("result");
let nextButton = document.getElementById("next-btn")


function loadQuestion() {
  let q = questions[currentQuestions];

  questionsElement.innerText = q.question;
  optionsElement.innerHTML = "";
  resultElement.textContent = "";

  q.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;

    button.onclick = () => selectAnswer(button, option)

    optionsElement.appendChild(button);
  });
}


function handleNextQuestion() {
    currentQuestions++;
  if (currentQuestions < questions.length) {
      loadQuestion()
    }else{
        questionsElement.innerText = "Quiz Finshied";
        optionsElement.innerText = ""
        nextButton.style.disabled = "none";
        resultElement.innerText = "Your Score is " + score + "/" + questions.length;
        
        
    }

}


function selectAnswer(button , selectedOption){
    let correctAnswer = questions[currentQuestions].answer;
    
    const allButton = optionsElement.querySelectorAll("button")

    allButton.forEach(btn =>{
        btn.disabled = true;
        
        if(btn.textContent === correctAnswer){
            btn.classList.add("correct")
        }
    });
    
    
    if(selectedOption === correctAnswer){
        score++
    }else{
        button.classList.add("wrong")
        
    }
    
}
loadQuestion()
