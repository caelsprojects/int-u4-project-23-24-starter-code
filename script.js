let cyb = 0;
let uh = 0;
let eo = 0;
let jad = 0;
let good = 0;
let bad = 0;

// Show question 2 after any trait button is clicked
document.getElementById("cyb-btn").addEventListener("click", function() {
    cyb++;
    showQuestion2();
});
document.getElementById("eo-btn").addEventListener("click", function() {
    eo++;
    showQuestion2();
});
document.getElementById("uh-btn").addEventListener("click", function() {
    uh++;
    showQuestion2();
});
document.getElementById("jad-btn").addEventListener("click", function() {
    jad++;
    showQuestion2();
});

function showQuestion2() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
    document.getElementById("q2-buttons").style.display = "flex";
}

// Good/Bad buttons
document.getElementById("good-btn").addEventListener("click", function() {
    good++;
    showResult();
});
document.getElementById("bad-btn").addEventListener("click", function() {
    bad++;
    showResult();
});

function showResult() {
    document.getElementById("question2").style.display = "none";
    const resultDiv = document.querySelector('.result');
    let winner = "";
    let winnerImg = "";

    if (cyb > 0 && good > 0) {
        winner = "Raiden";
    } else if (cyb > 0 && bad > 0) {
        winner = "V1";
        winnerImg = "https://imgs.search.brave.com/56daUMavJpyvNoWNnOcxo-fWFp0LEKmAMua8Ro4Ihso/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/cDJtOVNYTG4wendB/QUFBTS91bHRyYWtp/bGwtdjEuZ2lm.gif";
    } else if (eo > 0 && good > 0) {
        winner = "Isabelle";
    } else if (eo > 0 && bad > 0) {
        winner = "Papyrus";
    } else if (uh > 0 && good > 0) {
        winner = "Doom Guy";
    } else if (uh > 0 && bad > 0) {
        winner = "Kratos";
    } else if (jad > 0 && good > 0) {
        winner = "Dante";
    } else if (jad > 0 && bad > 0) {
        winner = "Vergil";
    } else {
        winner = "Unknown";
    }

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
    resultDiv.classList.add('winner');
    resultDiv.style.display = "block";
}