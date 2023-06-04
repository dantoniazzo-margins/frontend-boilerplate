import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      Home
      <Link to="/counter">Counter</Link>
    </div>
  );
};

export default Home;
