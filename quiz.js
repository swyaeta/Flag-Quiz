
let buttons = document.querySelectorAll(".question-card button:not(.nextbtn)");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        let question = button.parentElement;
        let allButtons = question.querySelectorAll("button:not(.nextbtn)");

        allButtons.forEach(function(btn) {
            btn.style.backgroundColor = "#f7f2f3";
            btn.classList.remove("selected");
        });

        button.style.backgroundColor = "#965963";
        button.classList.add("selected");
    });
});


let redScore = 0;
let beigeScore = 0;
let greenScore = 0;


let questions = document.querySelectorAll(".question-card");
let nextButtons = document.querySelectorAll(".nextbtn");

let currentQuestion = 0;

nextButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        let selectedAnswer = questions[currentQuestion].querySelector("button.selected");

        if (!selectedAnswer) {
            alert("Please select an answer first! 💗");
            return;
        }

        questions[currentQuestion].classList.remove("active");
        currentQuestion++;
        if (currentQuestion < questions.length) {
            questions[currentQuestion].classList.add("active");
        }
    });
});
