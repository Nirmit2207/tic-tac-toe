import React from 'react'

const Tile = ({ num, sign, clickHandler, foundWinner }) => {

  const tileClicked = () => {
    if(foundWinner) return
    clickHandler(num)
  }

  return (
    <div className='tile' onClick={tileClicked}>
      <div className="sign">
        {sign[num]}
      </div>
    </div>
  )
}

export default Tile