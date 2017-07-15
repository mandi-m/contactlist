// Required libraries
import React from 'react';
import { Link } from 'react-router';

const Home = (props) => {
  return (
    <div>
              <li>
          <Link to="/">Home</Link>
        </li>
        <div className="container">
        <header className="jumbotron hero-spacer">
           <h1>Welcome to Your Contact List!</h1>
           <p>Add and delete contacts to your list!</p>
           <p><Link to="/contacts" className="btn btn-primary btn-large">See your contacts!</Link>
           </p>
       </header>
   </div>
      { props.children }
    </div>
  );
};

export default Home;
