import React from 'react';
const Star = ({ filled }) => (
    <span style={{ color: filled ? 'gold' : 'gray' }} className='text-[1.3rem]'>★</span>
  );
const StarRating = ({ count }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<Star key={i} filled={i < count} />);
    }
    return <div>{stars}</div>;
};

export default StarRating;
