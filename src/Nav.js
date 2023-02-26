import React, { useCallback } from "react";
import { Link } from "react-router-dom";

// Here we are passing a function 'onClick' to the Link component as a prop. 
// When the Link component is clicked, the function onChange is called.

// By using useCallback, we memoize the onClick function and avoid creating a new function on every re-render of the Nav component. 
// This can help to reduce the number of unnecessary re-renders of the Link component and improve the performance of our application.
function Nav({ onChange }) {
  const handleClick = useCallback(() => {
    onChange();
  }, [onChange]);

  return (
    <React.Fragment>
      <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
        <Link
          onClick={handleClick}
          to='/'
          className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'
        >
          <b>
            <span id='logo' className='fs-4'>
              Drinkify
            </span>
          </b>
          <span id='drink' className='material-symbols-outlined'>
            local_bar
          </span>
          <br />
        </Link>
        <ul className='nav nav-pills'>
          <b>
            <li className='nav-item'>
              <Link
                onClick={handleClick}
                to='/mydrinks'
                id='links'
                className='nav-link'
              >
                My Drinks
              </Link>
            </li>
          </b>
          <b>
            <li className='nav-item'>
              <Link
                onClick={handleClick}
                to='/about'
                id='links'
                className='nav-link'
              >
                About Drinkify
              </Link>
            </li>
          </b>
        </ul>
      </header>
    </React.Fragment>
  );
}

export default Nav;


