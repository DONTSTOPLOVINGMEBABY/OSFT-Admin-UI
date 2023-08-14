import { AppNavigationStyled, NavLink } from "../../styles/header/app-navigation.styled"

function AppNavigation () {
    return (
        <AppNavigationStyled>
            <NavLink to='projects'>Projects</NavLink>
            <NavLink to='features'>Features</NavLink>
            <NavLink to='variables'>Variables</NavLink>
            <NavLink to='api-keys'>API Keys</NavLink>
        </AppNavigationStyled>
    )
}

export default AppNavigation