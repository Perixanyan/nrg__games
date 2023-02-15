import React from 'react';
import GamesNav from '../GamesNav/GamesNav';

const Games = () => {
  return (
    <div className={'games'}>
      <GamesNav />
      <ul className="gamesNav__menu">
        {Array.from(Array(11), (_, i) => (
          <li key={i} className="gamesNav__block" />
        ))}
      </ul>
    </div>
  );
};

export default Games;
