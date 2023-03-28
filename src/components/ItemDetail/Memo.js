
import { memo } from 'react'


const Memo = memo(() => {

    for (let i = 1; i <= 1000; i++) {
        console.log("Me rendericé " + i)
    }

    return (
        <div>
            <h2>Soy un memo</h2>
        </div>
    )
})

export default Memo