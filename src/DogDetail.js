import React from 'react';
import { useParams } from 'react-router-dom';

const DogDetail = ({ dogs }) => {
  const { name } = useParams();
  const [ dog ] = dogs.filter(dogObj => dogObj.name.toLowerCase() === name);
  return (
    <div>
      <h1>{dog.name}'s Page!</h1>
    </div>
  )
};

export default DogDetail;