import React, { useState, useEffect } from "react";

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
  byebyekitty: {
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

const Tamapet: React.FC<TamaProps> = ({ name }) => {
  const [state, setState] = useState<TamaState>(initialState)

}

export default Tamapet;