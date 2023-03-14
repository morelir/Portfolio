import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import electronicImg from '../../assets/images/Elctronic Store.webp'
import crmImg from '../../assets/images/Fault Management System.webp'
import cinemaImg from '../../assets/images/Automated Cinema Ticketing.webp'
import omnifoodImg from "../../assets/images/Omnifood.webp"
import onlineCodingImg from "../../assets/images/Online Coding.webp"


// import { getDocs, collection } from 'firebase/firestore';
// import { db } from '../../firebase';

const Projects = () => {
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
            <p className="title">Electronic Store</p>
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
          <img src={omnifoodImg} className="portfolio-image" alt="portfolio" />
          <div className="content">
            <p className="title">Omnifood</p>
            <button
              className="btn"
              onClick={() =>
                window.open(
                  `https://omnifood-healty-diet.netlify.app/`
                )
              }
            >
              View
            </button>
          </div>
        </div>

        <div className="image-box">
          <img src="https://user-images.githubusercontent.com/58606266/218529602-b405f55f-4748-455f-82c7-4a5c4811bc43.png" className="portfolio-image" alt="portfolio" />
          <div className="content">
            <p className="title">Ecommerce Filter Application</p>
            <button
              className="btn"
              onClick={() =>
                window.open(
                  `https://github.com/morelir/react-filter-sort-pagination-ecommerce-main`
                )
              }
            >
              View
            </button>
          </div>
        </div>

        <div className="image-box">
          <img src={onlineCodingImg} className="portfolio-image" alt="portfolio" />
          <div className="content">
            <p className="title">Online Coding</p>
            <button
              className="btn"
              onClick={() =>
                window.open(
                  `https://github.com/morelir/Online-Coding`
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
              style={{letterSpacing:"2px"}}
              letterClass={letterClass}
              strArray={'Projects'.split('')}
              idx={15}
            />
          </h1>
          <>{renderPortfolio(portfolio)}</>
        </div>
      </div>
      <Loader type="ball-pulse" />
    </>
  )
}

export default Projects
