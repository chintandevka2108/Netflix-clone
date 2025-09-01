import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';

export const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWYyNTc2YWQ0MDE2OWNlNTY5ZjY5YTVjNjNlZDQxZSIsIm5iZiI6MTc1MzAxNjkzMC43MzgsInN1YiI6IjY4N2NlYTYyMmM1YWEzMTM0NTM4ZDY1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aCO9AHnzXUQyXYUSmn4bbWKBf5V5HcIC43zte6L0Djk',
    },
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${category || 'now_playing'}?language=en-US&page=1`,
      options
    )
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch movies');
        return res.json();
      })
      .then((res) => {
        setApiData(res.results || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [category]);

  const scroll = (direction) => {
    const { current } = cardsRef;
    if (!current) return;
    if (direction === 'left') current.scrollLeft -= 350;
    else current.scrollLeft += 350;
  };

  return (
    <div className="title-cards">
      <h2>{title || 'Popular On Netflix'}</h2>
      <div className="scroll-wrapper">
        <button className="scroll-btn left" onClick={() => scroll('left')}>
          &lt;
        </button>

        <div className="card-list" ref={cardsRef}>
          {error && <p className="error-message">⚠️ {error}</p>}

          {loading ? (
            [...Array(6)].map((_, i) => (
              <div className="card skeleton" key={i}>
                <div className="skeleton-img"></div>
                <div className="skeleton-text"></div>
              </div>
            ))
          ) : apiData.length > 0 ? (
            apiData.map((card, index) => (
              <div className="card" key={index}>
                <Link to={`/player/${card.id}`}>
                  <img
                    src={
                      card.poster_path
                        ? `https://image.tmdb.org/t/p/w500${card.poster_path}`
                        : 'https://via.placeholder.com/200x300?text=No+Image'
                    }
                    alt={card.original_title || card.title}
                  />
                  <div className="card-overlay">
                    <h3>{card.original_title || card.title}</h3>
                    <div className="card-actions">
                      <button className="play-btn">▶</button>
                      <button className="add-btn">＋</button>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            !error && <p className="no-results">No movies found.</p>
          )}
        </div>

        <button className="scroll-btn right" onClick={() => scroll('right')}>
          &gt;
        </button>
      </div>
    </div>
  );
};
