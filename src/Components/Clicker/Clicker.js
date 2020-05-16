import React, {useState, useEffect} from 'react'
import './Clicker.css'


function Clicker(){
    const [money,setMoney] = useState(0)
    const [fillerReward,setFillerReward] = useState(25)

    const [clickUpgrade,setClickUpgrade] = useState(1)

    const [fillerProgressBar, setFillerProgressBar] = useState(25)
    const [fillerProgress, setFillerProgress] = useState(25)
    const [fillerLevel, setFillerLevel] = useState(1)

    useEffect(() => {
        if(fillerProgressBar <=0 ){
            setMoney(money + fillerReward)
            //Gonna need more dummy data for this but for now, it will just set the ProgressBar to be +1 for simplicity in testing sake.
            const progressBar = fillerProgress + 1
            setFillerProgressBar(progressBar)
            setFillerProgress(progressBar)
            setFillerLevel(fillerLevel + 1)
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
             <img src='https://icon2.cleanpng.com/20180410/kdq/kisspng-the-call-of-cthulhu-t-shirt-decal-sticker-logo-cthulhu-5accb53c6178f9.5007849915233651803993.jpg' alt='Necronomicon Symbol' onClick={() => click()}></img>
        </div>
        <div className='info'>
            <div>
                {money}
            </div>
            <div>
                {fillerProgressBar}
            </div>
            <div>
                Filler Level Info:{fillerLevel}
            </div>
        </div>
        
       
            <div>
        </div>
        </>
    )
}

export default Clicker