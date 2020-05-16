import React, {useState} from 'react'

function Store(props){
    const [spentMoney,setSpentMoney] = useState(25)
    return(
        <>
        <div>
            Store
        </div>

        <div>
            Money:{props.money - spentMoney}
        </div>
        </>
    )
}

export default Store