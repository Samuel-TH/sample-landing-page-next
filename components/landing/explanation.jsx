export default function LandingExplanation({ block, dataBinding }) {
    return (
        <div className="lp-section explanation" data-cms-bind={dataBinding}>
            <h1 className="section-header">{block.title}</h1>
            <div className="three-column">
                <div className="how-it-works__content-block">
                    <img
                        alt=""
                        src="https://assets-global.website-files.com/61bb94aac2044c184bd14b46/64add609a1d003e93fd8109b_TH-BC-7.jpg" />
                    <p className="step-header">STEP 1</p>
                    <h1 className="how_it_work_header">Schedule a free consultation</h1>
                    <div className="how_it_work_description">{block.step1}</div>
                </div>
                <div className="how-it-works__content-block">
                    <img
                        alt=""
                        src="https://assets-global.website-files.com/61bb94aac2044c184bd14b46/64ade07c28dbe916bac3415a_twin-phone-3col-2.png" />
                    <p className="step-header">STEP 2</p>
                    <h1 className="how_it_work_header">Get verified for the program</h1>
                    <div className="how_it_work_description">{block.step2}</div>
                </div>
                <div className="how-it-works__content-block">
                    <img
                        alt=""
                        src="https://assets-global.website-files.com/61bb94aac2044c184bd14b46/64c31f9827e7e7c97f2256da_Lifestyle_03.jpeg" />
                    <p className="step-header">STEP 3</p>
                    <h1 className="how_it_work_header">Activate your Whole Body Digital Twin<sup>TM</sup></h1>
                    <div className="how_it_work_description">{block.step3}</div>
                </div>
            </div>
            <div className="additional_text">With your app and sensors in place, your Whole Body Digital Twin is
                activated. It sends you <br />daily guidance on actions you can take to safely reduce or eliminate Type 2 diabetes
                medications and lose weight. <br />Your care team works with you and your primary care provider every step of the
                way.
            </div>
        </div>
    );
}