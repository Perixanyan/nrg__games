import React from 'react';
import GamesNav from '../GamesNav/GamesNav';
import GamesItem from '../GamesItem/GamesItem';

const Games = () => {
  return (
    <div className={'games'}>
      <GamesNav />
      <ul className="games__list">
        {Array.from(Array(11), (_, i) => (
          <GamesItem key={i} />
        ))}
      </ul>
      <div className="games__load">
        <button type={'button'} className="games__LoadButton">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Games;
