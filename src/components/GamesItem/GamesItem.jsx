import React from 'react';

const GamesItem = () => {
  return (
    <li className="games__item">
      <a href="#" className="button__link">
        <button className="games__pictures" />
        <button className="games__footer">
          <span className="games__name">Dracon Throne</span>
          <span className="games__stars active">
            <svg>
              <use xlinkHref={'#favorite'} />
            </svg>
          </span>
        </button>
      </a>
    </li>
  );
};

export default GamesItem;
