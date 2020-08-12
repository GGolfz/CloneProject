import React from 'react'
import Normal from './normal';
import Advance from './advance';
import { useStateValue } from '../StateProvider';
const Renderer = () => {
    const {type} = useStateValue()
    if(type === 'normal'){
        return (
            <>
                <Normal />
            </>
        )
    } else {
        return (
            <>
                <Advance />
            </>
        )
    }
}
export default Renderer