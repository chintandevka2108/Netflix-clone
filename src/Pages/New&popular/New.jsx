import React from 'react';
import { TitleCards } from '../../Components/TitleCards/TitleCards';
import './NewPopular.css';

export const NewPopular = ({ isLoggedIn }) => {
  return (
    <div className='new-popular-page'>
      <div className="content-wrapper">
        <TitleCards 
          title={"Trending Now"} 
          category={"trending/all/week"} 
          isLoggedIn={isLoggedIn} 
        />
        <TitleCards 
          title={"New Releases"} 
          category={"movie/now_playing"} 
          isLoggedIn={isLoggedIn} 
        />
        <TitleCards 
          title={"Coming Soon"} 
          category={"movie/upcoming"} 
          isLoggedIn={isLoggedIn} 
        />
      </div>
    </div>
  );
};