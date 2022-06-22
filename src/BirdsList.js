import React from 'react';
import BirdsItem from './BirdsItem';

export default function BirdsList({ birds }) {
  return <div>
    <h2>Cool Bird Info check it out!</h2>
    {birds.map((birds, i) =>
      <BirdsItem birds={birds} key={`${birds}-${i}`} />      
    )}
  </div>;
}
