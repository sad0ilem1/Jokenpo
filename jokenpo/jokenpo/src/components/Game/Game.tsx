import React, { useState, useEffect } from 'react';
import { choices, getComputerChoice, getResult, updateScore, Choice } from '../../assets/Utils/gameUtils';
import ScoreBoard from '../ScoreBoard';
import Result from '../Result';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';
import Modal from '../Modal/Modal';

const Game: React.FC = () => {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [score, setScore] = useState({
    player: 0,
    computer: 0,
    draws: 0,
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (result) {
      console.log('Result:', result);
      setScore(prevScore => {
        const newScore = updateScore(prevScore, result);
        console.log('New Score:', newScore);
        return newScore;
      });
    }
  }, [result]);

  const handleChoice = (choice: Choice) => {
    const compChoice = getComputerChoice();
    const gameResult = getResult(choice, compChoice);
    
    console.log('Player Choice:', choice);
    console.log('Computer Choice:', compChoice);
    console.log('Game Result:', gameResult);
    
    setPlayerChoice(choice);
    setComputerChoice(compChoice);
    setResult(gameResult);
  };

  const handleEndGame = () => {
    setShowModal(true);
  };

  const handleRestartGame = () => {
    setScore({ player: 0, computer: 0, draws: 0 });
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setShowModal(false);
  };

  const icons: Record<Choice, JSX.Element> = {
    rock: <FaHandRock />,
    paper: <FaHandPaper />,
    scissors: <FaHandScissors />,
  };

  return (
    <div className="game-container">
      <ScoreBoard score={score} />
      <div className="choices-container">
        {choices.map(choice => (
          <button key={choice} onClick={() => handleChoice(choice)}>
            {icons[choice]}
          </button>
        ))}
      </div>
      <Result result={result} playerChoice={playerChoice} computerChoice={computerChoice} />
      <button onClick={handleEndGame}>Finalizar Jogo</button>

      {showModal && <Modal score={score} onClose={handleRestartGame} />}
    </div>
  );
};

export default Game;
