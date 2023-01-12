import React from 'react'


import { StyledShowCard } from './ShowCard.styled';
import { Star } from '../styled';

const ShowCard = ({ id, image, name, summary, onStarClick }) => {
    const summaryAsText = summary
      ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, "")}...`
      : 'No description';
  
    return (
      <StyledShowCard>
        <div className='img-wrapper'>
          <img src={image} alt="show" />
        </div>
  
        <h1>{name}</h1>
  
        <p>{summaryAsText}</p>
  
        <div className="btns">
          
          <button type="button" onClick={onStarClick}>
            <Star/>
            </button>
        </div>
      </StyledShowCard>
    );
  };

export default ShowCard
