import React, { useState } from 'react'
import Button from './Buttons'
import "../styles/DisplayScreen.css"

export default function DisplayScreen() {
    let[inputvalue,setInput]=useState("")
    let[result,setResult]=useState(0)

    function input(value){
        setInput((prev)=>prev+value)
    }
    const deleteInput=()=>{
        setInput(inputvalue.slice(0,-1))
    }
    const clear=()=>{
        setInput(" ")
    }
    const equal=()=>{
        try{
            setResult(eval(inputvalue)) 
        } catch(error){
            setResult("error")
        }
    }


  return (
    <>
    <div className='parent-most'>
    <div className='titlediv'>
          <h1>React-Calculator</h1>
    </div>
              <div className='parent-container'>
                  <input className='input' id='int' type="text" placeholder='0' value={inputvalue} readOnly />
                  <input className='input' id='in' type="text" placeholder='0' value={result} readOnly />

              </div>
              <div className='btn'>
                  <Button className='buttons' value={"+"} input={input} />
                  <Button className='buttons' value={"-"} input={input} />
                  <Button className='buttons' value={"*"} input={input} />
                  <Button className='buttons' value={"/"} input={input} />

                  <Button className='buttons' value={"1"} input={input} />
                  <Button className='buttons' value={"2"} input={input} />
                  <Button className='buttons' value={"3"} input={input} />
                  <Button className='buttons' value={"%"} input={input} />
                  
                  <Button className='buttons' value={"4"} input={input} />
                  <Button className='buttons' value={"5"} input={input} />
                  <Button className='buttons' value={"6"} input={input} />
                  <Button className='buttons' value={"DEL"} input={deleteInput} />

                  <Button className='buttons' value={"7"} input={input} />
                  <Button className='buttons' value={"8"} input={input} />
                  <Button className='buttons' value={"9"} input={input} />
                  <Button className='buttons'value={"Ac"} input={clear} />
                  
                  <Button className='buttons' value={"."} input={input} />
                  <Button className='buttons' value={"0"} input={input} />
                  <input id='equalto' type='button' value='=' className='equalto' onClick={equal}/>

              </div>
              


          </div></>
  )
}