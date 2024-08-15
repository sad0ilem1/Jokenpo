import React from 'react';
import Game from './components/Game/Game';
import './App.css'

const App: React.FC = () => {
  return (
    <div>
      <h1>Pedra, Papel, Tesoura</h1>
      <Game />
    </div>
  );
};

export default App;