import ProjectLoader from "./project.data"
import FeaturesLoader from "./fetchFeatures"
import { 
    updateDevelopmentStatus, 
    updateProductionStatus 
} from "./postUpdateFeatureStatus"

const loaders = {
    'projects' : ProjectLoader,
    'features' : {
        FeaturesLoader,
        updateDevelopmentStatus, 
        updateProductionStatus
    }  
}

export default loaders