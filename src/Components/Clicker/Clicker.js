import React, {useState, useEffect} from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import './Clicker.css'


function Clicker(){
    const [totalEarnedMoney,setTotalEarnedMoney] = useState(0)
    const [fillerReward,setFillerReward] = useState(25)

    const [clickUpgrade,setClickUpgrade] = useState(1)

    const [fillerMachine,setFillerMachine] = useState(1)

    const [fillerProgress, setFillerProgress] = useState(0)
    const [fillerProgressBar, setFillerProgressBar] = useState(25)
    const [progress,setProgress] = useState(10)
    const [fillerLevel, setFillerLevel] = useState(1)


    useEffect(() => {
        if(fillerProgress >= fillerProgressBar ){
            setTotalEarnedMoney(totalEarnedMoney + fillerReward)
            //Gonna need more dummy data for this but for now, it will just set the ProgressBar to be +1 for simplicity in testing sake.
            setFillerProgress(0)
            setFillerProgressBar(fillerProgressBar + 1)
            setFillerLevel(fillerLevel + 1)
        }
        setProgress((fillerProgress/fillerProgressBar)*100)
        console.log('hit')

        
    }, [fillerProgress])
    
   

    function click(){
        if(fillerProgress < fillerProgressBar){
            setFillerProgress(fillerProgress + 1)
        }
    }
    
    return(
        <>
        <div className='clicker'>
             <img src='https://icon2.cleanpng.com/20180410/kdq/kisspng-the-call-of-cthulhu-t-shirt-decal-sticker-logo-cthulhu-5accb53c6178f9.5007849915233651803993.jpg' alt='Necronomicon Symbol' onClick={() => click()}></img>
        </div>

        <div className='info'>
            <div>
                {totalEarnedMoney}
            </div>
            <div>
                {fillerProgress}/{fillerProgressBar}
            </div>
            <div>
                Filler Level Info:{fillerLevel}
            </div>
        </div>

        <div className='progressBar'>
            <ProgressBar percentage={progress}/>
        </div>

       
        </>
    )
}

export default Clicker