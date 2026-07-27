import EmployeeCard from './EmployeeCard';
export default function EmployeeList(){
 const employees=[{id:1,name:'John'},{id:2,name:'Alice'}];
 return <div>{employees.map(e=><EmployeeCard key={e.id} employee={e}/>)}</div>;
}