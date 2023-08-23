import { useState } from "react"
import { 
    IndividualFeatureStyled, 
    ProjectName,
    InfoChunk,
    EnabledDisabledSection,
    EnabledDisableFeatureText,
    WhiteSpan, 
    FeatureHeader, 
} from "../../styles/pages/home.styled"
import EnableXEnvironment from "../../components/enableXEnvironment"
import IndividualVariable from "./individualVariable"
import loaders from "../../loaders"

function IndividualFeature ({
    featureName, 
    feature
}) {


    return feature ? 
        <IndividualFeatureStyled>
            <FeatureHeader>
                <ProjectName><WhiteSpan>Feature / </WhiteSpan> {featureName}</ProjectName>
                <EnabledDisabledSection>
                    <EnabledDisableFeatureText>
                        Feature Production Enabled
                    </EnabledDisableFeatureText>
                    <EnableXEnvironment
                    loader_function={loaders.features.updateProductionStatus}
                    status={feature.productionEnabled}
                    destructure_response={"production_status"}
                    invalid_queries={["features", "homepage"]}
                    request_body={{
                        featureName, 
                        projectName : feature.parentProjectName, 
                    }}
                    />
                </EnabledDisabledSection>
                <EnabledDisabledSection>
                    <EnabledDisableFeatureText>
                       Feature Development Enabled
                    </EnabledDisableFeatureText>
                    <EnableXEnvironment
                    loader_function={loaders.features.updateDevelopmentStatus}
                    status={feature.developmentEnabled}
                    destructure_response={"development_status"}
                    invalid_queries={["features", "homepage"]}
                    request_body={{
                        featureName, 
                        projectName : feature.parentProjectName, 
                    }}
                    />
                </EnabledDisabledSection>
            </FeatureHeader>
            { feature.variableNames.map( (variableName, index) => {
                let variable = feature.variables[variableName]
                return <IndividualVariable
                    name={variable.name}
                    productionEnabled={variable.productionEnabled}
                    developmentEnabled={variable.developmentEnabled}
                    featureName={featureName}
                    parentProjectName={feature.parentProjectName}
                    key={index}
                />
            })}
        </IndividualFeatureStyled> : null
}

export default IndividualFeature 