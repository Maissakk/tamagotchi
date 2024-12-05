import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Meter from "../components/meter";
import ActionButton from '../components/ActionButton';
import animations from '..src/assets/animations/animations.js';

// Import icon
import feedIcon from '../assets/actions/food.png';
import playIcon from '../assets/actions/play.png';
import cleanIcon from '../assets/actions/clean.png';
import medIcon from '../assets/actions/med.png';
// import other
import rewardImage from '../assets/other/reward.png';
import poopImage from '../assets/other/poop.png';
import backgroundImage from '../assets/other/background.jpg';

function Dashboard() {
  const navigate = useNavigate();
  const [species, setSpecies] = useState(localStorage.getItem('selectedSpecies') || 'mochi'); 
  const [happiness, setHappiness] = useState(3); 
  const [fullness, setFullness] = useState(3); 
  const [showPoop, setShowPoop] = useState(false); 
  const [rewardUnlocked, setRewardUnlocked] = useState(false); 
  const [message, setMessage] = useState(''); 
  const [energy, setEnergy] = useState(4);
  const [currentAnimation, setCurrentAnimation] = useState(animations[species].default);
  
  const overallMeter = Math.round(((happiness + fullness + energy) / 15) * 100);

  useEffect(() => {
    if (!species) {
      navigate('/');
    }
  }, [species, navigate]);

  useEffect(() => {
    if (happiness === 5 && fullness === 5 && energy === 5) {
      setRewardUnlocked(true);
    }
  }, [happiness, fullness, energy]);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

   // Handle actions
   const handleAction = (action) => {
    setCurrentAnimation(animations[species][action]);

    switch (action) {
      case 'eating':
        setHappiness((prev) => Math.min(prev + 1, 5));
        setFullness((prev) => Math.min(prev + 2, 5));
        setShowPoop(true);
        setMessage('Yum! That was delicious!');
        break;
      case 'playing':
        setHappiness((prev) => Math.min(prev + 2, 5));
        setEnergy((prev) => Math.max(prev - 1, 0)); // Playing decreases energy
        setMessage('Whee! That was fun!');
        break;
      case 'cleaning':
        setShowPoop(false);
        setMessage('Thanks for cleaning up!');
        break;
      case 'medicine':
        setHappiness((prev) => Math.min(prev + 1, 5));
        setEnergy((prev) => Math.min(prev + 2, 5));
        setMessage('Feeling much better now!');
        break;
      default:
        break;
    }

    // Reset animation to default after 2 seconds
    setTimeout(() => setCurrentAnimation(animations[species].default), 2000);
  };
  return (
    <div
      className="dashboard"
      style={{
        textAlign: 'center',
        padding: '20px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      <h1>Your Tamagotchi</h1>
      <h2>Species: {species}</h2>

      {/* Tamagotchi Animation */}
      <img
        src={currentAnimation}
        alt={species}
        style={{
          width: '150px',
          height: 'auto',
          marginBottom: '20px',
        }}
      />

      {/* Pop-up Message */}
      {message && (
        <div
          style={{
            backgroundColor: '#ffcccc',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '20px',
            fontSize: '16px',
            color: '#b30000',
          }}
        >
          {message}
        </div>
      )}

      {/* Overall Meter */}
      <div style={{ margin: '20px 0' }}>
        <h3>Overall Status</h3>
        <div
          style={{
            width: '80%',
            height: '20px',
            backgroundColor: '#ccc',
            margin: '0 auto',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${overallMeter}%`,
              height: '100%',
              backgroundColor: overallMeter > 50 ? 'green' : 'red',
            }}
          />
        </div>
        <p>{overallMeter}%</p>
      </div>


      {/* Action Buttons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        <ActionButton icon={feedIcon} label="Feed" onClick={() => handleAction("eating")} />
        <ActionButton icon={playIcon} label="Play" onClick={() => handleAction("playing")} />
        <ActionButton icon={cleanIcon} label="Clean" onClick={() => handleAction("cleaning")} />
        <ActionButton icon={medIcon} label="Medicine" onClick={() => handleAction("medicine")} />
      </div>

      {/* Poop Visibility */}
      {showPoop && (
        <img
          src={poopImage}
          alt="Poop"
          style={{
            width: '50px',
            marginTop: '10px',
          }}
        />
      )}

      {/* Reward Section */}
      {rewardUnlocked && (
        <div className="reward-section" style={{ marginTop: '30px', textAlign: 'center' }}>
          <h2>Congratulations! You unlocked the reward!</h2>
          <img
            src={rewardImage}
            alt="Reward"
            style={{ width: '200px', height: 'auto', border: '3px solid #ffd700', borderRadius: '10px' }}
          />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
