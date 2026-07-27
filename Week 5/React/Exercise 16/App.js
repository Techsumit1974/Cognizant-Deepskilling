import React,{useState} from 'react';

export default function Register(){
 const [form,setForm]=useState({name:'',email:'',password:''});
 const [errors,setErrors]=useState({});

 const handleChange=(e)=>{
   setForm({...form,[e.target.name]:e.target.value});
 };

 const validate=()=>{
   const err={};
   if(form.name.length<5) err.name='Name must be at least 5 characters';
   if(!(form.email.includes('@') && form.email.includes('.'))) err.email='Invalid email';
   if(form.password.length<8) err.password='Password must be at least 8 characters';
   setErrors(err);
   return Object.keys(err).length===0;
 };

 const handleSubmit=(e)=>{
   e.preventDefault();
   if(validate()){
     alert('Registration Successful');
   }
 };

 return(
 <div>
  <h2>Mail Register App</h2>
  <form onSubmit={handleSubmit}>
   <input name="name" placeholder="Name" value={form.name} onChange={handleChange}/><br/>
   <span>{errors.name}</span><br/>
   <input name="email" placeholder="Email" value={form.email} onChange={handleChange}/><br/>
   <span>{errors.email}</span><br/>
   <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange}/><br/>
   <span>{errors.password}</span><br/><br/>
   <button type="submit">Register</button>
  </form>
 </div>);
}
