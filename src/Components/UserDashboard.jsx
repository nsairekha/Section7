import React from "react";
import { useLocation } from "react-router-dom";

const UserDashboard = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const role = params.get("role");
  const username = params.get("username");

  return (
    <div>
      <h2>User Dashboard</h2>
      <p>Welcome, {username}!</p>
      <p>Role: {role}</p>
    </div>
  );
};

export default UserDashboard;