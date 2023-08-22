import ProjectLoader from "./project.data"
import FeaturesLoader from "./fetchFeatures"
import { 
    updateDevelopmentStatus, 
    updateProductionStatus 
} from "./postUpdateFeatureStatus"
import { 
    updateVariableDevStatus, 
    updateVariableProdStatus, 
} from '../loaders/postUpdateVariableStatus'
import VariablesLoader from "./fetchVariables"
import FetchApiKeys from "./fetchApiKeys"
import FetchHomePage from "./fetchHomePage" 

const loaders = {
    'projects' : ProjectLoader,
    'features' : {
        FeaturesLoader,
        updateDevelopmentStatus, 
        updateProductionStatus
    }, 
    'variables' : {
        VariablesLoader, 
        updateVariableDevStatus, 
        updateVariableProdStatus, 
    }, 
    'api-keys' : {
        FetchApiKeys, 
    }, 
    'home-page' : {
        FetchHomePage
    }
}

export default loaders