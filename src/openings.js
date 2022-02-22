//TODO
// get pieces with positions
// listen to the board if there is combination of specific elements
// if match alert opening
const base = {
        "white": {
            "k": ["d1"],
            "q": ["e1"],
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

}
const currentState = {
    "white": {
        "k": [],
        "q": [],
        "r": [],
        "b": [],
        "n": [],
        "p": []
    }, 
    "black": {
        "k": [],
        "q": [],
        "r": [],
        "b": [],
        "n": [],
        "p": []
    }
}

const getPiecesPostions2 = () => {
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
        console.log(typeof(position))
        currentState[`${color}`][`${piece}`].push([position])
    }
}

getPiecesPostions2()

const checkPosition = {

}