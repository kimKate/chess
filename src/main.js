main();

function main() {
  const tableElem = document.querySelector('.chess-board');
  const boardElem = generateBoard();

  tableElem.appendChild(boardElem);
  generateVerticalNotation();

  generateCellsNotations();

  setupMoves();
  setupPieces('white');
  setupPieces('black');
}

function generateGorizontalNotation() {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const tr = document.createElement('tr');

  for (let l of letters) {
    const th = document.createElement('th');
    th.innerText = l;
    tr.appendChild(th);
  }

  return tr;
}

function generateVerticalNotation() {
  const trElems = document.querySelectorAll('tr');

  for (let i = 0; i < trElems.length; i++) {
    if (i === 0) {
      const th = document.createElement('th');
      trElems[0].insertBefore(th, trElems[i].firstChild);
    } else {
      const th = document.createElement('th');
      th.innerText = i;
      trElems[i].insertBefore(th, trElems[i].firstChild);
    }
  }

  return trElems;
}

function generateOddRow() {
  const tr = document.createElement('tr');
  for (let i = 1; i <= 8; i++) {
    const td = document.createElement('td');
    if (i % 2 == 0) {
      td.className = 'light';
    } else {
      td.className = 'dark';
    }
    tr.appendChild(td);
  }
  return tr;
}

function generateEvenRow() {
  const tr = document.createElement('tr');
  for (let i = 1; i <= 8; i++) {
    const td = document.createElement('td');
    if (i % 2 == 0) {
      td.className = 'dark';
    } else {
      td.className = 'light';
    }
    tr.appendChild(td);
  }
  return tr;
}

function generateBoard() {
  const tbody = document.createElement('tbody');
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
  const elements = document.querySelectorAll('.chess-board td');
  let selectedCellElem = null;
  let piece = null;

  for (const cellElem of elements) {
    const addSelectedClass = () => {

      // if (selectedCellElem != null && !pieceElem.classList.contains('piece')) {
      //   return;
      // }

      if (cellElem === selectedCellElem) {
        //if user clicks on the same cell
        cellElem.classList.remove('selected');
        selectedCellElem = null;
      } else {
        if (selectedCellElem != null) {
          //if user choosed cell
          // const pieceElem = document.querySelector('')
          // selectedPieceElem.first-child
          const pieceEl = selectedCellElem.children[0];
          piece = pieceEl;
          pieceEl.remove();
          selectedCellElem.remove('selected');
        }

        //choose cell
        cellElem.classList.add('selected');
        cellElem.appendChild(piece);
        selectedCellElem = cellElem;
      }
    };

    cellElem.addEventListener('click', addSelectedClass);
  }
}

function getPosition(annot) {
  const l = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  let i = l.indexOf(annot[0]) + 2;
  let j = annot[1];

  const postion = `body > table > tbody > tr:nth-child(${
    Number(j) + 1
  }) > td:nth-child(${i})`;

  return postion;
}

function setupPieces(color) {
  let annots;
  const pieces = ['k', 'q', 'r', 'b', 'n', 'p'];
  const annotations = {
    white: {
      k: ['d1'],
      q: ['e1'],
      r: ['a1', 'h1'],
      b: ['c1', 'f1'],
      n: ['b1', 'g1'],
      p: ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
    },
    black: {
      k: ['e8'],
      q: ['d8'],
      r: ['a8', 'h8'],
      b: ['c8', 'f8'],
      n: ['b8', 'g8'],
      p: ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
    },
  };
  // const pieces = ['r'];
  // const annotations = {
  //   white: {
  //     r: ['e4'],
  //   },
  // };

  if (color == 'white') {
    annots = annotations.white;
  } else {
    annots = annotations.black;
  }

  for (piece of pieces) {
    for (let annot of annots[piece]) {
      const position = getPosition(annot);
      const tdElem = document.querySelector(position);
      const divElem = document.createElement('div');
      divElem.classList = `piece ${color} ${piece}`;
      tdElem.appendChild(divElem);
    }
  }
}

function generateCellsNotations() {
  const cellElems = document.querySelectorAll('td');
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  for (let i = 0; i < cellElems.length; i++) {
    if (i <= 7) {
      const id = `${letters[i]}1`;
      cellElems[`${i}`].id = id;
    } else if (i <= 15) {
      const id = `${letters[i - 8]}2`;
      cellElems[`${i}`].id = id;
    } else if (i <= 23) {
      const id = `${letters[i - 16]}3`;
      cellElems[`${i}`].id = id;
    } else if (i <= 31) {
      const id = `${letters[i - 24]}4`;
      cellElems[`${i}`].id = id;
    } else if (i <= 39) {
      const id = `${letters[i - 32]}5`;
      cellElems[`${i}`].id = id;
    } else if (i <= 47) {
      const id = `${letters[i - 40]}6`;
      cellElems[`${i}`].id = id;
    } else if (i <= 55) {
      const id = `${letters[i - 48]}7`;
      cellElems[`${i}`].id = id;
    } else if (i <= 63) {
      const id = `${letters[i - 56]}8`;
      cellElems[`${i}`].id = id;
    }
  }
}

function setupMoves() {
  const cellElems = document.querySelectorAll('.chess-board td');
  let savedCellElem = null;
  let cellWithNewPiece = null
  let side = null

  for (const cellElem of cellElems) {
    const makeMove = () => {

      //user did't choosen any cell yet 
      if (savedCellElem === null) {
        if (side === null) {
          side = 'white'
        }

        //checking that user is clicking on piece on right side
        if (cellElem.children[0].classList.contains(side)) {

          //delete the previous move cell
          if(cellWithNewPiece != null) {
            cellWithNewPiece.classList.remove('selected')
          }

          //check does cell contains piece
          cellElem.classList.add('selected');
          savedCellElem = cellElem;
          if (side === 'white') {
            side = 'black'
          } else {
            side = 'white'
          }        } else {
          return;
        }
      } else if (savedCellElem === cellElem) {

        //user choosed the same cell
        cellElem.classList.remove('selected');
        savedCellElem = null;

      } else {
        const pieceClassName = `${savedCellElem.children[0].classList[1]} ${savedCellElem.children[0].classList[2]}`
        const savedPieceEl = savedCellElem.children[0];
        const pieceEl = cellElem.children[0]
        const newPieceEl = document.createElement('div');
        newPieceEl.className = `piece ${pieceClassName}`;

        //removing selected and pieces
        if(cellElem.children[0] != undefined) {
          pieceEl.remove()
        } 
        savedCellElem.classList.remove('selected');
        savedPieceEl.remove();

        //adding piece
        cellElem.classList.add('selected');
        cellElem.appendChild(newPieceEl);

        cellWithNewPiece = cellElem
        savedCellElem = null;
      }
    };

    cellElem.addEventListener('click', makeMove);
  }
}
