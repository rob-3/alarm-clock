const clock = document.querySelector("#clock");
const reminders = document.querySelector("#reminders");
const button = document.querySelector("#button");
const textbox = document.querySelector("#textbox");
const dateTextbox = document.querySelector("#datetextbox");

const reminderList = [];

const setReminder = reminderName => {
  const reminderText = textbox.value;
  textbox.value = "";
  const date = new Date();
  const reminder = new Reminder(date, reminderText);
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
      alert("Reminder!");
    }
  });
}

const updateClock = () => {
  () => {
    const now = new Date();
    const hours = String(now.getHours());
    const minutes = String(now.getMinutes());
    const seconds = String(now.getSeconds());
    //clock.innerHTML = hours + ":" + minutes + ":" + seconds;
    clock.innerHTML = `${hours}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
  }
};

setInterval(updateClock, 1000);

button.addEventListener("click", setReminder);

setInterval(checkReminders, 1000);

class Reminder {
  constructor(date, text) {
    this.date = date;
    this.text = text;
  }
}
