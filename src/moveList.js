setupMoveList()

function setupMoveList() {
    const body = document.querySelector('body')
    const moveList = createMoveList()

    body.appendChild(moveList)
} 

function createMoveList() {
    const el = document.createElement('div')
    el.className = 'move-list'

    return el
}
