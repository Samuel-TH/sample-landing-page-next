import LandingCta from "./cta";

export default function LandingHero(block, dataBinding) {
    return (
        <>
            <div className="container lp-section hero" data-cms-bind={dataBinding}>
                <div className="row lp-hero-banner">
                    <div className="col">
                        <h1 className="main-headline">Reclaim your health</h1>
                        <p className="sub-headline">Life without Type 2 diabetes is possible. Now you can safely
                            reduce or eliminate Type 2 diabetes medications and shed unwanted weight with<br />the Twin Health
                            program. <br /><br />Twin Health is a new pilot program* offered by Blue Care Network.</p>
                    </div>
                    <div className="col">
                        <iframe
                            style={{height: 300 + 'px', width: 530 + 'px' }}
                            src="https://player.vimeo.com/video/851460585?loop=false&amp;autoplay=false&amp;muted=false&amp;gesture=media&amp;playsinline=true&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=false&amp;customControls=true"
                            allowfullscreen="true"
                            allow="autoplay; fullscreen; picture-in-picture; encrypted-media; accelerometer; gyroscope"
                            title="Player for Twin Health Member Testimonials" data-ready="true" tabindex="-1"></iframe>
                    </div>
                    <LandingCta></LandingCta>
                </div>
            </div>
        </>
    );
}