import React from 'react';
import MagazineItem from './MagazineItem';

export default function MagazineList({ magazines }) {
  return <div>
    <h2>good magazines here to read</h2>
    {magazines.map((magazines, i) =>
      <MagazineItem magazines={magazines} key={`${magazines}-${i}`} />
    )}
  </div>;
}
