export default function BookDetails(){
const books=[{id:1,name:'React Guide',author:'John'},{id:2,name:'JavaScript',author:'David'}];
return(<div><h2>Book Details</h2><ul>{books.map(b=><li key={b.id}>{b.name} - {b.author}</li>)}</ul></div>);
}