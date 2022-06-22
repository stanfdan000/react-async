import React from 'react';

export default function CandiesItem({ candy }) {
  return <div>
    <p>This {candy.name} Is a </p>
    <p>{candy.type}, And is made by</p>
    <p>{candy.maker}</p>
    <p>Rating {candy.rating} Stars</p>
  </div>;
}
