import { useState, useEffect } from "react"
import { useAuth } from "../../context/authContext"
import { useQuery } from "react-query"
import { 
    HomePageStyled, 
    WhiteSpan, 
    MainTitle, 
    NoProjects, 
    NoFeatures, 
} from "../../styles/pages/home.styled"
import Spinner from "../../components/spinners/spinner"
import loaders from "../../loaders"
import { useLocation } from "react-router-dom"
import IndividualFeature from "./individualFeature"



function HomePage () {
    
    const { user } = useAuth()
    const { state } = useLocation()
    const [displayFeatures, setDisplayFeatures] = useState([])
    const [showEmptyProjectsPage, setShowEmptyProjectsPage] = useState(false)
    const [showEmptyFeaturesMessage, setShowEmptyFeaturesMessage] = useState(false)

    const { isLoading, isError, data, error } = useQuery({
        queryKey : ['homepage'], 
        queryFn : () =>  state ? 
            loaders["home-page"].FetchHomePage(user, state) : 
            loaders["home-page"].FetchHomePage(user) 
    })

    useEffect( () => {
        if (data && data.featureNames && data.featureNames.length > 0) {
            setDisplayFeatures(data.featureNames)
            setShowEmptyProjectsPage(false)
            setShowEmptyFeaturesMessage(false)
        }
        else if (data && data.featureNames && data.featureNames.length === 0) {
            setShowEmptyFeaturesMessage(true)
        }
        else if (data && data.noProjects){
            setShowEmptyProjectsPage(true)
        }
    }, [data])

    if (isLoading) {
        return <Spinner/>
    }

    if (isError){
        console.error(error)
        return <div>Le error</div>
    }


    return ( 
        <HomePageStyled>
            { showEmptyProjectsPage ? 
                <NoProjects>You Currently Have no Projects</NoProjects> : 
                <MainTitle><WhiteSpan>Project / </WhiteSpan>{data.projectName}</MainTitle> 
            } 
            {  showEmptyFeaturesMessage ? 
                <NoFeatures>You currently have no features for this project</NoFeatures> 
                : null
            }
            { displayFeatures.map((featureName, id) => {
                let feature = data["features"][featureName] 
                return <IndividualFeature
                featureName={featureName}
                feature={feature}
                key={id}
                />
            })} 
        </HomePageStyled> 
    ) 
}

export default HomePage