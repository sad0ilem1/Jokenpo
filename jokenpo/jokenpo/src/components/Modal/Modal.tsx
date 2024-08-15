import React from 'react';
import './Modal.css'; 

interface ModalProps {
  score: { player: number; computer: number; draws: number };
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ score, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Placar final</h2>
        <p>Jogador: {score.player}</p>
        <p>Robo maldito: {score.computer}</p>
        <p>Empates: {score.draws}</p>
        <button onClick={onClose}>Novo Jogo</button>
      </div>
    </div>
  );
};

export default Modal;
