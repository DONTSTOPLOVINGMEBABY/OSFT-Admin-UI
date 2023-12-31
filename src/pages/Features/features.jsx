import { 
    FeaturePageStyled, 
    AllFeatures, 
} from "../../styles/pages/features.styled"
import NewFeature from "../../forms/newFeature/newFeature"
import DisplayFlagContentHeader from "../../components/displayFlagContentHeader/displayFlagContentHeader"
import { FeatureInfoBody } from "../../styles/pages/features.styled"
import { useState, useEffect, useRef } from "react"
import { useQuery } from "react-query"
import { useAuth } from "../../context/authContext"
import loaders from "../../loaders"
import Spinner from "../../components/spinners/spinner"
import FeatureInfoTitles from "./featureInfoTitles"
import SingleFeature from "./singleFeature"

 
function Features () {

    const [displayFeatures, setDisplayFeatures] = useState([])
    const { user } = useAuth()
    const newFeatureRef = useRef()

    const { isLoading, isError, data, error } = useQuery({
        queryKey : ['features'], 
        queryFn: () => loaders.features.FeaturesLoader(user)
    })

    useEffect( () => {
        if (data){
            setDisplayFeatures(data.names)
        }
    }, [data])

    if (isLoading){
        return <Spinner/>
    }

    if (isError) {
        return <div>Le error</div>
    }

    const newFeature = () => {
        newFeatureRef.current.showModal()
    }

    return (
        <FeaturePageStyled>
            <DisplayFlagContentHeader
            item_name='Features'
            num_items={data.numFeatures}
            set_function={setDisplayFeatures}
            initialSearchSpace={data.names}
            buttonModal={newFeature}
            buttonMessage='New feature'    
            />
            <FeatureInfoBody>
                <FeatureInfoTitles/>
                <AllFeatures>
                    { displayFeatures.map( ( featureName, index) => {
                        let grabFeature = data[featureName]
                        return (
                            grabFeature ? <SingleFeature
                                name={grabFeature.name}
                                variables={grabFeature.variables}
                                parentProject={grabFeature.parentProjectName}
                                created={grabFeature.createdAt}
                                productionEnabled={grabFeature.productionEnabled}
                                developmentEnabled={grabFeature.developmentEnabled}
                                key={index}
                            /> : null
                        )
                    })}                      
                </AllFeatures>
            </FeatureInfoBody>
            <NewFeature ref={newFeatureRef}/>
        </FeaturePageStyled>
    )
}

export default Features