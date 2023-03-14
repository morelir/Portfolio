import React from 'react'
import "./HeroImage.scss"

const HeroImage = () => {
  return (
    <div class="hero-img-container">
      <img className="hero-img" src={require("../../../assets/images/profile.webp")} alt="hero-img" />
      
    </div>
  )
}

export default HeroImage
