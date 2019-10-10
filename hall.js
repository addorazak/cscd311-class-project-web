const student = JSON.parse(sessionStorage.getItem("student"));
const input_hall = document.getElementById("hall");
const input_room = document.getElementById("room");
const button = document.getElementById("submit");
if (student.hall) {
  input_hall.innerHTML = `<option selected>${student.hall}</option>`;
  input_room.innerHTML = `<option selected>${student.room}</option>`;
  input_hall.disabled = true;
  input_room.disabled = true;
  button.style="display:none";
}

let name = document.getElementById("name");
let id = document.getElementById("id");
let level = document.getElementById("level");
let gender = document.getElementById("gender");

name.innerText = student.name;
id.innerText = student.student_id;
level.innerText = student.level;
gender.innerText = student.gender;

function logout() {
  sessionStorage.clear();
  window.location = "index.html";
}

function register(e) {
  e.preventDefault();
  let hall = input_hall.options[input_hall.selectedIndex].innerText;
  let room = input_room.options[input_room.selectedIndex].innerText;
  $.post(
    "http://localhost:1000/register",
    {
      student_id: student.student_id,
      hall,
      room
    },
    (result) => {
      if (result === "success") {
        alert("Hall Registration Successful!");
        student.hall = hall;
        student.room = room;
        sessionStorage.setItem("student",JSON.stringify(student));
        window.location.reload();
      }
      else
        alert("Hall Registration Failed.");
    }
  )
}