import { HeaderStyled, NavBar, MenuItems } from "../../styles/components/header/header.styled"
import Logo from "./logo"
import AppNavigation from "./app-navigation"
import AccountOptions from "./account-options"

function Header () {
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

export default Header