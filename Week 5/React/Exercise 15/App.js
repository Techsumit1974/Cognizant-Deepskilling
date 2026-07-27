import React, { useState } from 'react';

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const refNo = Math.floor(100000 + Math.random() * 900000);
    alert(
      `Complaint Registered Successfully!\nReference Number: ${refNo}`
    );
    setEmployeeName('');
    setComplaint('');
  };

  return (
    <div>
      <h2>Ticket Raising App</h2>
      <form onSubmit={handleSubmit}>
        <label>Employee Name:</label><br />
        <input
          type="text"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          required
        />
        <br /><br />
        <label>Complaint:</label><br />
        <textarea
          rows="5"
          cols="40"
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}

export default ComplaintRegister;
