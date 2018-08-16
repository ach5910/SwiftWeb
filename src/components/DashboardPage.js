import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => (
  <div>
    Dashboard page content
    <Link to="/add">Add Workout</Link>
  </div>
);

export default DashboardPage;
