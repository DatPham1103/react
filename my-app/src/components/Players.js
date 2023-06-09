import React from 'react'
import { Players } from '../ListOfPlayers'
export default function Players() {
  return (
    <div className='container'>
      {Players.map((player) => (
        <div className='column'>
          <div className='card'>
            <img src={player.img} />
            <h3>{player.name}</h3>
            <p className='title'>{player.club}</p>
            <p><button>Details</button></p>
          </div>
        </div>
      ))}
    </div>
  )
}
