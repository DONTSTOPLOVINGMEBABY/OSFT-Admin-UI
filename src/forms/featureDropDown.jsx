// move project drop down to its own comp 
import Select from "react-select"
import loaders from "../loaders"
import { useQuery } from "react-query"
import { useEffect, useState } from "react"
import { useAuth } from "../context/authContext"
import AdjustableSpinner from "../components/spinners/adjustableSizeSpinner"

function FeatureDropDown ({
    projectSelected, 
    setFeatureDropDownValue
}) {

    const { user } = useAuth()
    const [allFeatures, setAllFeatures] = useState([])
    const [selectedValue, setSelectedValue] = useState(null)

    const { isLoading, isError, data, error } = useQuery(
        ["features-dropdown", projectSelected], 
        () => loaders.features.FetchFeaturesByProjectName(user, projectSelected), 
        {
            enabled: !!projectSelected
        }
    )
    
    useEffect(() => {
        if (data){
            let options = []
            data.names.forEach( name => {
                options.push({
                    value: name, 
                    label : name, 
                })
            })
            setAllFeatures(options)
        }
    }, [data])

    useEffect(() => {
        setSelectedValue(null)
    }, [projectSelected])

    if (isLoading) {
        return ( 
            <AdjustableSpinner
            height={'20'}
            width={'20'}
            radius={'5'}
            /> 
        ) 
        }

    return (
        <Select
            value={selectedValue}
            options={allFeatures}
            placeholder={"Pick a Feature"}
            styles={{
                container : (baseStyles, state) => ({
                    ...baseStyles, 
                    width : '100%', 
                    margin : '12px'
                })
            }}
            onChange={(selectedOption) => { 
                setSelectedValue(selectedOption)
                setFeatureDropDownValue(selectedOption.value) 
            }}
        />
    )

}

export default FeatureDropDown
