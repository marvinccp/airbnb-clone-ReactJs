import React from 'react'


function Hero() {
    return (
      <section className="hero-container">
        <img src="./assets/grid.png"  className="hero-grid" alt="logo" />
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
    );
}

export default Hero;