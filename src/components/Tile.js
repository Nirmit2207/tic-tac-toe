import React from 'react'

const Tile = ({ num, sign, clickHandler }) => {

  // const clickHandler = () => {
  //   console.log(num)
  // }

  return (
    <div className='tile' onClick={() => clickHandler(num)}>{sign[num]}</div>
  )
}

export default Tile