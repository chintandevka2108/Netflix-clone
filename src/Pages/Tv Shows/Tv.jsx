import React from 'react';
import { TitleCards } from '../../Components/TitleCards/TitleCards';
import './TVShows.css';

export const TVShows = ({ isLoggedIn }) => {
  return (
    <div className='tv-shows-page'>
      <div className="content-wrapper">
        <TitleCards 
          title={"Popular TV Shows"} 
          category={"tv/popular"} 
          isLoggedIn={isLoggedIn} 
        />
        <TitleCards 
          title={"Top Rated TV"} 
          category={"tv/top_rated"} 
          isLoggedIn={isLoggedIn} 
        />
        <TitleCards 
          title={"TV Dramas"} 
          category={"discover/tv?with_genres=18"} 
          isLoggedIn={isLoggedIn} 
        />
        <TitleCards 
          title={"Comedy TV"} 
          category={"discover/tv?with_genres=35"} 
          isLoggedIn={isLoggedIn} 
        />
      </div>
    </div>
  );
};