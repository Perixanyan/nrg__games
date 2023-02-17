import React from 'react';
import classNames from 'classnames';
import Favorite from '../Favorite/Favorite';

const GamesItem = ({ newGame = true }) => {
  return (
    <li className={classNames('games__item', { ['new']: newGame })}>
      <a href="#" className="games__link">
        <span className="games__picture">
          <span>
            <img
              src="https://fs.betunit.com/1654176335183CR.jpg"
              alt="Game Name"
            />
          </span>
        </span>
        <span className="games__footer">
          <span className="games__name">Dracon Throne</span>
          <Favorite className={'add'} />
        </span>
      </a>
    </li>
  );
};

export default GamesItem;
