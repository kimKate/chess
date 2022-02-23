const base = {
    "white": {
        "k": ["e1"],
        "q": ["d1"],
        "r": ["a1", "h1"],
        "b": ["c1", "f1"],
        "n": ["b1", "g1"],
        "p": ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"]
    },
    "black": {
        "k": ["e8"],
        "q": ["d8"],
        "r": ["a8", "h8"],
        "b": ["c8", "f8"],
        "n": ["b8", "g8"],
        "p": ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"]
    }
}

const sicilian = {
    "white": {
        "k": ["e1"],
        "q": ["d1"],
        "r": ["a1", "h1"],
        "b": ["c1", "f1"],
        "n": ["b1", "g1"],
        "p": ["a2", "b2", "c2", "d2", "e4", "f2", "g2", "h2"]
    },
    "black": {
        "k": ["e8"],
        "q": ["d8"],
        "r": ["a8", "h8"],
        "b": ["c8", "f8"],
        "n": ["b8", "g8"],
        "p": ["a7", "b7", "c5", "d7", "e7", "f7", "g7", "h7"]
    }
}

function deepEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];
      const areObjects = isObject(val1) && isObject(val2);
      if (
        areObjects && !deepEqual(val1, val2) ||
        !areObjects && val1 !== val2
      ) {
        return false;
      }
    }
    return true;
}
function isObject(object) {
    return object != null && typeof object === 'object';
}

const getPiecesPostions = () => {
    const currentState = {
        "white": {
            "k": [], "q": [], "r": [], "b": [], "n": [], "p": []
        }, 
        "black": {
            "k": [], "q": [], "r": [], "b": [], "n": [], "p": []
        }
    }
    const cells = document.querySelectorAll('td')
    let cellsWithPieces = []

    for (let cell of cells) {
        if (cell.children.length === 1) {
            cellsWithPieces.push(cell)
        }
    }
    
    for (let cell of cellsWithPieces) {
        const color = cell.children[0].classList[1]
        const piece = cell.children[0].classList[2]
        const position = cell.id

        currentState[`${color}`][`${piece}`].push(position)
        currentState[`${color}`][`${piece}`].sort()
    }
    return currentState
}

function setupOpenings() {
    const cellElems = document.querySelectorAll('.chess-board td')

    for (const cellElem of cellElems) {
        const waitForOpening = () => {
            const current = getPiecesPostions()
            console.log('log')
            console.log(current, sicilian)
            console.log('log')

            if (deepEqual(current, sicilian)) {
                console.log('Sicilian')
            }
        }

        cellElem.addEventListener('click', waitForOpening)
    }
}

setupOpenings()