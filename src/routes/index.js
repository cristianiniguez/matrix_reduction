import { pages } from '../controllers/index'

const router = () => {
    // console.log('Hola desde router')
    const content = null || document.getElementById('content')
    content.innerHTML = ''
    content.appendChild(pages.home())
}

export default router