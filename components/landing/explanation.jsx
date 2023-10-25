export default function LandingExplanation ({block, dataBinding}) {
    return (
        <div class="lp-section explanation" data-cms-bind={dataBinding}>
        <h1 class="section-header">How the Twin Health program works</h1>
        <div class="three-column">
            <div class="how-it-works__content-block">
                <img
                    alt=""
                    src="https://assets-global.website-files.com/61bb94aac2044c184bd14b46/64add609a1d003e93fd8109b_TH-BC-7.jpg"/>
                <p class="step-header">STEP 1</p>
                <h1 class="how_it_work_header">Schedule a free consultation</h1>
                <div class="how_it_work_description">Speak with a Twin Health enrollment advisor who will assess your
                    eligibility and goals, review the Twin
                    Health program and walk you through the steps to enroll.</div>
            </div>
            <div class="how-it-works__content-block">
                <img
                    alt=""
                    src="https://assets-global.website-files.com/61bb94aac2044c184bd14b46/64ade07c28dbe916bac3415a_twin-phone-3col-2.png"/>
                <p class="step-header">STEP 2</p>
                <h1 class="how_it_work_header">Get verified for the program</h1>
                <div class="how_it_work_description">Download the Twin Health app, set up your health profile and complete a
                    lab test to verify that you’re clinically eligible for the program.</div>
            </div>
            <div class="how-it-works__content-block">
                <img
                    alt=""
                    src="https://assets-global.website-files.com/61bb94aac2044c184bd14b46/64c31f9827e7e7c97f2256da_Lifestyle_03.jpeg"/>
                <p class="step-header">STEP 3</p>
                <h1 class="how_it_work_header">Activate your Whole Body Digital Twin<sup>TM</sup></h1>
                <div class="how_it_work_description">Once verified, you will meet your Twin Health care team through video
                    visits to help you set up your sensors that include a continuous glucose monitor, blood pressure
                    monitor, smart scale and an activity tracker — all at no cost to you.</div>
            </div>
        </div>
        <div class="additional_text">With your app and sensors in place, your Whole Body Digital Twin is
            activated. It sends you <br/>daily guidance on actions you can take to safely reduce or eliminate Type 2 diabetes
            medications and lose weight. <br/>Your care team works with you and your primary care provider every step of the
            way.
        </div>
    </div>
    );
}