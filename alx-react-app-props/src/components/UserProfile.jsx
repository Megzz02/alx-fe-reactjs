import React, { useContext } from 'react';  // Import React and useContext
import UserContext from '../UserContext';  // Import UserContext

function UserProfile() {
  const userData = useContext(UserContext);  // Use the context to get user data

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue' }}>{userData.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{userData.age}</span></p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
}

export default UserProfile;

// useContext