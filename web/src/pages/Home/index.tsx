import React from 'react';
import './styles.css'

import background from '../../assets/images/background.svg'

function Home() {
  return (
    <main className="main">
        <div className="left-column">
            <div className="title">
                <p>Fullstack Developer</p><span>Jr</span>
            </div>
            <div className="description">
                <h1>Show me your problem. <br /> I search the solution</h1>
                <p>I learning and code something.</p>
                <p>and I love this.</p>
            </div>
        </div>
        <div className="right-column">
            <img src={background} alt=""/>
        </div>
    </main>

  );
}

export default Home;
