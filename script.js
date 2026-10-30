// Day 1: variables, console messages, and function calls.
let labName = "Open Lab Hours";
console.log("Welcome to " + labName);

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

// Day 2: find the elements, write the function, then listen for a click.
let nextButton = document.querySelector("#next-btn");
let nextMeeting = document.querySelector("#next-meeting");

function showNextMeeting() {
  // Fixed date for this practice page. Update it for later sessions.
  nextMeeting.textContent = "Our next meeting is Tuesday, Nov 3 at 4:00 PM.";
}
nextButton.addEventListener("click", showNextMeeting);

// Day 4: toggle the body's class to change the CSS variables.
let darkBtn = document.querySelector("#dark-mode-btn");

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  // Optional course extension: show the action the button will take next.
  if (document.body.classList.contains("dark-mode")) {
    darkBtn.textContent = "Light mode";
    darkBtn.setAttribute("aria-pressed", "true");
  } else {
    darkBtn.textContent = "Dark mode";
    darkBtn.setAttribute("aria-pressed", "false");
  }
}
darkBtn.addEventListener("click", toggleDarkMode);
