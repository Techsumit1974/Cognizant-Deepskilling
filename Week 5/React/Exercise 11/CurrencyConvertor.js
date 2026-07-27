import React,{useState} from 'react';

export default function CurrencyConvertor(){
 const [rupees,setRupees]=useState('');
 const [euro,setEuro]=useState('');
 const handleSubmit=()=>{
   const rate=90;
   setEuro((Number(rupees)/rate).toFixed(2));
 };
 return(<div>
 <h3>Currency Convertor</h3>
 <input value={rupees} onChange={e=>setRupees(e.target.value)} placeholder="INR"/>
 <button onClick={handleSubmit}>Convert</button>
 <p>Euro: {euro}</p>
 </div>);
}
