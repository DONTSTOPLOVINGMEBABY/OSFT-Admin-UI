import ProjectLoader from "./project.data"
import FeaturesLoader from "./fetchFeatures"

const loaders = {
    'projects' : ProjectLoader,
    'features' : FeaturesLoader,  
}

export default loaders