import {useState} from 'react';
import {Link} from 'react-router-dom';
const logo = require("../assets/logo.png");

export default function Nav () {

    const [isToggled, setIsToggled] = useState(false);

    return (
        <header>
            
            <section className={`nav-container ${isToggled ? "nav-open" : ""}`}>
                <div className="logo">
                    <Link to="/">
                        <img src={logo.default} alt="Neebs Gaming Logo"></img>
                    </Link>
                </div>  
                

                <nav>
                    
                    <button className="nav-toggle" aria-label="toggle-naviation" onClick={() => setIsToggled(!isToggled)}>
                        <span className="hamburger"></span>
                    </button>

                    <div className="nav">
                        <ul className="nav-list">
                            <li className="nav-list--item">
                                <Link className="nav-link" to="/" onClick={() => setIsToggled(false)}>Home</Link>
                            </li>

                            <li className="nav-list--item">
                                <Link className="nav-link" to="/about" onClick={() => setIsToggled(false)}>About</Link>
                            </li>

                            <li className="nav-list--item">
                                <Link className="nav-link" to="/community" onClick={() => setIsToggled(false)}>Community</Link>
                            </li>

                            <li className="nav-list--item">
                                <Link className="nav-link" to="/series" onClick={() => setIsToggled(false)}>Series</Link>
                            </li>

                            <li className="nav-list--item">
                                <Link className="nav-link" to="/store" onClick={() => setIsToggled(false)}>Store</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>

            <section className="banner">
                <p className="banner-cta">streaming on <a className="bold" href="https://www.twitch.tv/neebsgaming">Twitch Thursdays</a> @ <a className="bold" href="https://www.twitch.tv/neebsgaming">8pm</a> EST</p>
            </section>

        </header>





    );
}