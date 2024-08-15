import React from 'react';

interface ResultProps {
  result: string | null;
  playerChoice: string | null;
  computerChoice: string | null;
}

const Result: React.FC<ResultProps> = ({ result, playerChoice, computerChoice }) => {
  if (!result) return null;

  return (
    <div>
      <h2>Result</h2>
      <p>Jogador escolheu: {playerChoice}</p>
      <p>Robo maldito Escolheu: {computerChoice}</p>
      <p>{result}</p>
    </div>
  );
};

export default Result;
