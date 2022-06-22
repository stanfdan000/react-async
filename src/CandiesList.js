import React from 'react';
import CandiesItem from './CandiesItem';
 
export default function CandiesList({ candy }) {
  return <div>
    <h2>here are some good candies to eat</h2>
    {candy.map((candy, i) => 
      <CandiesItem candy={candy} key={`${candy}-${i}`} />
    )}
  </div>;
}
