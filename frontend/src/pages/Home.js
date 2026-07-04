import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function Home() {
  const [status, setStatus] = useState('Checking API connection...');

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/`)
      .then((res) => setStatus(res.data.message))
      .catch(() => setStatus('Could not reach backend API.'));
  }, []);

  return (
    <div className="home-page">
      <h1>Welcome to My Fullstack App</h1>
      <p>Backend status: {status}</p>
    </div>
  );
}

export default Home;
