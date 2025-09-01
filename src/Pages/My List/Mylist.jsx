import React, { useState, useEffect } from 'react';
import { TitleCards } from '../../Components/TitleCards/TitleCards';
import './MyList.css';

export const MyList = ({ isLoggedIn }) => {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    // In a real app, fetch from backend
    const savedList = JSON.parse(localStorage.getItem('netflixMyList')) || [];
    setMyList(savedList);
  }, []);

  return (
    <div className='my-list-page'>
      <div className="content-wrapper">
        {isLoggedIn ? (
          myList.length > 0 ? (
            <TitleCards 
              title={"My List"} 
              customData={myList} 
              isLoggedIn={isLoggedIn} 
            />
          ) : (
            <div className="empty-list">
              <h2>Your list is empty</h2>
              <p>Add movies and shows to watch them later</p>
            </div>
          )
        ) : (
          <div className="login-prompt">
            <h2>Sign in to view your list</h2>
            <p>Save your favorite content to watch later</p>
          </div>
        )}
      </div>
    </div>
  );
};