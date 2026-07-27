import React,{useState} from 'react';

function GuestPage(){
  return (
    <div>
      <h2>Guest Page</h2>
      <p>Flight Details:</p>
      <ul>
        <li>Flight: AI-202</li>
        <li>From: Bhubaneswar</li>
        <li>To: Delhi</li>
      </ul>
    </div>
  );
}

function UserPage(){
  return (
    <div>
      <h2>User Page</h2>
      <p>You can now book flight tickets.</p>
      <button>Book Ticket</button>
    </div>
  );
}

export default function App(){
  const [loggedIn,setLoggedIn]=useState(false);

  return (
    <div>
      <h1>Ticket Booking App</h1>
      {loggedIn
        ? <><button onClick={()=>setLoggedIn(false)}>Logout</button><UserPage/></>
        : <><button onClick={()=>setLoggedIn(true)}>Login</button><GuestPage/></>}
    </div>
  );
}
