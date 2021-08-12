import React from 'react';
import { NavLink } from 'react-router-dom';
import './DogNav.css';

const DogNav = ({ names }) => {
  return (
    <div className="DogNav">
      <h1>Dog Finder</h1>
      {names.map(name => {
        return (
          <div className="DogNav-links">
            <NavLink exact to={`/dogs/${name.toLowerCase()}`}>
              {name}
            </NavLink>
          </div>
        )
      })}
    </div>
  )
};

export default DogNav;