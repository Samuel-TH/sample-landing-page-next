export default function LandingContact({ block, dataBinding }) {
    return (
        <div className="contact-form__container">
            <div className="contact-form__content">
                <h3 className="heading" style={{"text-align": "center", "margin-bottom": "48px"}}>Sign up for your free consultation.<br /> Learn how life without Type 2 diabetes <br /> is possible with Twin Health.</h3>
                <form className="contact-form" name="contactForm" id="contact_form" action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" onsubmit="return validateForm()" method="post">
                    <input type="hidden" name="oid" value="00D040000008ki8" id="oid" />
                    <input
                        type="hidden"
                        name="retURL"
                        id="retURL"
                        value="https://twin-health-lp.webflow.io/appointment-scheduling-test"
                    />
                    <input type="hidden" id="campaignId" name="Campaign_ID" value="70104000000IVnW" />

                    <label className="visually-hidden" for="first_name">First Name*</label>
                    <input type="text" id="first_name" name="first_name" placeholder="First name*" required />

                    <label className="visually-hidden" for="last_name">Last Name*</label>
                    <input type="text" id="last_name" name="last_name" placeholder="Last name*" required />

                    <label className="visually-hidden" for="00N5Y00000Qc3xa">Blue Care Network member ID</label>
                    <input type="text" id="00N5Y00000Qc3xa" name="00N5Y00000Qc3xa" placeholder="Blue Care Network member ID" />

                    <div className="contact_form_row birthdate_row">
                        <label className="visually-hidden" for="00N5Y00000TioGt">Date of Birth</label>
                        <input style={{width: "100%" }} id="00N5Y00000TioGt" name="00N5Y00000TioGt" size="12" type="text" placeholder="Birthdate (MM/DD/YYYY)*" pattern="^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19\d{2}|20[0-1]\d|202[0-2])$" required />
                        <img id="calendarIcon" className="calendarIcon" src="https://uploads-ssl.webflow.com/61bb94aac2044c184bd14b46/64719b336194e83c48901d58_calendar.svg" />
                    </div>

                    <label for="country_code" style={{display: "none"}} className="hidden-label">Country</label>
                    <select style={{display: "none"}} id="country_code" name="country_code">
                        <option value="">--None--</option>
                        <option value="US" selected>US</option>
                    </select>
                    <label for="state_code" className="hidden-label">State</label>
                    <select
                        className="state-code-select"
                        id="state_code"
                        name="state_code"
                        required
                    >
                        <option value="" disabled selected hidden>State*</option>
                        <option value="AL">AL</option>
                        <option value="AK">AK</option>
                        <option value="AZ">AZ</option>
                        <option value="AR">AR</option>
                        <option value="CA">CA</option>
                        <option value="CO">CO</option>
                        <option value="CT">CT</option>
                        <option value="DE">DE</option>
                        <option value="DC">DC</option>
                        <option value="FL">FL</option>
                        <option value="GA">GA</option>
                        <option value="HI">HI</option>
                        <option value="ID">ID</option>
                        <option value="IL">IL</option>
                        <option value="IN">IN</option>
                        <option value="IA">IA</option>
                        <option value="KS">KS</option>
                        <option value="KY">KY</option>
                        <option value="LA">LA</option>
                        <option value="ME">ME</option>
                        <option value="MD">MD</option>
                        <option value="MA">MA</option>
                        <option value="MI">MI</option>
                        <option value="MN">MN</option>
                        <option value="MS">MS</option>
                        <option value="MO">MO</option>
                        <option value="MT">MT</option>
                        <option value="NE">NE</option>
                        <option value="NV">NV</option>
                        <option value="NH">NH</option>
                        <option value="NJ">NJ</option>
                        <option value="NM">NM</option>
                        <option value="NY">NY</option>
                        <option value="NC">NC</option>
                        <option value="ND">ND</option>
                        <option value="OH">OH</option>
                        <option value="OK">OK</option>
                        <option value="OR">OR</option>
                        <option value="PA">PA</option>
                        <option value="PR">PR</option>
                        <option value="RI">RI</option>
                        <option value="SC">SC</option>
                        <option value="SD">SD</option>
                        <option value="TN">TN</option>
                        <option value="TX">TX</option>
                        <option value="UT">UT</option>
                        <option value="VT">VT</option>
                        <option value="VA">VA</option>
                        <option value="VI">VI</option>
                        <option value="WA">WA</option>
                        <option value="WV">WV</option>
                        <option value="WI">WI</option>
                        <option value="WY">WY</option>
                    </select>

                    <label className="visually-hidden" for="email">Email*</label>
                    <input type="email"
                        placeholder="Email*"
                        id="email"
                        maxlength="80"
                        name="email"
                        size="20"
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                        title="Please enter a valid email address"
                        required
                    />

                    <label className="visually-hidden" for="phone">Mobile phone number</label>
                    <input type="phone" id="phone" name="phone" maxlength="100" size="20" placeholder="Mobile phone number" />

                    <label className="checkbox__container checkbox__container-new" for="00N5Y00000UHJbn" id="emailAlertsLabel">
                        <input type="checkbox" id="00N5Y00000UHJbn" name="00N5Y00000UHJbn" value="1" />
                        <span>I agree to receive emails and understand that I can opt out anytime.</span>
                    </label>

                    <label className="checkbox__container" for="00N5Y00000T5WBb" id="smsAlertsLabel">
                        <input type="checkbox" id="00N5Y00000T5WBb" name="00N5Y00000T5WBb" value="1" />
                        <span>I agree to receive SMS alerts and understand I can opt out anytime.
                            <div className="sms__read-more-container">
                                <span className="sms__read-more primary" id="sms-expand"> Read more </span>
                                <svg id="expand-icon" width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 1.5L6.5 6.5L11.5 1.5" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </span>
                    </label>

                    <p className="reveal-if-sms" style={{margin: 0 + "!important"}}>By entering your mobile number and checking this box you agree to receive text alerts from Twin Health. Text HELP to 56859 for help or STOP to 56859 to end. Frequency varies, message & data rates apply. By opting in, you authorize Twin Health to deliver SMS messages using an automatic telephone dialing system and you understand that you are not required to opt in. By leaving this box unchecked you will not be opted in. Click to read
                        <span className="orange"><a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1Qx-h-MoZxneqbf5MZvKZdY717C_FP0uY/edit">Terms of Use</a></span> and <span className="orange"><a target="_blank" rel="noreferrer" href="https://www.usa.twinhealth.com/privacy-policy">Privacy policy.</a></span>
                    </p>

                    <label className="checkbox__container" for="terms">
                        <input type="checkbox" id="terms" name="terms" value="1" required />
                        <span className="form_tos">
                            I agree to the&nbsp;
                            <a className="form__link" href="https://www.usa.twinhealth.com/terms-of-use" target="_blank" rel="noreferrer">terms of use,&nbsp;</a>
                            <a className="form__link" href="https://www.usa.twinhealth.com/privacy-policy" target="_blank" rel="noreferrer">privacy policy</a>
                            &nbsp;and&nbsp;
                            <a className="form__link" href="https://docs.google.com/document/d/1VlJGa5LLzYytI9T3YGefDs15BQ1gm_7Y/edit?usp=sharing&ouid=108475280664340247693&rtpof=true&sd=true" target="_blank" rel="noreferrer">privacy practices.</a>
                        </span>
                    </label>

                    <label for="00N5Y00000QeOKA" className="hidden-label">Blue Care Network of Michigan</label>
                    <input
                        style={{display: "none"}}
                        id="00N5Y00000QeOKA"
                        maxlength="255"
                        name="00N5Y00000QeOKA"
                        size="20"
                        type="text"
                        value="Blue Care Network of Michigan"
                    />

                    <label for="00N5Y00000QeOJl" className="hidden-label">Inbound Source Type</label>
                    <input id="00N5Y00000QeOJl" className="inbound-source-type hidden-input" maxlength="10" name="00N5Y00000QeOJl" size="20" type="text" value="PEJan"></input>

                    <input className="contact-form__button" type="submit" name="submit" value="Get started now" />
                </form>
            </div>
        </div>
    );
}