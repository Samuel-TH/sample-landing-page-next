import LandingCta from "./cta";

export default function LandingNav({ block, dataBinding }) {
    return (
        <section className="nav-bar" data-cms-bind={dataBinding}>
            <div className="logo-container">
                <img alt="" className="logo bcn-logo"
                    src={block.partnerLogo}/>
                <img alt="" className="logo"
                    src="https://assets-global.website-files.com/61bb94aac2044c184bd14b46/64c2f18b3a6f4b4cce3a0db0_Twin%20Health%20Primary%20Logo%20(4).png" />
            </div>
            <div className="nav-headline">{block.headline}</div>
            <LandingCta></LandingCta>
        </section>
    );
}
