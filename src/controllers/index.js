import Home from "./Home.controller";
import Exercise from "./Exercise.controller";
import NotFound from "./404.controller";

const pages = {
    home: Home,
    exercise: Exercise,
    notFound: NotFound
}

export { pages }