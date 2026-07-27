import officeImg from './office.jpg';

function App(){
  const office={
    Name:'Tech Park',
    Rent:55000,
    Address:'Bhubaneswar'
  };

  const offices=[
    {Name:'Tech Park',Rent:55000,Address:'Bhubaneswar'},
    {Name:'Business Hub',Rent:75000,Address:'Bangalore'},
    {Name:'Corporate Plaza',Rent:65000,Address:'Hyderabad'}
  ];

  return(
    <div>
      <h1>Office Space Rental App</h1>
      <img src={officeImg} alt="Office" width="300"/>

      <h2>Office Details</h2>
      <p><b>Name:</b> {office.Name}</p>
      <p style={{color:office.Rent<60000?'red':'green'}}>
        <b>Rent:</b> {office.Rent}
      </p>
      <p><b>Address:</b> {office.Address}</p>

      <h2>Available Offices</h2>
      {offices.map((o,i)=>(
        <div key={i}>
          <p><b>Name:</b> {o.Name}</p>
          <p style={{color:o.Rent<60000?'red':'green'}}>
            <b>Rent:</b> {o.Rent}
          </p>
          <p><b>Address:</b> {o.Address}</p>
          <hr/>
        </div>
      ))}
    </div>
  );
}

export default App;
