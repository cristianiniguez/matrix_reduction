import view from '../views/Home.html'

const Home = () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = view
    divElement.classList.add('matrix-form')
    const input_rows = divElement.querySelector('#rows')
    const input_cols = divElement.querySelector('#cols')
    const btn_start = divElement.querySelector('#start-btn')
    btn_start.addEventListener('click', e => {
        // e.preventDefault()
        console.log(input_rows.value)
        console.log(input_cols.value)
    })
    return divElement
}

export default Home