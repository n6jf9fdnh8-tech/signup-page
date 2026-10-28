// Variable declaration 
let labName = "Open Lab Hours";
console.log("Welcome to " + labName);

// Provided function
function sayHi() {
  console.log("Hi! Thanks for visiting.");
}

sayHi();

let meetingDay = "We meet Tuesday through Thursday.";
console.log(meetingDay);

function sayBye() {
  console.log("Goodbye! Have a great lab session.");
}

sayBye();
sayBye();

// Day 2 Part 6: Button Logic
let nextButton = document.querySelector("#next-btn");
let nextMeeting = document.querySelector("#next-meeting");

function showNextMeeting() {
  nextMeeting.textContent = "Our next meeting is Tuesday, Nov 3 at 4:00 PM.";
}

nextButton.addEventListener("click", showNextMeeting);