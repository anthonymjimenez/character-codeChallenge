import React from "react";
import CharCard from "../components/CharCard";

export default function CharacterContainer({chars}) {
  const generateCards = () =>
    chars.map(({name, img, show}) => 
      <CharCard name={name} img={img} show={show} />
    );

  return generateCards();
}
