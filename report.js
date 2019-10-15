const halls = [
  "Legon Hall",
  "Akuafo Hall",
  "Sarbah Hall",
  "Commonwealth Hall",
  "Volta Hall"
]

for (let i = 0; i < halls.length; i++) {
  const hall = halls[i];
  getMembers(hall, (students) => {
    renderHall(hall, students);
  });
}

function getMembers(hall, callback) {
  $.get(
    "http://localhost:1000/hall_members",
    { hall },
    callback
  ).fail(() => {
    alert("Couldn't connect to server.");
  })
}


function renderHall(hall, students) {
  let html = `<div>
                <h2> ${hall.toUpperCase()}</h2>
                <table class="table">
                  <thead class="thead-light">
                    <tr>
                      <td>Student ID</td>
                      <td>Student Name</td>
                      <td>Room #</td>
                    </tr>
                  </thead>
                  <tbody>`;

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    html += `<tr>
              <td> ${student.student_id} </td>
              <td> ${student.name} </td>
              <td> ${student.room} </td>
             </tr>`;
  }

  html += `</tbody>
          </table>
          <br><br>
        </div>`

  $("body").append(html);
}