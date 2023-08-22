import { useState } from 'react'
import copy from '../assets/clipboard.svg'
import copied from '../assets/copied-check.svg'
import { Icon } from '../styles/components/copiedToClipBoard.styled.jsx'


function CopyToClipboard ({ item_to_copy }) {

    const [copying, setCopying] = useState(false)

    const performCopy = async () => {
        console.log(item_to_copy)
        try {
            setCopying(true)
            await navigator.clipboard.writeText(item_to_copy)
            setTimeout(() => { setCopying(false) }, 3000)
        } catch (error) {
            console.error(error)
            console.log('Failed to write item to clipboard')
        }
    }

    return ( 
            copying ? 
            <Icon src={copied}
            alt='A green checkmark'
            /> : 
            <Icon
            onClick={performCopy} 
            src={copy} 
            alt='A clipboard icon'
            />  
        ) 
}

export default CopyToClipboard