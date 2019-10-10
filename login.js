let id = document.getElementById("stuID");
let pin = document.getElementById("stuPIN");

function login(e) {
  e.preventDefault();
  $.post(
    "http://localhost:1000/login",
    { student_id: id.value, pin: pin.value },
    (result) => {
      if (result === "not_found")
        alert("Invalid ID or PIN!");
      else {
        sessionStorage.setItem("student",JSON.stringify(result))
        window.location = "hall.html";
      }
    }
  )
}