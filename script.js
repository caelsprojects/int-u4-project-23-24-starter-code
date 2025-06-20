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
        winnerImg = "https://imgs.search.brave.com/YtHXEkaGdNzrBgyneyEDpJ7yaooxr4Y1Q2XLIwtt5tg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/VWI2VVd4Sy1XbWdB/QUFBTS9yYWlkZW4t/bWV0YWwtZ2Vhci1t/ZXRhbC1nZWFyLXJp/c2luZy5naWY.gif"
    } else if (cyb > 0 && bad > 0) {
        winner = "V1";
        winnerImg = "https://imgs.search.brave.com/56daUMavJpyvNoWNnOcxo-fWFp0LEKmAMua8Ro4Ihso/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/cDJtOVNYTG4wendB/QUFBTS91bHRyYWtp/bGwtdjEuZ2lm.gif";
    } else if (eo > 0 && good > 0) {
        winner = "Isabelle";
        winnerImg = "https://imgs.search.brave.com/fgdyFOp1rOIkhp-MESIwquhHcs-VIH1fvUkFwsXZ4V0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI5Lzkz/L2ZjLzI5OTNmY2Iz/ZTFmZDVhMzkzNTM4/NWFiYzM3YzUwNzFi/LmpwZw";
    } else if (eo > 0 && bad > 0) {
        winner = "Papyrus";
        winnerImg = "https://imgs.search.brave.com/ke5uqqfNbJVGwrGL9T3wp_nyNiEqJqdOfOeZJcyY-F0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDM4MzQz/NjEuanBn";
    } else if (uh > 0 && good > 0) {
        winner = "Doom Guy";
        winnerImg = "https://imgs.search.brave.com/kZW0DxcSUJ30NRUeI1rg8cxgkvkHi3dOM3bSRj4RSjM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmlt/Z2ZsaXAuY29tLzQv/ODZodG0wLnBuZw";
    } else if (uh > 0 && bad > 0) {
        winner = "Kratos";
        winnerImg = "https://imgs.search.brave.com/bhoecTEh03VeQpWMfCsFif_etQrEbvXEwwH5c94SwuI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/eUloTXFOVVpaU2tB/QUFBTS9nb2Qtb2Yt/d2FyLWtyYXRvcy5n/aWY.gif";
    } else if (jad > 0 && good > 0) {
        winner = "Dante";
        winnerImg = "https://imgs.search.brave.com/4wvgsOMupCKDZHM-Lf-Pnmk1LkmLFDeCVxazBH7YN7Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/Zy1rQ19wYVVvck1B/QUFBTS9kYW50ZS1k/YW5jZS5naWY.gif";
    } else if (jad > 0 && bad > 0) {
        winner = "Vergil";
        winnerImg = "https://imgs.search.brave.com/jm3-1j3h-TjkVRg3X2lkhBGvWFoa9EZJp21AZu8wRko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2YxL2Fm/LzJmL2YxYWYyZmJm/NTI1OGI0ODgzN2Y2/NjZlNWM1NmJjNzli/LmdpZg.gif";
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
                <img src="${winnerImg}" alt="${winner}">
            </div>
        `;
    }
    resultDiv.classList.add('winner');
    resultDiv.style.display = "block";
}