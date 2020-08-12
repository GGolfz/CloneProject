import React, {useState} from 'react'
import { useStateValue } from '../StateProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const Normal = ()=> {
    const {lang} = useStateValue()
    const [search,setSearch] = useState('')
    let text =''
    if(lang === 'th'){
        text = 'ค้นหาด้วย Google'
    } else {
        text = 'Search Google'
    }
    const handlePress = (e)=>{
        if (e.key === 'Enter') {
            window.location.href=`https://www.google.com/search?source=hp&q=${search}`
        }
    }
    const searchSubmit = ()=>{
        window.location.href=`https://www.google.com/search?source=hp&q=${search}`
    }
    const visit = ()=>{
        window.location.href="https://ggolfz.github.io/portfolio"
    }
    const handleChange = (e)=>{
        setSearch(e.target.value)
    }
    const normalStyle = {
        width: "100vw",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
    }
    const inputStyle = {
        width: "500px",
        padding: "1%",
        borderRadius: "200px",
        border: "1px solid #7b7b7b"
    }
    const inputInnerStyle = {
        border: "none",
        fontSize: "16px",
        height: "100%",
        width: "80%"
    }
    const searchStyle = {
        padding: "0% 2%"
    }
    const searchButtonStyle = {
        margin: "1%",
        padding: '0.5%',
        background: '#dedede',
        color: '#333333',
        fontSize: '14px',
        cursor: 'pointer'
    }
    const sectionStyle = {
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        padding: '1.5% 0%'
    }
    return (
        <>
            <div style={sectionStyle}>
                <img alt="logo" src="https://ggolfz.github.io/portfolio/logo.png" width="150px"/>
            </div>
            <div className="normal" style={normalStyle}>
                <div style={inputStyle}>
                    <FontAwesomeIcon icon={faSearch} color="#7b7b7b" style={searchStyle}/>
                    <input type="text" id="text" style={inputInnerStyle} onChange={handleChange} onKeyDown={handlePress} value={search}/>
                </div>
            </div>
            <div style={sectionStyle}>
                <div style={searchButtonStyle} onClick={searchSubmit}>
                    {text}
                </div>
                <div style={searchButtonStyle} onClick={visit}>
                    ggolfz.github.io                    
                </div>
            </div>
        </>
    )
}
export default Normal;