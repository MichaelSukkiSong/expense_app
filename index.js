/* functions */

const countNumTableElements = () => {
  const num = document.querySelector(".table").childElementCount;
  return num;
};

const DisplaySentenceInTable = () => {
  const markup = `
        <tr>
            <td class="sentence" colspan="3">No expenses added yet!</td>
        </tr>
      `;
  document.querySelector(".table").insertAdjacentHTML("beforeend", markup);
};

const JudgeSentenceInTable = (num) => {
  if (num < 2) {
    DisplaySentenceInTable();
  } else {
    if (document.querySelector(".sentence")) {
      document.querySelector(".sentence").remove();
    }
  }
};

/* add button */

document.querySelector(".add").addEventListener("submit", (e) => {
  e.preventDefault();
  controlAdd();
});

const controlAdd = () => {
  // 1) Get input
  const name = document.querySelector(".name_field").value;
  const date = document.querySelector(".date_field").value;
  const amount = document.querySelector(".amount_field").value;
  // 2) Display in UI(table)
  const markup = `
    <td>${name}</td>
    <td>${date}</td>
    <td>${amount}</td>
  `;
  document.querySelector(".table").insertAdjacentHTML("beforeend", markup);
  // 3) Judge number and display sentence in table
  JudgeSentenceInTable(countNumTableElements());
};

/* on load */

window.addEventListener("load", JudgeSentenceInTable(countNumTableElements()));

/* delete button */

// document.querySelector(".list_box").addEventListener("click", (e) => {
//   if (e.target.matches(".delete_btn, .delete_btn *")) {
//     // 1) delete from DB
//     // 2) delete from UI
//     e.target.parentNode.parentNode.removeChild(e.target.parentNode);
//   }
// });
