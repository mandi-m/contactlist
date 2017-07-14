// Required libraries
import React from 'react';
import { Link } from 'react-router';

const Home = (props) => {
  return (
    <div>
      <h1>Contacts</h1>
      <span>Menu</span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacts">All of your contacts!</Link>
        </li>
      </ul>
      { props.children }
    </div>
  );
};

export default Home;
