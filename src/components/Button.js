import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-gray-400 text-xl text-black w-auto
         m-2 p-2 rounded-lg hover:bg-black text-white'>{name}</button>
    </div>
  )
}

export default Button