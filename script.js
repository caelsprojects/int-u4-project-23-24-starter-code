let chartrait;

let cyb = 0;
let uh = 0;
let eo = 0;
let jad = 0;
let good = 0;
let bad = 0;
// Only handle incrementing variables when buttons are clicked
function handleButtonClick(event) {
    const btn = event.target;
    if (btn.id === "cyb-btn") {
        cyb++;
    } else if (btn.id === "uh-btn") {
        uh++;
    } else if (btn.id === "eo-btn") {
        eo++;
    } else if (btn.id === "jad-btn") {
        jad++;
    }
    else if (btn.id === "good-btn") {
        good++;
    } else if (btn.id === "bad-btn") {
        bad++;
    }
    // You can add any additional logic here if needed
}

// Attach event listeners to all relevant buttons
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", handleButtonClick);
});

// If you want to keep the "Good"/"Bad" logic:
document.getElementById("good-btn").addEventListener("click", function() {
    alert("You chose Good!");
});
document.getElementById("bad-btn").addEventListener("click", function() {
    alert("You chose Bad!");
});
function checkWinner() {
    let winner = "";
    let winnerImg = "";
    if (cyb > 1 && good > 1) {
        winner = "Raiden";
    } else if (cyb > 1 && bad > 1) {
        winner = "V1";
        winnerImg = "https://imgs.search.brave.com/56daUMavJpyvNoWNnOcxo-fWFp0LEKmAMua8Ro4Ihso/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/cDJtOVNYTG4wendB/QUFBTS91bHRyYWtp/bGwtdjEuZ2lm.gif";
    } else if (eo > 1 && good > 1) {
        winner = "Isabelle";
    } else if (eo > 1 && bad > 1) {
        winner = "Papayrus";
    } else if (uh > 1 && good > 1) {
        winner = "Doom Guy";
    } else if (uh > 1 && bad > 1) {
        winner = "Kratos";
    } else if (jad > 1 && good > 1) {
        winner = "Dante";
    } else if (jad > 1 && bad > 1) {
        winner = "Vergil";
    }

    if (winner) {
        const resultDiv = document.querySelector('.result');
        if (winner === "V1") {
            resultDiv.innerHTML = `
                <div class="winner">
                    <h2>${winner} is the winner!</h2>
                    <img src="${winnerImg}" alt="V1">
                </div>
            `;
        } else {
            resultDiv.innerHTML = `
                <div class="winner">
                    <h2>${winner} is the winner!</h2>
                </div>
            `;
        }
    }
}

resultDiv.classList.add('winner');
resultDiv.style.display = "block";
// Call checkWinner after every button click
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", checkWinner);
});