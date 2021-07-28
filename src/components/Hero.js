import {FiYoutube, FiFacebook, FiTwitter, FiTwitch, FiInstagram} from 'react-icons/fi';

export default function Hero () {
    return (
        <>
            <section className="hero">
                <div>
                    <h1 className="title"><span className="accent">Neebs</span> Gaming</h1>
                    <p className="subtitle">world peace and gaming circa 2015</p>
                </div>

                <div>
                    <p className="body">Welcome to <span className="accent">Neebs</span> Gaming, the best YouTube gaming channel in the world! We play Battlefield 4, GTA 5, Minecraft, Ark and many other titles. </p>
                </div>
            </section>

            <section className='hero-cta'>
                <div className="cta">
                    <p className="subtitle">If you like video games and world peace, </p>
                    <a className="heading" href="https://www.youtube.com/user/NeebsGaming" target="_blank" rel="noreferrer">join the party!</a>
                    <div className="social">
                        <a className="social-link" href="https://www.youtube.com/user/NeebsGaming" target="_blank" rel="noreferrer"><FiYoutube/></a>
                        <a className="social-link" href="https://www.twitch.tv/neebsgaming" target="_blank" rel="noreferrer"><FiTwitch/></a>
                        <a className="social-link" href="https://twitter.com/NeebsOfficial" target="_blank" rel="noreferrer"><FiTwitter/></a>
                        <a className="social-link" href="https://www.facebook.com/neebsgaming/" target="_blank" rel="noreferrer"><FiFacebook/></a>
                        <a className="social-link" href="https://www.instagram.com/neebsgaming/?hl=en" target="_blank" rel="noreferrer"><FiInstagram/></a>
                    </div>
                </div>
            </section>
        </>
    )
}