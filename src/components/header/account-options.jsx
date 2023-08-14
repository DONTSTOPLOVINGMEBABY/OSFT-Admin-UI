import profile_icon from '../../assets/profile-icon.svg'
import down_arrow from '../../assets/down-arrow.svg'
import { AccountOptionsStyled, DownArrow, ProfilePhoto } from '../../styles/header/account-options.styled'

function AccountOptions () {

    return ( 
        <AccountOptionsStyled>
            <ProfilePhoto src={profile_icon} alt='a-small-profile-svg'/>
            <DownArrow src={down_arrow} alt='a-down-arrow'/>
        </AccountOptionsStyled>
    ) 
}

export default AccountOptions