import React from 'react';
import { Link } from 'react-router-dom';


  const Home = () => {
    return <div>
      <Link to="/dashbord" className='dark:text-white'>Go to Dashbord</Link>
    </div>;
  };

export default Home;