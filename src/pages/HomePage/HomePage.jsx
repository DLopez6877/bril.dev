import React from 'react';
import './HomePage.scss'
import ParallaxHero from '../../components/ParallaxHero/ParallaxHero';
import Nav from '../../components/Nav/Nav';

const HomePage = () => {
    return (
        <div className="home-page-container">
            <Nav />
            <ParallaxHero />
            <h1>SOME HEADER</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut sequi iste maxime quibusdam repudiandae, accusamus repellat itaque eveniet architecto nobis id praesentium! Repellendus ut impedit neque ipsum inventore sint?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut sequi iste maxime quibusdam repudiandae, accusamus repellat itaque eveniet architecto nobis id praesentium! Repellendus ut impedit neque ipsum inventore sint?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut sequi iste maxime quibusdam repudiandae, accusamus repellat itaque eveniet architecto nobis id praesentium! Repellendus ut impedit neque ipsum inventore sint?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut sequi iste maxime quibusdam repudiandae, accusamus repellat itaque eveniet architecto nobis id praesentium! Repellendus ut impedit neque ipsum inventore sint?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut sequi iste maxime quibusdam repudiandae, accusamus repellat itaque eveniet architecto nobis id praesentium! Repellendus ut impedit neque ipsum inventore sint?</p>
        </div>
    );
};

export default HomePage;