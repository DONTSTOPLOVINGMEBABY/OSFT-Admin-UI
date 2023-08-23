import { forwardRef, useEffect } from "react";
import { 
    AreYouSureStyled, 
    AreYouSureMainContent, 
    YesButton, 
    NoButton,  
    TitleMessage
} from "../styles/components/areYouSure.styled";
import AdjustableSpinner from "./spinners/adjustableSizeSpinner";

const AreYouSure = forwardRef(function AreYouSure(props, ref){

    const no = (e) => {
        e.stopPropagation()
        ref.current.close()
    }

    const yes = () => {
        props.execute()
    }
    
    return (
        <AreYouSureStyled ref={ref}>
            <TitleMessage>
                ARE YOU SURE?
            </TitleMessage>
            <AreYouSureMainContent>
                <YesButton onClick={yes}>
                    Yes { 
                    props.loading ? 
                    <AdjustableSpinner
                    height='20'
                    width='20'
                    radius='5'
                    /> :  
                    null
                }
                </YesButton>
                <NoButton onClick={no}>
                    No
                </NoButton>
            </AreYouSureMainContent>
        </AreYouSureStyled>
    )    
})

export default AreYouSure