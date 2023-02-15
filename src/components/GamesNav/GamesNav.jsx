import React from 'react';
import Favorite from '../Favorite/Favorite';

const GamesNav = () => {
  return (
    <div className="gamesNav">
      <Favorite />
      <ul className="gamesNav__list">
        <li className="gamesNav__item active">
          <button className="gamesNav__button">all</button>
        </li>
        {Array.from(Array(20), (_, i) => (
          <li key={i} className="gamesNav__item ">
            <button className="gamesNav__button">Video Slots</button>
          </li>
        ))}
        <li className="gamesNav__item active">
          <button className="gamesNav__button">all</button>
        </li>
      </ul>
    </div>
  );
};

export default GamesNav;
