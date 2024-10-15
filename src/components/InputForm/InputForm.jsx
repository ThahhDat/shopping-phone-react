import React, { useState } from 'react'
import { WrapperInputStyler } from './style'

const InputForm = (props) =>{
  
    const {valueInput,setValueInput} = useState('')
    const { placeholder ='datdat0704@gmail.com', ...rests } = props
  return (
     <WrapperInputStyler placeholder={placeholder} valueInput={valueInput} {...rests}/>
  )
}

export default InputForm