import React from 'react';

export default function BirdsItem({ birds }) {
  return <div>
    <div>This {birds.name} Is a</div>
    <div>{birds.type} and is also </div>
    <div>{birds.age} Years old!!! And can live to be</div>
    <div>{birds.LifeSpan}!!</div>
  </div>;
}
