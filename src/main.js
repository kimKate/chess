main()


function main() {
  const boardElem = generateBoard()

  const bodyElem = document.querySelector('body')
  bodyElem.appendChild(boardElem)

  setupCells()
}


function setupCells() {
  const elements = document.querySelectorAll('.chess-board td')
  let selectedCellElem = null;

  for (const cellElem of elements) {
    const f = event => {
      const pieceElem = cellElem.children[0]
      if (!pieceElem.classList.contains('piece')) {
        return
      }

      if (cellElem === selectedCellElem) {
        cellElem.classList.remove('selected')
        selectedCellElem = null
      } else {
        if (selectedCellElem != null) {
          selectedCellElem.classList.remove('selected')
        }

        cellElem.classList.add('selected')
        selectedCellElem = cellElem
      }

      // console.log(selectedCellElem)
    }


    cellElem.addEventListener('click', f)
  }
}

function generateBoard() {
}