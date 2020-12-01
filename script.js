/*
 * Throughout I try to show a few different ways that you will see people do
 * things in JavaScript. It isn't an opinionated language, and there are often
 * different ways to achieve the same task, even for simple things.
 */
const clock = document.querySelector("#clock");
const reminders = document.querySelector("#reminders");
const button = document.querySelector("#button");
const textbox = document.querySelector("#textbox");
const hoursOption = document.querySelector("#hours");
const minutesOption = document.querySelector("#minutes");
const secondsOption = document.querySelector("#seconds");
const ampmOption = document.querySelector("#ampm");

// Storage for all of the 
// In JS, arrays automatically grow to the necessary length dynamically
const reminderList = [];

// Create a reminder from the input boxes
const setReminder = () => {
  // Get the text for the reminder
  const reminderText = textbox.value;
  // Clear the textbox
  textbox.value = "";

  // Get the selected time options
  let hours = hoursOption.value;
  const minutes = minutesOption.value;
  const seconds = secondsOption.value;
  const ampm = ampmOption.value;
  if (ampm === "pm") {
    hours += 12;
  }

  // Set up our Date object
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(seconds);

  // Append the new reminder to the list
  const reminder = {
    date: date,
    text: reminderText
  };
  //const reminder = new Reminder(date, reminderText);
  reminderList.push(reminder);
};

const checkReminders = () => {
  const now = new Date();
  /*
  for (let i = 0; i < reminders.length; i++) {
    if (now.getTime() >= reminders[i].date.getTime()) {
      alert("Reminder!");
    }
  }
  */
  /*
  for (const r of reminders) {
    if (now.getTime() >= r.date.getTime()) {
      alert("Reminder!");
    }
  }
  */
  reminderList.forEach(r => {
    if (now.getTime() >= r.date.getTime()) {
      reminderList.splice(reminderList.indexOf(r), 1);
      alert(r.text);
    }
  });
}

const updateClock = () => {
  const now = new Date();
  const hours = String(now.getHours());
  const minutes = String(now.getMinutes());
  const seconds = String(now.getSeconds());
  //clock.innerHTML = hours + ":" + minutes + ":" + seconds;
  clock.innerHTML = `${hours}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
};

setInterval(updateClock, 1000);

button.addEventListener("click", setReminder);

setInterval(checkReminders, 1000);

// A simple data class, similar to a struct in C
/*
class Reminder {
  constructor(date, text) {
    this.date = date;
    this.text = text;
  }
}
*/
