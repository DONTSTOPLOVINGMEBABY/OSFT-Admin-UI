import { useState, useEffect } from "react"
import { useAuth } from "../../context/authContext"
import { useQuery } from "react-query"
import { 
    HomePageStyled, 
    ProjectName, 
    WhiteSpan, 
} from "../../styles/pages/home.styled"
import Spinner from "../../components/spinners/spinner"
import loaders from "../../loaders"
import { useLocation } from "react-router-dom"
import IndividualFeature from "./individualFeature"


function HomePage () {
    
    const { user } = useAuth()
    const { state } = useLocation()
    const [displayFeatures, setDisplayFeatures] = useState([])

    const { isLoading, isError, data, error } = useQuery({
        queryKey : ['homepage'], 
        queryFn : () =>  state ? 
            loaders["home-page"].FetchHomePage(user, state) : 
            loaders["home-page"].FetchHomePage(user) 
    })

    useEffect( () => {
        if (data) {
            setDisplayFeatures(data.featureNames)
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
            <ProjectName><WhiteSpan>Project / </WhiteSpan>{data.projectName}</ProjectName>
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