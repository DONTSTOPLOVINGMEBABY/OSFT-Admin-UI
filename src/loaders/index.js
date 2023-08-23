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
import PostNewProject from "./postNewProject"
import DeleteProject from "./postDeleteProject"
import PostNewFeature from "./postNewFeature"

const loaders = {
    'projects' : { 
        ProjectLoader, 
        PostNewProject,
        DeleteProject, 
    },
    'features' : {
        FeaturesLoader,
        updateDevelopmentStatus, 
        updateProductionStatus,
        PostNewFeature, 
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