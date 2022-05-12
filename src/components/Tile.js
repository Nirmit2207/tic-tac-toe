import React from 'react'

const Tile = ({ num, data, clickHandler }) => {

  const tileClicked = () => {
    clickHandler(num)
  }

  return (
    <div className='tile' onClick={tileClicked}>
      <div className="sign">
        {data[num]}
      </div>
    </div>
  )
}

export default Tile