import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CharacterCard from './components/characters';
import characters from './characters.json';
import logo from './homer simpson.gif';
import Wrapper from "./components/wrapper";



class App extends Component {
  state= {
    characters
  };
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">SIMPSONS CLICKY GAME</h1>
      //   </header>
      //   <p className="App-intro">
      //   </p>
      // </div>
      <Wrapper>
       {this.state.characters.map(character => (
        <CharacterCard
          id={character.id}
          name={character.name}
          image={character.image}
        />
       ))}
        </Wrapper>
    );
  }
}

export default App;
