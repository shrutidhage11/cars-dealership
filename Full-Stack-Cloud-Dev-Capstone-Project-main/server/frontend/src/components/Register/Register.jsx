
import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration form submitted successfully!");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Sign-up</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Username</label>
            <input className="form-control" name="username"
              value={formData.username} onChange={handleChange}
              placeholder="Enter username" required />
          </div>

          <div className="mb-3">
            <label>First Name</label>
            <input className="form-control" name="firstName"
              value={formData.firstName} onChange={handleChange}
              placeholder="Enter first name" required />
          </div>

          <div className="mb-3">
            <label>Last Name</label>
            <input className="form-control" name="lastName"
              value={formData.lastName} onChange={handleChange}
              placeholder="Enter last name" required />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" name="email"
              value={formData.email} onChange={handleChange}
              placeholder="Enter email" required />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" name="password"
              value={formData.password} onChange={handleChange}
              placeholder="Enter password" required />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
