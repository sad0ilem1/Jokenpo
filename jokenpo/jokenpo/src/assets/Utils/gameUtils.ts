export type Choice = 'rock' | 'paper' | 'scissors';

export const choices: Choice[] = ['rock', 'paper', 'scissors'];

export const getComputerChoice = (): Choice => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

export const getResult = (playerChoice: Choice, computerChoice: Choice) => {
  if (playerChoice === computerChoice) return 'Empate!';
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'Jogador Ganhou!';
  }
  return 'Robo maldito Ganhou!';
};

export const updateScore = (prevScore: { player: number; computer: number; draws: number }, result: string) => {
  switch (result) {
    case 'Jogador Ganhou!':
      return { ...prevScore, player: prevScore.player + 1 };
    case 'Robo maldito Ganhou!':
      return { ...prevScore, computer: prevScore.computer + 1 };
    case 'Empate!':
      return { ...prevScore, draws: prevScore.draws + 1 };
    default:
      return prevScore;
  }
};
