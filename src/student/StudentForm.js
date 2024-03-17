import React, { useState } from 'react';
import '../UserRegistrationForm.css';

const UserRegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [agreeMarketing, setAgreeMarketing] = useState(false);
  const [wantDemo, setWantDemo] = useState(false);
  const [areaOfInterest, setAreaOfInterest] = useState('developer');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a data object with the form fields
    const data = {
      fullName,
      email,
      dob,
      agreeMarketing,
      wantDemo,
      areaOfInterest
    };
  
    fetch('https://your-api-endpoint.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        console.log('User data sent successfully');
        // Reset the form after successful submission
        setFullName('');
        setEmail('');
        setDob('');
        setAgreeMarketing(false);
        setWantDemo(false);
        setAreaOfInterest('developer');
      } else {
        console.error('Failed to send user data');
      }
    })
    .catch(error => {
      console.error('Error sending user data:', error);
    });
  };
  

  return (
    <div className="user-registration-form">
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={agreeMarketing}
            onChange={(e) => setAgreeMarketing(e.target.checked)}
          />
          Do you agree to receive marketing updates?
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={wantDemo}
            onChange={(e) => setWantDemo(e.target.checked)}
          />
          Do you want a demo?
        </label>
        <br />
        <label>
          Area of Interest:
          <select value={areaOfInterest} onChange={(e) => setAreaOfInterest(e.target.value)}>
            <option value="developer">Developer</option>
            <option value="admin">Admin</option>
            <option value="ops">Ops</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserRegistrationForm;
