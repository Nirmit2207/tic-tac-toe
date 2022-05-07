import React from 'react'

const Winner = ({ data }) => {

    const winCriteria = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    const isWinner = () => {
        
        for (let i = 0; i < winCriteria.length; i++) {
            const one = winCriteria[i][0]
            const two = winCriteria[i][1]
            const three = winCriteria[i][2]
            if (data[one] !== null && data[one] === data[two] && data[one] === data[three]) {
                console.log(true)
                return data[one];
            }
        }
        console.log(false)
        return null
    }

    const winner = isWinner()

    return (
        <div className='winner'>{winner !== null && (<h1>Winner: {winner}</h1>)}</div>
    )
}

export default Winner