import React from "react";

type Action = "feed" | "play" | "sleep" | "check";

interface TamaInformation {
  name: string;
  fullness: number;
  happiness: number;
  energy: number;
  species: string;
  status: string;
  age: number;
  isAlive: boolean;
}

const species = {
  egg: {
    name: "Egg",
    fullness: 100,
    happiness: 100,
    energy: 100,
  },
  TESTSPECIES: {
    name: "TEST",
    fullness: 50,
    happiness: 50,
    energy: 50,
  }
};

const Tamapet: React.FC = () => {
  
}