import React from 'react';

import Menu from '../../components/Menu'

import './styles.css'

function Contact() {
    return (
        <main className="main">
            <Menu page="contact"/>
            <div className="contacts">
                <h1>ABOUT</h1>
                <div className="about">
                    <h2>Douglas Walas Rodrigues Pardim</h2>
                    <div className="mail">
                        <p>
                            Email Principal:
                            <a href="mailto:douglas.skd@gmail.com" className="links"> douglas.skd@gmail.com</a>
                        </p>
                        <p>
                            Email Alternativo:
                            <a href="mailto:douglas_walas@hotmail.com" className="links"> douglas_walas@hotmail.com</a>
                        </p>
                    </div>
                    <p className="tel">
                        Telefone:
                        <a href="tel:+5527996950412" className="links"> +55(27)99695-0412</a>
                    </p>

                    <div className="network">
                        <a href="https://github.com/DWRP" target="_blank" rel="noopener noreferrer" className="links">
                            <img className="github" src="https://image.flaticon.com/icons/svg/733/733553.svg" alt="github" />
                        </a>

                        <a href="https://linkedin.com/in/douglaswalas/" target="_blank" rel="noopener noreferrer" className="links">
                            <img className="linkedin" src="https://image.flaticon.com/icons/svg/1409/1409945.svg" alt="linkedin" />
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Contact;