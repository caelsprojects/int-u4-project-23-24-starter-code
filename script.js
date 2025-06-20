let chartrait;

let cyb = 0;
let uh = 0;
let eo = 0;
let jad = 0;


// First question buttons
document.getElementById("cyb").addEventListener("click", showQuestion2);
document.getElementById("eo").addEventListener("click", showQuestion2);
document.getElementById("uh").addEventListener("click", showQuestion2);
document.getElementById("jad").addEventListener("click", showQuestion2);

function showQuestion2() {
    // Hide first question
    document.querySelector(".questions").style.display = "none";
    // Show second question
    document.getElementById("question2").style.display = "block";
    // Show second question's buttons
    document.getElementById("q2-buttons").style.display = "flex";
}

// You can add event listeners for the second question's buttons here
document.getElementById("good-btn").addEventListener("click", function() {
    // Handle "Good" answer
    alert("You chose Good!");
    // You can show the result or next step here
});

document.getElementById("bad-btn").addEventListener("click", function() {
    // Handle "Bad" answer
    alert("You chose Bad!");
    // You can show the result or next step here
});

function handleButtonClick(event) {
    // Increment the variable based on which button was clicked
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

    document.querySelectorAll("button").forEach(btn => btn.style.display = "none");
    const firstImg = document.querySelector("img");
    if (firstImg) firstImg.style.display = "none";
    const q1Title = document.querySelector("h4");
    if (q1Title) q1Title.style.display = "none";
    const q2Props = document.querySelectorAll(".q2-prop:not(button)");
    q2Props.forEach(el => el.style.display = "block");
}

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", handleButtonClick);
});