import React, { useState, useEffect } from "react";

const TIME: number = 2000; // 2 Seconds
const MAX_FULLNESS: number = 100;
const MAX_HAPPINESS: number = 100;
const MAX_ENERGY: number = 100;

interface TamaProps {
  name: string;
}

type Action = "feed" | "play" | "sleep" | "check";

interface TamaState {
  fullness: number;
  happiness: number;
  energy: number;
  species: string;
}

const species = {
  egg: {
    fullness: 0,
    happiness: 0,
    energy: 0
  },
  kitty: {
    fullness: 30,
    happiness: 30,
    energy: 50
  },
  whale: {
    fullness: 10,
    happiness: 60,
    energy: 20
  },
  mochi: {
    fullness: 90,
    happiness: 80,
    energy: 90
  }
};

const initialState: TamaState = {
  fullness: species.egg.fullness,
  happiness: species.egg.happiness,
  energy: species.egg.energy,
  species: "egg"
}

const encodeState = (state: TamaState): string => {
  const json = JSON.stringify(state);
  return 
};

const Tamapet: React.FC<TamaProps> = ({ name }) => {
  const [state, setState] = useState<TamaState>(initialState);

  // This handles the pet state by decrementing all stats by the set TIME.
  useEffect(() => {
    const interval = setInterval(() => {
      setState((prevState) => {
        const newFullness = Math.max(prevState.fullness - 1, 0);
        const newHappiness = Math.max(prevState.happiness - 1, 0);
        const newEnergy = Math.max(prevState.energy - 1, 0);

        return {
          ...prevState,
          fullness: newFullness,
          happiness: newHappiness,
          energy: newEnergy
        };
      });
    }, TIME);

    return () => clearInterval(interval);
  }, []);

  const handleAction = (action: Action) => {
    setState((prevState) => {
      switch (action) {
        case "feed":
          return {
            ...prevState,
            fullness: Math.min(prevState.fullness + 20, MAX_FULLNESS),
            energy: Math.min(prevState.energy + 10, MAX_ENERGY)
          };
        case "play":
          return {
            ...prevState,
            happiness: Math.min(prevState.happiness + 20, MAX_HAPPINESS),
            fullness: Math.max(prevState.fullness - 10, 0),
            energy: Math.max(prevState.energy - 10, 0)
          };
        case "sleep":
          return {
            ...prevState,
            energy: Math.min(prevState.energy + 30, MAX_ENERGY)
          };
        case "check":
          return prevState;
        default:
          return prevState;
      }
    })
  }

};

export default Tamapet;