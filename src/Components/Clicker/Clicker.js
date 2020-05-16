import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button'
import './Clicker.css'


function Clicker(){
    const [money,setMoney] = useState(0)
    const [fillerReward,setFillerReward] = useState(25)

    const [clickUpgrade,setClickUpgrade] = useState(1)

    const [fillerProgressBar, setFillerProgressBar] = useState(25)
    const [fillerProgress, setFillerProgress] = useState(25)

    useEffect(() => {
        if(fillerProgressBar <=0 ){
            setMoney(money + fillerReward)
            //Gonna need more dummy data for this \/ But for now, it will just set the ProgressBar to be +5 for simplicity in testing sake.
            const progressBar = fillerProgress + 5
            setFillerProgressBar(progressBar)
            setFillerProgress(progressBar)
        }
    })


    function click(){
        if(fillerProgressBar > 0){
            setFillerProgressBar(fillerProgressBar - clickUpgrade)
        }
    }

    function buyClickUpgrade1(){
        if(money >= 25){
            setClickUpgrade(clickUpgrade + 4)
            setMoney(money - 25)
        }else{
            alert(`You don't have enough money!`)
        }
    }

    function buyClickUpgrade2(){
        if(money >= 100){
            setClickUpgrade(clickUpgrade + 5)
            setMoney(money - 100)
        }else{
            alert(`You don't have enough money!`)
        }
    }
    
    return(
        <>
        <div className='clicker'>
             <img src='https://static.thenounproject.com/png/185253-200.png' alt='Money' onClick={() => click()}></img>
        </div>
        <div className='money'>
            {money}
            <div>
            {fillerProgressBar}
            </div>
        </div>
       
            <div>
        </div>
        </>
    )
}

export default Clicker