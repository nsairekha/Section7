import React from "react";
import { useLocation } from "react-router-dom";

const AdminDashboard = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const username = params.get("username");

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Welcome, Admin {username}!</p>
    </div>
  );
};

export default AdminDashboard;