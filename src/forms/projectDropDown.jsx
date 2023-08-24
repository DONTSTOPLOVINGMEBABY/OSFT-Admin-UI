// move project drop down to its own comp 
import Select from "react-select"
import loaders from "../loaders"
import { useQuery } from "react-query"
import { useEffect, useState } from "react"

function ProjectDropDown ({
    setProjectDropDownValue
}) {

    const [allProjects, setAllProjects] = useState([])
    const { data, isLoading, error } = useQuery(['projects'], loaders.projects.ProjectLoader)

    useEffect(() => {
        if (data){
            let options = []
            data.names.forEach( name => {
                options.push({
                    value: name, 
                    label : name, 
                })
            })
            setAllProjects(options)
        }
    }, [data])

    return (
        <Select 
            options={allProjects}
            placeholder={"Pick a Project"}
            styles={{
                container : (baseStyles, state) => ({
                    ...baseStyles, 
                    width : '100%',
                    margin : '12px', 
                })
            }}
            onChange={(selectedOption) => setProjectDropDownValue(selectedOption.value)}
        />
    )

}

export default ProjectDropDown
