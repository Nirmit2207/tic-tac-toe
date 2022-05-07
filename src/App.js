import { useState } from 'react'
import './App.css'
import Tile from './components/Tile'
import Winner from './components/Winner'

const App = () => {

    const [data, setData] = useState(Array(9).fill(null))
    const [isXnext, setIsXnext] = useState(true)

    const clickHandler = (num) => {

        if (data[num] !== null) return

        const newArr = [...data]
        newArr[num] = isXnext ? 'X' : 'O'
        setData(newArr)

        setIsXnext(isXnext => !isXnext)

    }

    const resetBoard = () => {
        setData(Array(9).fill(null))
    }

    const props = {
        sign: data,
        clickHandler: clickHandler,
    }

    return (
        <div>
            <div className="reset">
                <button onClick={resetBoard}>Reset</button>
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
            <Winner data={data} />
        </div>
    )
}

export default App
