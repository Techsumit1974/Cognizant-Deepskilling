import React,{useState} from 'react';
import GitClient from './GitClient';

export default function App(){
  const [repos,setRepos]=useState([]);

  const loadRepos=async()=>{
    const data=await GitClient.getRepositories('techiesyed');
    setRepos(data);
  };

  return(
    <div>
      <h2>Git Client App</h2>
      <button onClick={loadRepos}>Load Repositories</button>
      <ul>
        {repos.map((r,i)=><li key={i}>{r}</li>)}
      </ul>
    </div>
  );
}
