main();

function main() {
  const tableElem = document.querySelector(".chess-board");
  const boardElem = generateBoard();

  tableElem.appendChild(boardElem);
  generateVerticalNotation();

  setupCells();
  setupPieces("white");
  setupPieces("black");
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

function getPosition(annot) {
  const l = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let i = l.indexOf(annot[0]) + 2;
  let j = annot[1];

  const postion = `body > table > tbody > tr:nth-child(${Number(j) + 1}) > td:nth-child(${i})`;

  return postion;
}

function setupPieces(color) {
  let annots;
  const pieces = ["k", "q", "r", "b", "n", "p"];
  const annotations = {
    white: {
      k: ["d1"],
      q: ["e1"],
      r: ["a1", "h1"],
      b: ["c1", "f1"],
      n: ["b1", "g1"],
      p: ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    },
    black: {
      k: ["e8"],
      q: ["d8"],
      r: ["a8", "h8"],
      b: ["c8", "f8"],
      n: ["b8", "g8"],
      p: ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    },
  };

  if (color == "white") {
    annots = annotations.white;
  } else {
    annots = annotations.black;
  }

  for (piece of pieces) {
    for (let annot of annots[piece]) {
      const position = getPosition(annot);
      const tdElem = document.querySelector(position);
      const divElem = document.createElement("div");
      divElem.className = `${color}-${piece}`;
      tdElem.appendChild(divElem);
    }
  }
}
