import React from 'react';
export default function MagazineItem({ magazines }) {
  return <div>
    <div>This {magazines.name}</div>
    <div>Was issued on {magazines.issued}</div>
    <div>and costs {magazines.price}</div>
    <div>{magazines.Reference_Number}</div>
  </div>;
}