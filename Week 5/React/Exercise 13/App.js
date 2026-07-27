import React,{useState} from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

export default function App(){
 const [view,setView]=useState('book');
 let content;
 if(view==='book') content=<BookDetails/>;
 else if(view==='blog') content=<BlogDetails/>;
 else content=<CourseDetails/>;
 return(
  <div>
   <button onClick={()=>setView('book')}>Books</button>
   <button onClick={()=>setView('blog')}>Blogs</button>
   <button onClick={()=>setView('course')}>Courses</button>
   {content}
  </div>
 );
}
