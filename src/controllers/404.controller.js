import view from '../views/NotFound.html'

const NotFound = () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = view
    divElement.classList.add('not-found')
    return divElement
}

export default NotFound