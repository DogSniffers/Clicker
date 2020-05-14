import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import './Clicker.css'


function Clicker(){
    const [money,setMoney] = useState(0)
    const [clickUpgrade,setClickUpgrade] = useState(0)
    const [clickUpgradeMax,setClickUpgradeMax] = useState(false)
    const [filler1,setFiller1] = useState(1)


    // setInterval(() => {
    //     setMoney(money + (filler1*10))

    // }, 5000)

    function click(){
        setMoney(money+1+clickUpgrade)
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
        </div>
        <div className='store'>
            <h2>Store</h2>
            <div>
                <p>Upgrades:</p>
                {clickUpgrade === 0?(
                <div>
                    $25<Button onClick={() => buyClickUpgrade1()}>Click Upgrade 1</Button>
                </div>

                ):(
                    null
                )}
                {clickUpgrade === 4?(
                <div>
                    $100<Button onClick={() => buyClickUpgrade2()}>Click Upgrade 2</Button>
                </div>

                ):(
                    null
                )}
                {clickUpgradeMax === true?(
                    <p>No more Available Upgrades!</p>

                ):(
                    null
                )}
            </div>
            <div>

            </div>
        </div>
        </>
    )
}

export default Clicker