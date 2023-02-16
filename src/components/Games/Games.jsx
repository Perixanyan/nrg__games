import React from 'react';
import GamesNav from '../GamesNav/GamesNav';
import GamesItem from '../GamesItem/GamesItem';

const Games = () => {
  return (
    <div className={'games'}>
      <GamesNav />
      <ul className="games__link">
        {Array.from(Array(11), (_, i) => (
          <GamesItem key={i} />
        ))}
      </ul>
    </div>
  );
};

export default Games;
