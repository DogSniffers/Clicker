import React, {useState} from 'react'
import './ProgressBar.css'

function ProgressBar(props){
    return(
        <div className='progressBar'>
            <div className='filler' style={{width:`${props.percentage}%`}}>
            </div>
        </div>
    )
}

export default ProgressBar