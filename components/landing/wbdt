import LandingCta from "./cta";

export default function LandingHero({block, dataBinding}) {
    return (
        <>
            <div className="container lp-section hero" data-cms-bind={dataBinding}>
                <div className="row lp-hero-banner">
                    <div className="col">
                        <h1 className="main-headline">{block.headline}</h1>
                        <p className="sub-headline">{block.description}</p>
                    </div>
                    <div className="col">
                        <iframe
                            style={{height: 300 + 'px', width: 530 + 'px' }}
                            src={block.videoSrc}
                            allowFullScreen={true}
                            allow="autoplay; fullscreen; picture-in-picture; encrypted-media; accelerometer; gyroscope"
                            title="Player for Twin Health Member Testimonials" data-ready="true" tabIndex="-1"></iframe>
                    </div>
                    <LandingCta></LandingCta>
                </div>
            </div>
        </>
    );
}