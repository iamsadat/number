let number = document.getElementById("number");
const ans = document.getElementById("ans");
const result = document.getElementById("result");
let random = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    let guess = parseInt(number.value);
    if(guess < random) {
        ans.innerHTML = "Your guess was lower :(";
        number.value = ""
    } else if(guess > random) {
        ans.innerHTML = "Your guess was higher :(";
        number.value = ""
    } else {
        ans.innerHTML = `Your guess was correct 😊`;
        number.value = "";
        result.innerHTML = `The correct ans was ${random}`
    }
}

btn.addEventListener("click", checkGuess);
