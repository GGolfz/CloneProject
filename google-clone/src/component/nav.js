import React from 'react'
import { useStateValue } from '../StateProvider'
import { actionType } from '../reducer';

const Nav = ()=>{
    const [{lang,type},dispatch] = useStateValue();
    const changeLang = ()=> {
        let val = lang==='th'?'en':'th'
        dispatch({
            type: actionType.CHANGE_LANG,
            value: val
        })
    }
    const changeType = ()=> {
        let val = type==='normal'?'advance':'normal'
        dispatch({
            type: actionType.CHANGE_TYPE,
            value: val
        })
    }
    const buttonStyle = {
        margin: '1% 1% 1% 0%',
        padding: '1%',
        background: '#eeeeee',
        cursor: 'pointer'
    }
    const navStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100vw',
        height: '10vh', 
    }
    return (
        <>  
            <div style={navStyle}>
                <div style={buttonStyle} onClick={changeLang}>
                    {lang==='th'?'EN':'TH'}
                </div>
                <div style={buttonStyle} onClick={changeType}>
                    {type==='normal'?'Advance':'Normal'}
                </div>
            </div>
        </>
    )
}
export default Nav;