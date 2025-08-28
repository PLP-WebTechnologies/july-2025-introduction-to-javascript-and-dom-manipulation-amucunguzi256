
// ==========================
// Part 1: Variables & Conditionals
// ==========================
let userName = "Aston Astex";
document.getElementById("greeting").textContent = `Hello, ${userName}! Welcome to JavaScript Mastery.`;

// Check age input
document.getElementById("checkAgeBtn").addEventListener("click", function() {
    let age = parseInt(document.getElementById("ageInput").value);
    if (isNaN(age)) {
        document.getElementById("ageResult").textContent = "Please enter a valid number!";
    } else if (age >= 18) {
        document.getElementById("ageResult").textContent = "You are an adult ✅";
    } else {
        document.getElementById("ageResult").textContent = "You are a minor ⛔";
    }
});

// ==========================
// Part 2: Functions
// ==========================
function sumNumbers(a, b) {
    return a + b;
}

document.getElementById("sumBtn").addEventListener("click", function() {
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);
    let result = sumNumbers(a, b);
    document.getElementById("sumResult").textContent = `Random Sum: ${a} + ${b} = ${result}`;
});

// Custom greeting function
function customGreet(name) {
    return `👋 Hello, ${name}! Hope you are learning JS!`;
}

document.getElementById("greetBtn").addEventListener("click", function() {
    document.getElementById("customGreeting").textContent = customGreet(userName);
});

// ==========================
// Part 3: Loops
// ==========================

// For loop: Show numbers
document.getElementById("loopBtn").addEventListener("click", function() {
    let output = "";
    for (let i = 1; i <= 10; i++) {
        output += i + " ";
    }
    document.getElementById("loopResult").textContent = output;
});

// Countdown using setInterval
document.getElementById("countdownBtn").addEventListener("click", function() {
    let countdownEl = document.getElementById("countdown");
    let counter = 5;
    countdownEl.textContent = counter;
    let interval = setInterval(() => {
        counter--;
        countdownEl.textContent = counter;
        if (counter <= 0) {
            countdownEl.textContent = "⏰ Time's up!";
            clearInterval(interval);
        }
    }, 1000);
});

// ==========================
// Part 4: DOM Manipulation
// ==========================

// Toggle highlight class
document.getElementById("toggleBtn").addEventListener("click", function() {
    document.getElementById("domBox").classList.toggle("highlight");
});

// Add list items dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
    let ul = document.getElementById("itemList");
    let li = document.createElement("li");
    li.textContent = "New Item " + (ul.children.length + 1);
    ul.appendChild(li);
});

// Change DOM box color randomly
document.getElementById("colorBtn").addEventListener("click", function() {
    let box = document.getElementById("domBox");
    const colors = ["#ff8a65", "#4dd0e1", "#ffd54f", "#81c784", "#ba68c8"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
    box.textContent = `Color: ${randomColor}`;
});
