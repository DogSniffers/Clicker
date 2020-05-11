import React, {useState} from 'react'
import Store from '../Store/Store'
import './Clicker.css'

function Clicker(){
    const [money,setMoney] = useState(0)
    return(
        <>
        <div className='clicker'>
             <img src='https://static.thenounproject.com/png/185253-200.png' alt='Money' onClick={() => setMoney(money + 1)}></img>
        </div>
        <div className='money'>
            {money}
        </div>
        <div>
            <Store/>
        </div>
        </>
    )
}

export default Clicker