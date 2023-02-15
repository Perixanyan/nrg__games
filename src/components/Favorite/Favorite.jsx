import React from 'react';

const Favorite = () => {
  return (
    <div data-count={'5'} className="favorite active">
      <button className="favorite__button">
        <svg>
          <use xlinkHref={'#favorite'} />
        </svg>
      </button>
    </div>
  );
};

export default Favorite;
