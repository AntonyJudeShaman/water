import React from 'react';
import './App.css';

function App() {
  return (
    <div className="form-container rounded App">
      <form className='bgcolor '>
        <p  className='tiltneon'>Water Quality Prediction</p>
        <label className='top'></label>
        <input
          name="name"
            type="text"
          placeholder="pH Value"
          
        />
        <label className='top'></label>
        <input
          name="hardness"
            type="text"
          placeholder="Hardness"
          
        />
         <label className='top'></label>
        <input
          name="solids"
            type="text"
          placeholder="Solids"
          
        />
         <label className='top'></label>
        <input
          name="Chloramines"
            type="text"
          placeholder="Chloramines"
          
        />
         <label className='top'></label>
        <input
          name="sulfate"
            type="text"
          placeholder="Sulphate"
          
        />
         <label className='top'></label>
        <input
          name="conductivity"
            type="text"
          placeholder="Conductivity"
          
        />
         <label className='top'></label>
        <input
          name="carbon"
            type="text"
          placeholder="Organic carbon"
          
        />
         <label className='top'></label>
        <input
          name="trihalomethanes"
            type="text"
          placeholder="Trihalomethanes"
          
        />
        <label className='top'></label>
        <input
          name="turbidity"
            type="text"
          placeholder="Turbidity"
          
        />
        <button type="submit" className='rounded'>Predict</button>
      </form>
    </div>
  );
}

export default App; 