const habitInput = document.getElementById("habitInput");
const habitList = document.getElementById("habitList");

let habits = JSON.parse(localStorage.getItem("habits")) || [];

function saveHabits() {
  localStorage.setItem("habits", JSON.stringify(habits));
}

function renderHabits() {
  habitList.innerHTML = "";
  habits.forEach((habit, index) => {
    const li = document.createElement("li");
    li.className = habit.done ? "done" : "";

    li.innerHTML = `
      <span onclick="toggleHabit(${index})">${habit.text}</span>
      <button onclick="deleteHabit(${index})">X</button>
    `;

    habitList.appendChild(li);
  });
}

function addHabit() {
  const text = habitInput.value.trim();
  if (!text) return;

  habits.push({ text, done: false });
  habitInput.value = "";
  saveHabits();
  renderHabits();
}

function toggleHabit(index) {
  habits[index].done = !habits[index].done;
  saveHabits();
  renderHabits();
}

function deleteHabit(index) {
  habits.splice(index, 1);
  saveHabits();
  renderHabits();
}

renderHabits();
