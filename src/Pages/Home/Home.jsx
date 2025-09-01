import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Navbar } from '../../Components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import { TitleCards } from'../../Components/TitleCards/TitleCards';
import { Footer } from '../../Components/Footer/Footer';
import './Home.css';

export const Home = ({ isLoggedIn }) => {
  const [visibleSections, setVisibleSections] = useState({
    blockbuster: false,
    netflix: false,
    upcoming: false,
    topForYou: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      
      setVisibleSections({
        blockbuster: scrollPosition > document.getElementById('blockbuster')?.offsetTop - 300,
        netflix: scrollPosition > document.getElementById('netflix')?.offsetTop - 300,
        upcoming: scrollPosition > document.getElementById('upcoming')?.offsetTop - 300,
        topForYou: scrollPosition > document.getElementById('topForYou')?.offsetTop - 300
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='home dark-mode'>
      {/* The Navbar is now rendered here */}
      <Navbar isLoggedIn={isLoggedIn} /> 
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <Container>
          <Row>
            <Col xs={12} sm={10} md={8} lg={6} xl={5}>
              <div className="hero-caption">
                <img src={hero_title} alt="" className='caption-img' />
                <p className="hero-description">
                  Discovering his ties to a secret ancient order, a young man living in modern Istanbul 
                  embarks on a quest to save the city from an immortal enemy.
                </p>
                <div className="hero-btns">
                  <Button variant="light" className='play-btn'>
                    <img src={play_icon} alt="" className="btn-icon" /> Play
                  </Button>
                  <Button variant="dark" className='info-btn'>
                    <img src={info_icon} alt="" className="btn-icon" /> More Info
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      <Container fluid className="more-cards">
        <div id="blockbuster" className={`section ${visibleSections.blockbuster ? 'visible' : ''}`}>
          <TitleCards title={"Blockbuster Movies"} category={"top_rated"} isLoggedIn={isLoggedIn} />
        </div>
        <div id="netflix" className={`section ${visibleSections.netflix ? 'visible' : ''}`}>
          <TitleCards title={"Only On Netflix"} category={"popular"} isLoggedIn={isLoggedIn} />
        </div>
        <div id="upcoming" className={`section ${visibleSections.upcoming ? 'visible' : ''}`}>
          <TitleCards title={"Upcoming"} category={"upcoming"} isLoggedIn={isLoggedIn} />
        </div>
        <div id="topForYou" className={`section ${visibleSections.topForYou ? 'visible' : ''}`}>
          <TitleCards title={"Top For You"} category={"now_playing"} isLoggedIn={isLoggedIn} />
        </div>
      </Container>
      <Footer/>
    </div>
  );
};