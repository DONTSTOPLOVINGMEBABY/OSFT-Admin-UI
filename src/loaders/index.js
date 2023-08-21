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
    }  
}

export default loaders