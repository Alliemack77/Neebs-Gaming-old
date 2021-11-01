import ReactPlayer from "react-player";
import {FiYoutube, FiFacebook, FiTwitter, FiTwitch, FiInstagram} from 'react-icons/fi';


export default function Hero () {
    return (
        <section className="section">
            <div className="grid">
                <h1 className="title"><span className="accent">Neebs</span> Gaming</h1>
                <h2 className="banner-cta">streaming on <a className="bold" href="https://www.twitch.tv/neebsgaming" target="_blank" rel="noreferrer" >Twitch Thursdays</a> @ <a className="bold" href="https://www.twitch.tv/neebsgaming">8pm</a> EST</h2>
                
                <div className="player-wrapper">
                    <ReactPlayer
                        className="twitch-player"
                        url="https://www.twitch.tv/videos/1109399006"
                        controls>
                    </ReactPlayer>
        
                </div>

                <div className="player-wrapper">
                    <iframe
                        className="iframe"
                        src="https://www.youtube.com/embed?max-results=1&controls=1&rel=0&listType=user_uploads&list=NeebsGaming"
                        frameBorder="0"
                        allowFullScreen
                        >
                    </iframe>
                </div>

                <div className="cta">
                    <a className="heading" href="https://www.youtube.com/user/NeebsGaming" target="_blank" rel="noreferrer">join the party!</a>
                    <div className="social">
                        <a className="social-link" href="https://www.youtube.com/user/NeebsGaming" target="_blank" rel="noreferrer"><FiYoutube/></a>
                        <a className="social-link" href="https://www.twitch.tv/neebsgaming" target="_blank" rel="noreferrer"><FiTwitch/></a>
                        <a className="social-link" href="https://twitter.com/NeebsOfficial" target="_blank" rel="noreferrer"><FiTwitter/></a>
                        <a className="social-link" href="https://www.facebook.com/neebsgaming/" target="_blank" rel="noreferrer"><FiFacebook/></a>
                        <a className="social-link" href="https://www.instagram.com/neebsgaming/?hl=en" target="_blank" rel="noreferrer"><FiInstagram/></a>
                    </div>
                </div>
                   
            </div>
{/* 
            <div>
                <p className="body">Welcome to <span className="accent">Neebs</span> Gaming, the best YouTube gaming channel in the world! We play Battlefield 4, GTA 5, Minecraft, Ark and many other titles. </p>
            </div> */}
        </section>

    )
}  