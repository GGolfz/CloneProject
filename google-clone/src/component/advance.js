import React, {useState} from 'react'
import { useStateValue } from '../StateProvider'
const Advance = ()=>{
    const [{lang},dispatch] = useStateValue()
    const [value1,setVal1] = useState('')
    const [value2,setVal2] = useState('')
    const [value3,setVal3] = useState('')
    const [value4,setVal4] = useState('')
    const [value5,setVal5] = useState('')
    const [value6,setVal6] = useState('')
    let header = ''
    let subject = ''
    let val1 = ''
    let val2 = ''
    let val3 = ''
    let val4 = ''
    let val5 = ''
    let val6 = ''
    let buttonText = ''
    if(lang === 'th'){
        header = 'การค้นหาขั้นสูง'
        subject = 'ค้นหาหน้าเว็บที่มี...'
        val1 = 'ทุกคำเหล่านี้:'
        val2 = 'คำหรือวลีที่ตรงตามนี้:'
        val3 = 'คำใดๆ เหล่านี้:'
        val4 = 'ไม่มีคำเหล่านี้:'
        val5 = 'จำนวนตั้งแต่:'
        val6 = 'ถึง'
        buttonText = 'ค้นหาขั้นสูง'
    } else {
        header = 'Advance Search'
        subject = 'Find pages with...'
        val1 = 'all these words:'
        val2 = 'this exact word or phrase:'
        val3 = 'any of these words:'
        val4 = 'none of these words:'
        val5 = 'numbers ranging from:'
        val6 = 'to'
        buttonText = 'Advance Search'
    }
    const handleSubmit = () => {
        window.location.href =`https://www.google.com/search?as_q=${value1}&as_epq=${value2}&as_oq=${value3}&as_eq=${value4}&as_nlo=${value5}&as_nhi=${value6}`
    }
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            window.location.href =`https://www.google.com/search?as_q=${value1}&as_epq=${value2}&as_oq=${value3}&as_eq=${value4}&as_nlo=${value5}&as_nhi=${value6}`
        }
    }
    const headerStyle = {
        fontSize: '24px',
        color: '#d93025',
        padding: '1.5%',
        marginBottom: '2%',
        borderBottom: '1px solid #cccccc'
    }
    const subjectStyle = {
        fontSize: '18px',
        padding: '1.5%',
    }
    const textStyle = {
        fontSize: '16px',
        padding: '1.5%',
    }
    const sectionStyle = {
        display: 'flex'
    }
    const leftStyle = {
        width: '12%',
        paddingLeft: '1.5%'
    }
    const rightStyle= {
        width: '90%'
    }
    const inputStyle = {
        width: '30%',
        display: 'flex',
        paddingBottom : '1.5%'
    }
    const innerInputStyle = {
        padding: '1%',
        width: '100%'
    }
    const buttonSectionStyle = {
        display: 'flex',
        width: '39vw',
        justifyContent: 'flex-end'
    }
    const buttonStyle = {
        background: '#4d90fe',
        padding: '1% 2%',
        border: '1px solid #3079ed',
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize :'14px',
        cursor: 'pointer'
    }
    return (
        <>
            <div>
                <div style={headerStyle}>{header}</div>
                <div style={subjectStyle}>{subject}</div>
                <div style={sectionStyle}>
                    <div style={leftStyle}>
                        <div style={textStyle}>
                            {val1}
                        </div>
                    </div>
                    <div style={rightStyle}>
                        <div style={inputStyle}>
                            <input style={innerInputStyle} value={value1} onKeyDown={handleEnter} onChange={(e)=>{setVal1(e.target.value)}} type="text" />
                        </div>
                    </div>
                </div>
                
                <div style={sectionStyle}>
                    <div style={leftStyle}>
                        <div style={textStyle}>
                            {val2}
                        </div>
                    </div>
                    <div style={rightStyle}>
                        <div style={inputStyle}>
                            <input style={innerInputStyle} value={value2} onKeyDown={handleEnter} onChange={(e)=>{setVal2(e.target.value)}} type="text" />
                        </div>
                    </div>
                </div>
                
                <div style={sectionStyle}>
                    <div style={leftStyle}>
                        <div style={textStyle}>
                            {val3}
                        </div>
                    </div>
                    <div style={rightStyle}>
                        <div style={inputStyle}>
                            <input style={innerInputStyle} value={value3} onKeyDown={handleEnter} onChange={(e)=>{setVal3(e.target.value)}} type="text" />
                        </div>
                    </div>
                </div>
                
                <div style={sectionStyle}>
                    <div style={leftStyle}>
                        <div style={textStyle}>
                            {val4}
                        </div>
                    </div>
                    <div style={rightStyle}>
                        <div style={inputStyle}>
                            <input style={innerInputStyle} value={value4} onKeyDown={handleEnter} onChange={(e)=>{setVal4(e.target.value)}} type="text" />
                        </div>
                    </div>
                </div>    
                
                <div style={sectionStyle}>
                    <div style={leftStyle}>
                        <div style={textStyle}>
                            {val5}
                        </div>
                    </div>
                    <div style={rightStyle}>
                        <div style={inputStyle}>
                            <input style={innerInputStyle} value={value5} onKeyDown={handleEnter} onChange={(e)=>{setVal5(e.target.value)}} type="text" />
                            <span style={{margin:'0% 2%'}}>{val6}</span>
                            <input style={innerInputStyle} value={value6} onKeyDown={handleEnter} onChange={(e)=>{setVal6(e.target.value)}} type="text" />
                        </div>
                    </div>
                </div>
                <div style={buttonSectionStyle}>
                    <div style={buttonStyle} onClick={handleSubmit}>
                        {buttonText}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Advance