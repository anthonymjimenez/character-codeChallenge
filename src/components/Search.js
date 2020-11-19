import React, { useState, useEffect } from "react";
import CharCard from "../components/CharCard";

export default function Search({chars}) {
   const [search, setSearchResults] = useState([])
   const [searchTerm, setTerm] = useState(null)
    
   useEffect(() => {
    searchTerm === ""
      ? setSearchResults([])
      : setSearchResults(
          chars
            .filter((c) => c.name.includes(searchTerm))
            .map((c) => c)
        );
  }, [searchTerm, chars]);

  return (
      <>
      <hr/>
      <br/>
      <h3>Search</h3>
      <input type='text' value={searchTerm} onChange={(e) => setTerm(e.target.value)} />
      <hr/> <br/>
      {search.map(({name, img, show}) => <CharCard name={name} img={img} show={show} />
)}
    </>
      )
}
