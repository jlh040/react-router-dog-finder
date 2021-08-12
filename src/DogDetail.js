import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DogDetail.css';

const DogDetail = ({ dogs }) => {
  const { name } = useParams();
  const [ dog ] = dogs.filter(dogObj => dogObj.name.toLowerCase() === name);
  return (
    <div className="DogDetail">
      <h1>{dog.name}'s Page!</h1>
      <img src={dog.src} />
      <h3>Age: {dog.age}</h3>
      <h3>Facts:
        <ul style={{'list-style': 'none'}}>
          {dog.facts.map(fact => <li>{fact}</li>)}
        </ul>
      </h3>
      <Link to="/dogs">Go Home</Link>
    </div>
  )
};

export default DogDetail;