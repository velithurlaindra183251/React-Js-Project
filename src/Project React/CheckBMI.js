import React, { useState } from 'react';
import '../Project React/BMI.css'; 
import pic from '../images/bmi.jpg'
const BMICalculator = () => {
  
const [height, setHeight] = useState('');
const [weight, setWeight] = useState('');
const [bmi, setBMI] = useState(null);
const [bmiCategory, setBMICategory] = useState('');
const calculateBMI = () => {
const heightInMeters = height / 100;
const bmiValue = weight / (heightInMeters * heightInMeters);
const roundedBMI = bmiValue.toFixed(2); 

setBMI(roundedBMI);
 let category = '';

    if (bmiValue < 18.5) {
      category = 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      category = 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue < 30) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
    setBMICategory(category);
  };
 
  return (
    
    <div className="bmi-container"  style={{backgroundColor:'red'}} >
      
      <div className='row'>
        <div className='col-md-12'></div>
        
      <h2 id='txt'>BMI Calculator</h2>
      </div>

      <div className="input-container">
        <label id='l'><b>Height (cm)</b>:</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>

      <div className="input-container">

        <label id='l'><b>Weight (kg)</b>:</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>

      <button style={{alignContent:'right'}} onClick={calculateBMI}>Calculate BMI</button>
      {bmi !== null && (

        
        <div className="result-container">

          <h3>Your BMI is: {bmi}</h3>
          <p>Category: {bmiCategory}</p>
        </div>

      )}
<div className='row'>
  <div className='col-md-12 p-4'></div>
  <img src={pic} alt='' id='img'></img>

</div>
    </div>
    

  );
};

export default BMICalculator;

 