import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import electronicImg from '../../assets/images/Elctronic Store.PNG'
import crmImg from '../../assets/images/Fault Management System.PNG'
import cinemaImg from '../../assets/images/Automated Cinema Ticketing.PNG'
// import { getDocs, collection } from 'firebase/firestore';
// import { db } from '../../firebase';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState([])

  // useEffect(() => {
  //     const timer = setTimeout(() => {
  //         setLetterClass('text-animate-hover');
  //     }, 3000);

  //     return () => {
  //         clearTimeout(timer);
  //     }
  // });

  // useEffect(() => {
  //     getPortfolio();
  // }, []);

  // const getPortfolio = async () => {
  //     const querySnapshot = await getDocs(collection(db, 'portfolio'));
  //     setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
  // }

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        <div className="image-box">
          <img
            src={electronicImg}
            className="portfolio-image"
            alt="portfolio"
          />
          <div className="content">
            <p className="title">Elctronic Store</p>
            {/* <h4 className="description">
              Online Electronic Store with a variety of electronic products where you
              can register for the system and management a personal shopping
              cart, with responsive and interactive design.
            </h4> */}
            <button
              className="btn"
              onClick={() => window.open(`https://test-9b5eb.web.app/`)}
            >
              View
            </button>
          </div>
        </div>

        <div className="image-box">
          <img src={crmImg} className="portfolio-image" alt="portfolio" />
          <div className="content">
            <p className="title">Fault Management System</p>
            {/* <h4 className="description">
              Web application for fault management system that provides a
              centeral place where businesses can store client's fault data and
              track client interactions.
            </h4> */}
            <button
              className="btn"
              onClick={() =>
                window.open(
                  `https://github.com/morelir/Fault_Management_System`
                )
              }
            >
              View
            </button>
          </div>
        </div>

        <div className="image-box">
          <img src={cinemaImg} className="portfolio-image" alt="portfolio" />
          <div className="content">
            <p className="title">Automated Cinema Ticketing</p>
            {/* <h4 className="description">
            web application for ticket management to movie theater
            </h4> */}
            <button
              className="btn"
              onClick={() =>
                window.open(
                  `https://github.com/morelir/Automated-Cinema-Ticketing`
                )
              }
            >
              View
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Portfolio'.split('')}
              idx={15}
            />
          </h1>
          <>{renderPortfolio(portfolio)}</>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
