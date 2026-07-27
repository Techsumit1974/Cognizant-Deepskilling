export default function CourseDetails(){
const courses=[{id:1,name:'React',fee:5000},{id:2,name:'Node.js',fee:6000}];
return(<div><h2>Course Details</h2><ul>{courses.map(c=><li key={c.id}>{c.name} - {c.fee}</li>)}</ul></div>);
}