import {useContext} from 'react';
import ThemeContext from './ThemeContext';
export default function EmployeeCard({employee}){
 const theme=useContext(ThemeContext);
 return(
 <div>
  <h3>{employee.name}</h3>
  <button className={theme}>View</button>
 </div>);
}