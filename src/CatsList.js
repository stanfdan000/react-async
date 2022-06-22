import React from 'react';
import CatItem from './CatsItem';

export default function CatList({ cats }) {
  return <div>
    <h2>behold the names and info of these fierce beasts </h2>
    {cats.map((cats, i) => 
      <CatItem cats={cats} key={`${cats}-${i}`} />
    )}
  </div>;
}
