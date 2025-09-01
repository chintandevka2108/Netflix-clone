import React from 'react';
import { TitleCards } from '../../Components/TitleCards/TitleCards';
import './Kids.css';

export const Kids = ({ isLoggedIn }) => {
  return (
    <div className='kids-page'>
      <div className="kids-header">
        <h1>Kids</h1>
      </div>
      <div className="content-wrapper">
        <TitleCards 
          title={"Family Movies"} 
          category={"discover/movie?with_genres=10751"} 
          isLoggedIn={isLoggedIn} 
        />
        <TitleCards 
          title={"Animation"} 
          category={"discover/movie?with_genres=16"} 
          isLoggedIn={isLoggedIn} 
        />
        <TitleCards 
          title={"Kids TV"} 
          category={"discover/tv?with_genres=10762"} 
          isLoggedIn={isLoggedIn} 
        />
      </div>
    </div>
  );
};