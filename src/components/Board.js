import React from 'react'
import Tile from './Tile'

const Board = (props) => {
    return (
        <div className="board">
                <Tile num={0} {...props} />
                <Tile num={1} {...props} />
                <Tile num={2} {...props} />
                <Tile num={3} {...props} />
                <Tile num={4} {...props} />
                <Tile num={5} {...props} />
                <Tile num={6} {...props} />
                <Tile num={7} {...props} />
                <Tile num={8} {...props} />
        </div>
    )
}

export default Board