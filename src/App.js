import { useState, useEffect } from 'react'
import './App.css'
import Board from './components/Board'
import findWinner from './helper.js'

const App = () => {

    const [data, setData] = useState(Array(9).fill(null))
    const [isXnext, setIsXnext] = useState(true)
    const [winner, setWinner] = useState(null)
    const [history, setHistory] = useState([])

    const clickHandler = (num) => {

        if (data[num] !== null || winner !== null) return

        const newArr = [...data]
        newArr[num] = isXnext ? 'X' : 'O'
        setData(newArr)

        setIsXnext(isXnext => !isXnext)

        setHistory(history => [...history, num])

    }

    useEffect(() => {
        setWinner(findWinner(data))
    }, [data])


    const resetBoard = () => {
        setData(Array(9).fill(null))
        setIsXnext(true)
        setWinner(null)
        setHistory([])
    }

    const undoFunction = () => {
        if (history.length === 0) return

        const undo = history.pop()

        const newArr = [...data]
        newArr[undo] = null
        setData(newArr)

        setIsXnext(isXnext => !isXnext)
        setWinner(null)
        setHistory([...history])
    }

    return (
        <div>

            <div className="controls">
                <button onClick={resetBoard}>RESET</button>
                <button onClick={undoFunction}>UNDO</button>
            </div>
            
            {
                winner === null ?
                    (<div className="player">
                        PLAYER: {isXnext ? 'X' : 'O'}
                    </div>) :
                    (<div className="player">
                        WINNER: {winner}
                    </div>)

            }
            
            <Board data={data} clickHandler={clickHandler} />

            <footer>Made by <a href="http://nirmitcodes.netlify.app" target="_blank" rel='noreferrer'>Nirmit</a></footer>

        </div>
    )
}

export default App
