import {useState} from 'react';
import ThemeContext from './ThemeContext';
import EmployeeList from './EmployeeList';
export default function App(){
 const [theme]=useState('light');
 return(
 <ThemeContext.Provider value={theme}>
   <EmployeeList/>
 </ThemeContext.Provider>);
}