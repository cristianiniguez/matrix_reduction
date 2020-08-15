import { pages } from '../controllers/index'
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
    '': pages.home,
    '?': pages.exercise
}

const router = () => {
    const content = null || document.getElementById('content')
    content.innerHTML = ''
    const search = location.search
    const route = resolveRoutes(search)
    const page = routes[route] ? routes[route] : pages.notFound
    content.appendChild(page())
}

export default router