import React from 'react';

function UserProfile({ username }) {
  return (
    <div className="user-profile">
      <h4>UserProfile Component</h4>
      <p>Welcome, <strong>{username}</strong>!</p>
      <p className="info">✓ Username received via props</p>
    </div>
  );
}

export default UserProfile;
