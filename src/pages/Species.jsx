import React from 'react';
import { useNavigate } from 'react-router-dom';

import mochiImage from '../assets/animations/mochianim/mochi_default.png'; 
import kittyImage from '../assets/animations/kittyanim/kitty_default.png';
import whaleImage from '../assets/animations/whaleanim/whale_default.png';

const speciesTypes = [
    { name: 'Mochi', image: mochiImage },
    { name: 'Kitty', image: kittyImage },
    { name: 'Whale', image: whaleImage },
];
function SpeciesSelection() {
    const navigate = useNavigate();
  
    const handleSpeciesSelect = (species) => {
      // Save species to localStorage
      localStorage.setItem('selectedSpecies', species);
      navigate('/dashboard'); 
    };
  
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '20px',
          backgroundColor: '#ffe6cc',
          minHeight: '100vh',
        }}
      >
        <h1>Select Your Tamagotchi</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            marginTop: '20px',
          }}
        >
          {speciesOptions.map((species) => (
            <div
              key={species.name}
              onClick={() => handleSpeciesSelect(species.name.toLowerCase())}
              style={{
                cursor: 'pointer',
                textAlign: 'center',
                border: '2px solid #ccc',
                borderRadius: '10px',
                padding: '10px',
                backgroundColor: '#fff',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s',
              }}
            >
              <img
                src={species.image}
                alt={species.name}
                style={{
                  width: '150px',
                  height: 'auto',
                  marginBottom: '10px',
                }}
              />
              <h3>{species.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default SpeciesSelection;
