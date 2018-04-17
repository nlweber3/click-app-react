import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CharacterCard from './components/characters';
import characters from './characters.json';
import Wrapper from './components/wrapper';
import Header from './components/header'



class App extends Component {
  state= {
    characters
  };

  render() {
    return (
      <Wrapper>
        <Header />
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
