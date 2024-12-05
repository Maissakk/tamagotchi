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
    energy: 100
  },
  byebyekitty: {
    name: "Byebye Kitty",
    fullness: 30,
    happiness: 30,
    energy: 50
  },
  whale: {
    Name: "Whale",
    fullness: 10,
    happiness: 60,
    energy: 20
  },
  mochi: {
    Name: "Mochi",
    fullness: 90,
    happiness: 80,
    energy: 90
  },
  peach: {
    Name: "BBL",
    fullness: 100,
    happiness: 100,
    energy: 10
  }
};

const Tamapet: React.FC = () => {

}