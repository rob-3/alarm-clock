/*
 * Throughout I try to show a few different ways that you will see people do
 * things in JavaScript. It isn't an opinionated language, and there are often
 * different ways to achieve the same task, even for simple things.
 */
// DOM References
const clock = document.querySelector("#clock");
const button = document.querySelector("#button");
const textbox = document.querySelector("#textbox");
const hoursOption = document.querySelector("#hours");
const minutesOption = document.querySelector("#minutes");
const secondsOption = document.querySelector("#seconds");
const ampmOption = document.querySelector("#ampm");
// hihihi
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
  let hours = Number(hoursOption.value);
  const minutes = Number(minutesOption.value);
  const seconds = Number(secondsOption.value);
  const ampm = ampmOption.value;
  if (ampm === "PM") {
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

  console.log("Registered a new reminder.");
};

const checkReminders = () => {
  /*
  for (let i = 0; i < reminders.length; i++) {
    if (reminders[i].date <= new Date()) {
      reminderList.splice(i, 1);
      alert(reminders[i].text);
    }
  }
  */
  /*
  for (const r of reminders) {
    if (r.date <= new Date()) {
      reminderList.splice(reminderList.indexOf(r), 1);
      alert(r.text);
    }
  }
  */
  reminderList.forEach(r => {
    if (r.date <= new Date()) {
      reminderList.splice(reminderList.indexOf(r), 1);
      alert(r.text);
    }
  });

  console.log("Checked all reminders.");
}

const updateClock = () => {
  const now = new Date();
  const hours = String(now.getHours());
  const minutes = String(now.getMinutes());
  const seconds = String(now.getSeconds());
  //clock.innerHTML = hours + ":" + minutes.padStart(2, "0") + ":" + seconds.padStart(2, "0");
  clock.innerHTML = `${hours}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
};

setInterval(updateClock, 1000);

button.addEventListener("click", setReminder);

setInterval(checkReminders, 1000);

updateClock();

// A simple data class, similar to a struct in C
/*
class Reminder {
  constructor(date, text) {
    this.date = date;
    this.text = text;
  }
}
*/
