import React from 'react';
import { NavLink } from 'react-router-dom';

const DogNav = ({ names }) => {
  return (
    <div>
      <h1>Dog Finder</h1>
      {names.map(name => {
        return (
          <div>
            <NavLink exact to={`/dogs/${name}`}>
              {name}
            </NavLink>
          </div>
        )
      })}
    </div>
  )
};

export default DogNav;