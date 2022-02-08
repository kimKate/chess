main();

function main() {
  const tableElem = document.querySelector(".chess-board");
  const boardElem = generateBoard();

  tableElem.appendChild(boardElem);
  generateVerticalNotation();

  setupCells();
}

function generateGorizontalNotation() {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const tr = document.createElement("tr");

  for (let l of letters) {
    const th = document.createElement("th");
    th.innerText = l;
    tr.appendChild(th);
  }

  return tr;
}

function generateVerticalNotation() {
  const trElems = document.querySelectorAll("tr");

  for (let i = 0; i < trElems.length; i++) {
    if (i === 0) {
      const th = document.createElement("th");
      trElems[0].insertBefore(th, trElems[i].firstChild);
    } else {
      const th = document.createElement("th");
      th.innerText = i;
      trElems[i].insertBefore(th, trElems[i].firstChild);
    }
  }

  return trElems;
}

function generateOddRow() {
  const tr = document.createElement("tr");
  for (let i = 1; i <= 8; i++) {
    const td = document.createElement("td");
    if (i % 2 == 0) {
      td.className = "light";
    } else {
      td.className = "dark";
    }
    tr.appendChild(td);
  }
  return tr;
}

function generateEvenRow() {
  const tr = document.createElement("tr");
  for (let i = 1; i <= 8; i++) {
    const td = document.createElement("td");
    if (i % 2 == 0) {
      td.className = "dark";
    } else {
      td.className = "light";
    }
    tr.appendChild(td);
  }
  return tr;
}

function generateBoard() {
  const tbody = document.createElement("tbody");
  for (let i = 0; i <= 8; i++) {
    if (i % 2 == 0 && i != 0) {
      const trElem = generateOddRow();
      tbody.appendChild(trElem);
    } else if (i % 2 == 1 && i != 0) {
      const trElem = generateEvenRow();
      tbody.appendChild(trElem);
    } else {
      const trElem = generateGorizontalNotation();
      tbody.appendChild(trElem);
    }
  }
  return tbody;
}

function setupCells() {
  const elements = document.querySelectorAll(".chess-board td");
  let selectedCellElem = null;

  for (const cellElem of elements) {
    const addSelectedClass = () => {
      const pieceElem = cellElem.children[0];
      if (!pieceElem.classList.contains("piece")) {
        return;
      }

      if (cellElem === selectedCellElem) {
        cellElem.classList.remove("selected");
        selectedCellElem = null;
      } else {
        if (selectedCellElem != null) {
          selectedCellElem.classList.remove("selected");
        }

        cellElem.classList.add("selected");
        selectedCellElem = cellElem;
      }
    };

    cellElem.addEventListener("click", addSelectedClass);
  }
}
