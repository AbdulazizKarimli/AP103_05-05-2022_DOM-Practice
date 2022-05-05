// const course = {
//   courseName: "CA",
//   students: ["Murad", "Turan", "Jale", "Fatime", "Yusif"],
// };

// const tbody = document.querySelector("tbody");

// course.students.forEach((student, index) => {
//   const tr = document.createElement("tr");
//   const no = document.createElement("td");
//   const name = document.createElement("td");
//   name.innerText = student;
//   no.innerText = index + 1;
//   tr.appendChild(no);
//   tr.appendChild(name);
//   tbody.appendChild(tr);
// });

const names = Array.from(document.querySelectorAll(".list-group-item"));

const filteredNames = names.filter((n) =>
  n.textContent.toLowerCase().includes("a")
);

let ul = document.createElement("ul");

filteredNames.forEach((element) => {
  ul.innerHTML += `<li class="list-group-item">${element.innerHTML}</li>`;
});

document.querySelector(".filtered-name-list").appendChild(ul);
