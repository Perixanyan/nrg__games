import React, { useState } from 'react';
import classNames from 'classnames';

const Favorite = ({ count = 5, className }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      data-count={count}
      className={classNames(
        'favorite',
        { [className]: className },
        { ['active']: active },
      )}>
      <button
        type={'button'}
        onClick={() => setActive(prevState => !prevState)}
        className="favorite__button">
        <svg>
          <use xlinkHref={'#favorite'} />
        </svg>
      </button>
    </div>
  );
};

export default Favorite;
