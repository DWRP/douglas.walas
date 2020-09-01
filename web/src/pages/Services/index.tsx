import React from 'react';

import Card from '../../components/Card'

import './styles.css'

function Home() {
    const cards = [
        {
            title: "WEB",
            image: "https://image.flaticon.com/icons/svg/216/216220.svg",
            description: "Create web projects with Node, React and others"
        },
        {
            title: "MOBILE",
            image: "https://image.flaticon.com/icons/svg/544/544520.svg",
            description: "Create mobile apps with React Native and Flutter"
            
        },
        {
            title: "AUTOMATION",
            image: "https://image.flaticon.com/icons/svg/2920/2920349.svg",
            description: "Do scripts with python to capture and analityc data (SQL, NO-SQL and Scrapping)"
        }
    ]
    return (

    <main className="main">
        <div className="contant">
            {
                cards.map((item,index)=>{
                    return (
                        <Card title={item.title} image={item.image} description={item.description} key={index}/>
                    )
                })
            }
        </div>
    </main>

  );
}

export default Home;
