import { useState } from 'react'
import './App.css'
import Tile from './components/Tile'
import Winner from './components/Winner'

const App = () => {

    const [data, setData] = useState(Array(9).fill(null))
    const [isXnext, setIsXnext] = useState(true)
    const [foundWinner, setFoundWinner] = useState(false)
    const [turn, setTurn] = useState([])

    const clickHandler = (num) => {

        if (data[num] !== null) return

        const newArr = [...data]
        newArr[num] = isXnext ? 'X' : 'O'
        setData(newArr)

        setIsXnext(isXnext => !isXnext)
        
        setTurn(turn => [...turn, num])

    }

    const resetBoard = () => {
        setData(Array(9).fill(null))
        setIsXnext(true)
        setFoundWinner(false)
    }

    const undoFunction = () => {
        if(turn.length === 0) return

        const undo = turn.pop()
        
        const newArr = [...data]
        newArr[undo] = null
        setData(newArr)
        setIsXnext(isXnext => !isXnext)
        setFoundWinner(false)

        setTurn([...turn])
    }

    const props = {
        sign: data,
        clickHandler: clickHandler,
        foundWinner: foundWinner
    }

    return (
        <div>
            <div className="controls">
                <button onClick={resetBoard}>Reset</button>
                <button onClick={undoFunction}>Undo</button>
            </div>
            <div className="player">
                Player: {isXnext ? 'X' : 'O'}
            </div>
            <div className="container">
                <div className="row">
                    <Tile num={0} {...props} />
                    <Tile num={1} {...props} />
                    <Tile num={2} {...props} />
                </div>
                <div className="row">
                    <Tile num={3} {...props} />
                    <Tile num={4} {...props} />
                    <Tile num={5} {...props} />
                </div>
                <div className="row">
                    <Tile num={6} {...props} />
                    <Tile num={7} {...props} />
                    <Tile num={8} {...props} />
                </div>
            </div>
            <Winner data={data} setFoundWinner={setFoundWinner} />
            <footer>Made with 💛 by <a href="http://nirmitcodes.netlify.app" target="_blank" rel='noreferrer'>Nirmit</a></footer>
        </div>
    )
}

export default App
