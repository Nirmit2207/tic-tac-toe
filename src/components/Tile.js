import React from 'react'

const Tile = ({ num, data, clickHandler }) => {

  return (
    <div className='tile' onClick={() => clickHandler(num)}>
      <div className={`sign ${data[num]}`}>
        {data[num]}
      </div>
    </div>
  )
}

export default Tile