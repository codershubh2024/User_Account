import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageAccount = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser) {
      navigate('/');
    } else {
      setUser(loggedInUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/');
  };

  const handleSave = () => {
    if (!user.password) {
      setError('Password cannot be empty!');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map((u) => (u.username === user.username ? user : u));
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    alert('Profile updated!');
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    user && (
      <div className="card p-4 profile">
        <h2>Profile</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={user.firstName || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={user.lastName || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={user.username || ''}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={user.password || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={user.phone || ''}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select
            className="form-control"
            name="gender"
            value={user.gender || ''}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <button className="btn btn-primary" onClick={handleSave}>
            Save Changes
          </button>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default ManageAccount;
