import { createContext,  } from "react"

const HomeContext = createContext(undefined)

function HomePageContext ({ home, children }) {
    return ( 
        <HomeContext.Provider value={home}>
            {children}
        </HomeContext.Provider> 
    )
}

export default HomePageContext