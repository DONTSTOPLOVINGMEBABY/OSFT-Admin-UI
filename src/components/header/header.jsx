import { HeaderStyled, NavBar, MenuItems } from "../../styles/components/header/header.styled"
import Logo from "./logo"
import AppNavigation from "./app-navigation"
import AccountOptions from "./account-options"
import { useAuth } from '../../context/authContext'
 
function LoggedInHeader () {
    return ( 
        <HeaderStyled>
            <NavBar>
                <Logo />
                <MenuItems>
                    <AppNavigation />
                    <AccountOptions />
                </MenuItems>
            </NavBar>
        </HeaderStyled>
    )
}

function LoggedOutHeader () {
    return ( 
        <HeaderStyled>
            <NavBar>
                <Logo />
            </NavBar>
        </HeaderStyled>
    )
}


function Header () {
    
    const { user } = useAuth()

    return user ? <LoggedInHeader/> : <LoggedOutHeader/>
}

export default Header