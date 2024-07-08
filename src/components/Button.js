import React from 'react'

const Button = ({name,getCategory}) => {
  return (
    <div>
        <button className='bg-gray-400 text-xl text-black w-auto
         m-2 p-2 rounded-lg hover:bg-black text-white' 
         onClick={() => getCategory(name)}>{name}</button>
    </div>
  )
}

export default Button