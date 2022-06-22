import React from 'react';

export default function CatItem({ cats, }) {
  return <div>
    <div>This Cats Name is {cats.name} This cat is </div>
    <div>{cats.age} Years old,This Cat is </div>
    <div> A {cats.gender} with fur the color of</div>
    <div>{cats.color}</div>
  </div>;
}
