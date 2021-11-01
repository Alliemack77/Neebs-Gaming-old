export default function Video ({latestVideo, patreonVideo}) {
    
    let src, title, heading, subheading;
 
    if (latestVideo) {
        src="https://www.youtube.com/embed?max-results=1&controls=1&rel=0&listType=user_uploads&list=NeebsGaming"
        title="Neebs Gaming latest video"
        heading="watch our latest video"
    } else {
        src="https://www.youtube.com/embed/YoPKzFQE_F0?&rel=0"
        title="Neebs Gaming Patreon video"
        heading="support us on patreon"
        subheading = (<p className="subtitle">If you enjoy our shenanigans and want to see more</p>)
    }

    return (
        <>
            <section className="video">
                <div className="video-wrapper">
                    {subheading}
                    <h2 className="heading">{heading}</h2>
                    <iframe 
                        className="iframe"
                        src={src} 
                        frameBorder="0" 
                        allowFullScreen
                        title={title}>
                    </iframe>
                </div>
            </section>
        </>
    )
    
}