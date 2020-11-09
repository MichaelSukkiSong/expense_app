/* functions */

const countNumTableElements = () => {
  const num = document.querySelector(".table").childElementCount;
  return num;
};

const DisplaySentenceInTable = () => {
  const markup = `
        <tr>
            <td class="sentence" colspan="4">No expenses added yet!</td>
        </tr>
      `;
  document.querySelector(".table").insertAdjacentHTML("beforeend", markup);
};

const JudgeSentenceInTable = (num, limit = 2) => {
  if (num < limit) {
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
    <td><button class="delete_btn">X</button></td>
  `;
  document.querySelector(".table").insertAdjacentHTML("beforeend", markup);
  // 3) Judge number and display sentence in table
  //   console.log(countNumTableElements());
  JudgeSentenceInTable(countNumTableElements());
};

/* on load */

window.addEventListener("load", JudgeSentenceInTable(countNumTableElements()));

/* delete button */

document.querySelector(".table").addEventListener("click", (e) => {
  if (e.target.matches(".delete_btn, .delete_btn *")) {
    // 1) Delete row
    const ele = e.target.parentNode.parentNode.parentNode;
    ele.parentNode.removeChild(ele);
    // 2) Judge number and display sentence in table
    // console.log(countNumTableElements());
    JudgeSentenceInTable(countNumTableElements(), 3);
  }
});
