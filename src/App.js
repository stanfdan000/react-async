
import './App.css';
import React, { useState, useEffect } from 'react';
import { getCandy, getCats, getBirds, getMagazines } from './services/fetchUtils';
import CandiesList from './CandiesList';
import CatsList from './CatsList';
import BirdsList from './BirdsList';
import MagazineList from './MagazineList';




function App() {
  const [candy, setCandy] = useState([]);
  const [cats, setCats] = useState([]);
  const [birds, setBirds] = useState([]);
  const [magazines, setMagazines] = useState([]);

  
  useEffect(() => {
    async function fetchAndStoreCandy() {
      const data = await getCandy();
      setCandy(data);
    }
    fetchAndStoreCandy();

    async function fetchAndStoreCats() {
      const data = await getCats();
      setCats(data);
    }
    fetchAndStoreCats();

    async function fetchAndStoreBirds() {
      const data = await getBirds();
      setBirds(data);
    }
    fetchAndStoreBirds();
    async function fetchAndStoreMagazines() {
      const data = await getMagazines();
      setMagazines(data);
    }
    fetchAndStoreMagazines();

  }, []);

  return (
    <div className="App">
      <div>
        <CandiesList candy={candy} />
      </div>
      <div>
        <CatsList cats={cats} />
      </div>
      <div>
        <BirdsList birds={birds} />
      </div>
      <div>
        <MagazineList magazines={magazines} />
      </div>
    </div>
  );
}

export default App;
