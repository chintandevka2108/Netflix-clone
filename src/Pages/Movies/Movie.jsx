import React from 'react';
import { TitleCards } from '../../Components/TitleCards/TitleCards';
import './Movies.css';

export const Movies = ({ isLoggedIn }) => {
  return (
    <div className='movies-page'>
      <div className="content-wrapper">
        <TitleCards 
          title={"Popular Movies"} 
          category={"movie/popular"} 
          isLoggedIn={isLoggedIn} 
        />
        <TitleCards 
          title={"Top Rated Movies"} 
          category={"movie/top_rated"} 
          isLoggedIn={isLoggedIn} 
        />
        <TitleCards 
          title={"Action Movies"} 
          category={"discover/movie?with_genres=28"} 
          isLoggedIn={isLoggedIn} 
        />
        <TitleCards 
          title={"Comedy Movies"} 
          category={"discover/movie?with_genres=35"} 
          isLoggedIn={isLoggedIn} 
        />
      </div>
    </div>
  );
};