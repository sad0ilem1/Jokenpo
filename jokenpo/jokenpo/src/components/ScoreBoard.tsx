import React from 'react';

interface ScoreBoardProps {
  score: {
    player: number;
    computer: number;
    draws: number;
  };
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score }) => {
  return (
    <div>
      <h2>Placar</h2>
      <p>Jogador: {score.player}</p>
      <p>Computador: {score.computer}</p>
      <p>Empates: {score.draws}</p>
    </div>
  );
};

export default ScoreBoard;
