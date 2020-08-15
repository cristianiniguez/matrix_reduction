import controls from '../views/ExerciseControls.html'

const Exercise = () => {
    /* Getting rows and cols */
    const rows = /rows=\d*/.exec(location.search)[0].slice(5)
    const cols = /cols=\d*/.exec(location.search)[0].slice(5)
    /* Creating elements */
    const divElement = document.createElement('div')
    const sectionControls = document.createElement('section')
    sectionControls.innerHTML = controls
    sectionControls.classList.add('exercise-controls')
    const divMatrix = document.createElement('div')
    divMatrix.classList.add('matrix')
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const cell = document.createElement('input')
            cell.id = `cell-${r}-${c}`
            cell.className = 'cell'
            divMatrix.appendChild(cell)
        }
    }
    divMatrix.style.gridTemplateColumns = `repeat(${cols}, 25px)`
    divElement.appendChild(sectionControls)
    divElement.appendChild(divMatrix)
    return divElement
}

export default Exercise