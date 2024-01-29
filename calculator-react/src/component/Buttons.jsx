import React from 'react'

export default function Button({value,input}) {
  return (
    <div>
        <button onClick={()=>{input(value)}}>{value}</button>

    </div>
  )
}