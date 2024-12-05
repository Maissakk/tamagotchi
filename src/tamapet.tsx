import React from "react";

type Action = "feed" | "play" | "sleep" | "check";

interface TamaInformation {
  name: string;
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

const initialState: TamaInformation = {
  // Find way to input name
  name: "Tamapet",
  fullness: species.egg.fullness,
  happiness: species.egg.happiness,
  energy: species.egg.energy,
  species: "egg"
}

const Tamapet: React.FC = () => {

}