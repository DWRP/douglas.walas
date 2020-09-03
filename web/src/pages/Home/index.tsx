import React from 'react';

import Menu from '../../components/Menu'


import './styles.css'

import category from '../../assets/images/category.png'
import profile from '../../assets/images/profile.jpg'

function Home() {
  return (
    <main className="main">
        <Menu />
        <div className="home">

            <div className="description">
                <img src={category} alt="profission"/>
                <h1>
                    SHOW ME YOUR PROBLEM
                </h1>
                <p>
                    I SEARCH THE SOLUTION. <br />
                    I EVER LEARNING AND CODE SOMETHING. <br />
                    AND I LOVE THIS. <br />
                </p>
            </div>
            <div className="image">
                <img src={profile} alt="profile" />
            </div>
        </div>
    </main>

  );
}

export default Home;
