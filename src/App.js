import logo from './logo.svg';
import './App.css';
import characters from "./data";
import React, {useState} from "react";
import CharacterContainer from './container/CharacterContainer';
import Form from './components/Form';
import Search from './components/Search';
function App() {

  const [chars, setCharacter] = useState(characters)

  return (
    <div className="App">
      <CharacterContainer chars={chars} />
      <Form chars={chars} setCharacter = {setCharacter} />
      <Search chars={chars} />
    </div>
  );
}

export default App;
