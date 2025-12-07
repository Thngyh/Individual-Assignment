const quizData = [
    { question: "Where was I born?", options: ["Kuala Lumpur","Johor Bahru","Penang","Malacca"], answer:1 },
    { question: "What is my favorite mobile phone?", options:["Samsung","Oppo","Apple","Huawei"], answer:2 },
    { question: "What is my hobby?", options:["Photography","Sleeping","Cooking","Singing"], answer:0 },
    { question: "Which university am I studying at?", options:["Southern University College","University of Malaya","Taylor's University","UTM"], answer:0 },
    { question: "What is my favorite music genre?", options:["Rock","City-Pop","Jazz","Classical"], answer:1 },
    { question: "Which framework do I like?", options:["React","Angular","Vue","Bootstrap"], answer:3 },
    { question: "Which of these do I love?", options:["Coding","Sleeping","Traveling","Painting"], answer:1 },
    { question: "Which Language I used more?", options:["Python","C++","Java","Java Script"], answer:2 },
    { question: "Do I like pets?", options:["Yes","No","Sometimes","Not sure"], answer:2 },
    { question: "Which device do I prefer?", options:["PC","Laptop","Tablet","Smartphone"], answer:2 }
];

if (document.getElementById("quiz-container")) {
    let currentQuestion = 0;
    let score = 0;

    const quizContainer = document.getElementById("quiz-container");
    const progressBar = document.getElementById("progress-bar");
    const questionCounter = document.getElementById("question-counter");

    function loadQuestion() {
        if (currentQuestion >= quizData.length) {
            localStorage.setItem("quizScore", score);
            window.location.href = "qresult.html";
            return;
        }

        const q = quizData[currentQuestion];
        questionCounter.innerText = `Question ${currentQuestion + 1} of ${quizData.length}`;
        progressBar.style.width = `${(currentQuestion/quizData.length)*100}%`;

        quizContainer.innerHTML = `
            <form id="quiz-form">
                <h3>${q.question}</h3>
                ${q.options.map((opt,i) => `<label><input type="radio" name="option" value="${i}" required> ${opt}</label>`).join('')}
                <button type="submit" class="btn">Next</button>
            </form>
        `;

        document.getElementById("quiz-form").addEventListener("submit", e => {
            e.preventDefault();
            const selected = parseInt(document.querySelector('input[name="option"]:checked').value);
            if (selected === q.answer) score++;
            currentQuestion++;
            loadQuestion();
        });
    }

    loadQuestion();
}

// Show result page
if (document.getElementById("result-text")) {
    const score = localStorage.getItem("quizScore");
    const percent = Math.round((score / quizData.length) * 100);
    let msg = "";

    if (percent === 100) msg = "How cOMe yoU kNoW me DEEPLY!?";
    else if (percent >= 80) msg = "Wow! You kNoW ME qUItE wEll!";
    else if (percent >= 50) msg = "NoT bAD, bUt you cAn kNOw Me bEtTeR!";
    else msg = "Uh-oh! You barely know me...";

    document.getElementById("result-text").innerText = `Score: ${percent}%\n${msg}`;
}
