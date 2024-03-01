const n1 = Math.ceil(Math.random() * 10);
const n2 = Math.ceil(Math.random() * 10);

const formE1 = document.getElementById("form");
const scoreE1 = document.getElementById("score");
const questionE1 = document.getElementById("question");
const inputE1 = document.getElementById("input");



let score = JSON.parse(localStorage.getItem("score"));
// 

if (!score) {
    score = 0;
}
scoreE1.innerText = `score:${score}`;

questionE1.innerText = `What is ${n1} Multiply by ${n2} ?`;
const ans = n1 * n2;

formE1.addEventListener("submit", () => {
    const userInput = +inputE1.value;
    if (ans === userInput) {
        score++;
        updateLocalStorage();

    } else {
        score--;
        updateLocalStorage();

    }
})

//  
function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));

}
