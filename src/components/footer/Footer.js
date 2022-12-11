import React from 'react'
import "./Footer.scss";
import facebook from '../../assets/img/facebook.svg'
import twit from '../../assets/img/twit.svg'
import inst from '../../assets/img/inst.svg'
import linked from '../../assets/img/link.svg'

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer__about">
                    <div className="footer__title">
                        Subscribe to Atelier Newsletter
                    </div>
                    <div className="footer__subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                    </div>
                </div>
                <div className="footer__links">
                    <div className="footer__cube">
                        <div className="footer__blackCube"></div>
                        <div className="footer__orangeCube"></div>
                    </div>
                    <p className='footer__links-text'>* By clicking button, you agree to our Terms and that you have read our</p>
                    <div className="footer__mess">
                        <div className="footer__mess-item">
                            <img src={facebook} alt="fb" />
                        </div>
                        <div className="footer__mess-item">
                            <img src={twit} alt="fb" />
                        </div>
                        <div className="footer__mess-item">
                            <img src={inst} alt="fb" />
                        </div>
                        <div className="footer__mess-item">
                            <img src={linked} alt="fb" />
                        </div>
                    </div>
                </div>
                <div className="footer__end">
                    <div className="footer__powered">
                        Powered by <span className='yell'>Webflow</span>
                    </div>
                    <div className="footer__dop">
                        <p>License</p>
                        <p className='line'>Style Guide</p>
                        <p>Instruction</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer