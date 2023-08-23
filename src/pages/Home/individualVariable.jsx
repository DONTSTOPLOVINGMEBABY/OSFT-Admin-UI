import EnableXEnvironment from "../../components/enableXEnvironment"
import { 
    IndividualVariableStyled, 
    ProjectName, 
    WhiteSpan, 
    EnabledDisabledSection,
    EnabledDisableFeatureText, 
} from "../../styles/pages/home.styled"
import loaders from "../../loaders"

function IndividualVariable ({
    name, 
    productionEnabled, 
    developmentEnabled, 
    featureName, 
    parentProjectName, 
}) {
    return (
        <IndividualVariableStyled>
            <ProjectName> <WhiteSpan>Variable / </WhiteSpan> {name} </ProjectName>
            <EnabledDisabledSection>
                <EnabledDisableFeatureText>
                    Variable Production Enabled
                </EnabledDisableFeatureText>
                <EnableXEnvironment
                    loader_function={loaders.variables.updateVariableProdStatus}
                    status={productionEnabled}
                    destructure_response={'productionEnabled'}
                    invalid_queries={["variables", "homepage"]}
                    request_body={{
                        variableName: name, 
                        parentFeatureName: featureName, 
                        parentProjectName, 
                    }}
                />
            </EnabledDisabledSection>
            <EnabledDisabledSection>
                <EnabledDisableFeatureText>
                    Variable Disabled Enabled
                </EnabledDisableFeatureText>
                <EnableXEnvironment
                    loader_function={loaders.variables.updateVariableDevStatus}
                    status={developmentEnabled}
                    destructure_response={'developmentEnabled'}
                    invalid_queries={["variables", "homepage"]}
                    request_body={{
                        variableName: name, 
                        parentFeatureName: featureName, 
                        parentProjectName, 
                    }}
                />
            </EnabledDisabledSection>
        </IndividualVariableStyled>
    )
}

export default IndividualVariable