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
    if (cyb > 1 && good > 1) {
        winner = "Raiden";
    } else if (cyb > 1 && bad > 1) {
        winner = "V1";
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
        alert(`${winner} is the winner.`);
    }
}

// Call checkWinner after every button click
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", checkWinner);
});