import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list=["All","Gaming","Sports","Live","News","Cooking","T-Series","Auditons","Indian classical music",
"Computer programming","Shopping","Recemtly uploaded","Watched","New to you"];
// console.log(list)
  return (
    <div className='flex'>
      {/* <Button name="All"/> */}

      {/* {list?.map((item,index)=>{
        <Button  key={index} name={item}/>
      })} */}
       <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Soccer" />
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="Cricket" />
      <Button name="Valentines" />
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="Cricket" />
    </div>
  )
}

export default ButtonList