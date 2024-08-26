import React from "react";
import "./index.css"; 



function UserForm({ fullName, lastName, email, password, age, submit }) {
  return (
    <form className="user-form">
      <div className="form-title">User Information</div>
      <div className="form-group">
        <label>Full Name:</label>
        {fullName}
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        {lastName}
      </div>
      <div className="form-group">
        <label>Email:</label>
        {email}
      </div>
      <div className="form-group">
        <label>Password:</label>
        {password}
      </div>
      <div className="form-group">
        <label>Age:</label>
        {age}
      </div>
      <div className="form-group">
        {submit}
      </div>
    </form>
  );
}

export default UserForm;
