// SubmittedForms.js
import React, { useState, useEffect } from 'react';
import '../SubmittedForms.css'; // Import the CSS file for styling
import UserRegistrationForm from './StudentForm';
import { useHistory } from 'react-router-dom';



const SubmittedForms = () => {
  const [users, setUsers] = useState([]);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleAction = () => {
    // Set showRegistrationForm to true to display the UserRegistrationForm
    //setShowRegistrationForm(true);
    history.push('/register');
  };

  return (
    <div className="centered">
      <div className="action-button">
        <button onClick={handleAction}>Action</button>
      </div>
      <div className="title">
        <h2>List of Users</h2>
      </div>
      <div className="user-list">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <strong>Name:</strong> {user.name}<br />
            <strong>Email:</strong> {user.email}<br />
            <strong>Phone:</strong> {user.phone}<br />
            <strong>Website:</strong> {user.website}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubmittedForms;
