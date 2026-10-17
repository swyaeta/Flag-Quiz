
let questions = document.querySelectorAll(".question-card");
let buttons = document.querySelectorAll(".question-card button:not(.nextbtn)");
let nextButtons = document.querySelectorAll(".nextbtn");
let backButtons = document.querySelectorAll(".backbtn");

let currentQuestion = 0;
let answers = Array(questions.length).fill(null);

let redScore = 0;
let beigeScore = 0;
let greenScore = 0;


// SELECT AN ANSWER
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        let question = button.parentElement;
        let allButtons = question.querySelectorAll("button");

        allButtons.forEach(function(btn) {
            btn.style.backgroundColor = "#f7f2f3";
            btn.classList.remove("selected");
        });

        button.style.backgroundColor = "#965963";
        button.classList.add("selected");

        answers[currentQuestion] = button.value;
    });
});


// NEXT BUTTON
nextButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        let selectedAnswer =
            questions[currentQuestion].querySelector("button.selected");

        if (!selectedAnswer) {
            alert("Please select an answer first! 💗");
            return;
        }

        questions[currentQuestion].classList.remove("active");
        currentQuestion++;

        if (currentQuestion < questions.length) {
            questions[currentQuestion].classList.add("active");
        } else {
            showResult();
        }
    });
});


// BACK BUTTON
backButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (currentQuestion > 0) {
            questions[currentQuestion].classList.remove("active");
            currentQuestion--;
            questions[currentQuestion].classList.add("active");
        }
    });
});


// SHOW FINAL RESULT
function showResult() {
    redScore = answers.filter(function(answer) {
        return answer === "red";
    }).length;

    beigeScore = answers.filter(function(answer) {
        return answer === "beige";
    }).length;

    greenScore = answers.filter(function(answer) {
        return answer === "green";
    }).length;

    let resultTitle = document.getElementById("restitle");
    let resultDescription = document.getElementById("resdescription");

    document.querySelector(".quizbox").style.display = "none";

    let resultCard = document.querySelector(".rescard");
    resultCard.style.display = "block";

    if (greenScore >= redScore && greenScore >= beigeScore) {
        resultTitle.textContent = " You're such a GREEN FLAG!💚";
        resultDescription.textContent =
            "Keep spreading those healthy vibes!";
        resultCard.style.borderColor = "#3b9b62";

    } else if (redScore >= beigeScore && redScore >= greenScore) {
        resultTitle.textContent = " You're a RED FLAG!🚩 :(";
        resultDescription.textContent =
            "Looks like there's room to grow! .";
        resultCard.style.borderColor = "#c94c4c";

    } else {
        resultTitle.textContent = " You're a BEIGE FLAG🏳️";
        resultDescription.textContent =
            "You're somewhere in the middle! ";
        resultCard.style.borderColor = "#b69b65";
    }
}

