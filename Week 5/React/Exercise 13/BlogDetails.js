export default function BlogDetails(){
const blogs=[{id:1,title:'React Basics'},{id:2,title:'Conditional Rendering'}];
return(<div><h2>Blog Details</h2>{blogs.map(b=><p key={b.id}>{b.title}</p>)}</div>);
}