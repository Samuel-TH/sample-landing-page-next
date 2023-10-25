import LandingCta from "./cta";

export default function LandingNav({ block, dataBinding }) {
    return (
        <section className="nav-bar" data-cms-bind={dataBinding}>
            <div className="logo-container">
                <img alt="" lassName="logo bcn-logo"
                    src="https://assets-global.website-files.com/61bb94aac2044c184bd14b46/64c2ef6853bfe9e1f0e78f83_BCN_logo%20wo%20dislcaimer_all%20blue_rgb%20(1).png" />
                <img alt="" className="logo"
                    src="https://assets-global.website-files.com/61bb94aac2044c184bd14b46/64c2f18b3a6f4b4cce3a0db0_Twin%20Health%20Primary%20Logo%20(4).png" />
            </div>
            <div className="nav-headline">Life without Type 2 diabetes is possible</div>
            <LandingCta></LandingCta>
        </section>
    );
}
