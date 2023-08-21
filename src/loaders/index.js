import ProjectLoader from "./project.data"
import FeaturesLoader from "./fetchFeatures"
import { 
    updateDevelopmentStatus, 
    updateProductionStatus 
} from "./postUpdateFeatureStatus"
import VariablesLoader from "./fetchVariables"

const loaders = {
    'projects' : ProjectLoader,
    'features' : {
        FeaturesLoader,
        updateDevelopmentStatus, 
        updateProductionStatus
    }, 
    'variables' : {
        VariablesLoader, 
    }  
}

export default loaders