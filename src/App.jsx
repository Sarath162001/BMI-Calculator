import { useState, useEffect } from 'react';
import './App.css';


export const App = () => {

  const[height, setHeight]= useState("")
  const[weight, setWeight]= useState("")
  const[bmi, setBmi]= useState(null)
  const[bmistatus, setBmiStatus]= useState("")
  const[errormessage, setErrorMessage]=useState("")

  const calculateBmi =() => {
    const isValidHeight = /^\d*$/.test(height)
    const isValidWeight = /^\d*$/.test(weight)
    if (isValidHeight && isValidWeight){
      const heightInMeters= height/100
      const bmiValue = weight / (heightInMeters * heightInMeters)
      setBmi (bmiValue . toFixed(2))
      if (bmiValue < 18.5) {
        setBmiStatus("Underweight")
      } 
      else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal Weight")
      }
      else if (bmiValue >= 24.9 && bmiValue < 29.9) {
        setBmiStatus("Overweight")
      } 
      else{
        setBmiStatus("obese")
      }
      setErrorMessage ("")
    } 
      else{
        setBmi(null)
        setBmiStatus("")
        setErrorMessage ("Please enter a valid data (in Numeric)")
      }
      
  }
  const clear = () => {
    setBmi(null)
    setBmiStatus("")
    setHeight("")
    setWeight("")

  }



  return (
    <>
    <div className='BMI_container'>
      <div className="box"></div>
      <div className="data">
        <h1>BMI Calculator</h1>
        {errormessage && <p className='error'>{errormessage}</p>}
        <div className="input_container">
          <label htmlFor="height">Height in(cm)</label>
          <input type="text" id='height' value={height} onChange={(e) => setHeight(e.target.value)}/>
          </div>
        <div className="input_container">
          <label htmlFor="weight" >Weight in(kg)</label>
          <input type="text" id='weight' value={weight} onChange={(e) => setWeight(e.target.value)}/>
          </div>
          <button className='button' onClick={calculateBmi}>Calculate BMI</button>
          <button onClick={clear}>Clear All</button>
          <div className="result">
            <p>Your BMI is: {bmi}</p>
            <p>Status: {bmistatus}</p>

          </div>
      </div>
    </div>
    
    </>
  )
}
