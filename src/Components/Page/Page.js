import React, {useState} from 'react'
import Clicker from '../Clicker/Clicker'
import './Page.css'

function Page(){
    return(
        <div>
            <div className='navBar'>
                <h1>Holder for Things</h1>
            </div>
            <Clicker/>
        </div>
    )
}

export default Page