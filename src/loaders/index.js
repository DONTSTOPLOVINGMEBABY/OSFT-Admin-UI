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
import DeleteFeature from "./postDeleteFeature"
import DeleteVariable from "./postDeleteVariable"
import FetchFeaturesByProjectName from "./fetchFeaturesByProjectName"
import PostMakeNewVariable from "./postMakeNewVariable"
import LogoutUser from "./postLogoutUser"

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
        DeleteFeature, 
        FetchFeaturesByProjectName,  
    }, 
    'variables' : {
        VariablesLoader, 
        updateVariableDevStatus, 
        updateVariableProdStatus,
        DeleteVariable, 
        PostMakeNewVariable, 
    }, 
    'api-keys' : {
        FetchApiKeys, 
    }, 
    'home-page' : {
        FetchHomePage
    }, 
    "auth" : {
        LogoutUser,
    }
}

export default loaders