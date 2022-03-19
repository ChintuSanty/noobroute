import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export default class AboutTwo extends Component {
    constructor(){
        super()
        this.state = {
            startCounter: false
        }
    }

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({startCounter: true});
        }
    }

    render() {
        return (
            <section className="about-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-two__content">
                                <div className="block-title text-left">
                                    <h2 className="block-title__title">Welcome to career <br />
                                        enhancment platform</h2>
                                </div>
                                <p className="about-two__text"> NoobRoute is a community of experienced people. People at NoobRoute are building a path for the upcoming engineers to make them market-ready. We are here to make the engineers aware of the opportunities they can opt for from the market. We have curated a path for everyone who wants to make their career as they desired.</p>
                                <div className="about-two__single-wrap">
                                    <div className="about-two__single">
                                        <div className="about-two__single-icon">
                                            <i className="kipso-icon-professor"></i>
                                        </div>
                                        <div className="about-two__single-content">
                                            <p className="about-two__single-text">Start learning from
                                                our experts</p>
                                        </div>
                                    </div>
                                    <div className="about-two__single">
                                        <div className="about-two__single-icon">
                                            <i className="kipso-icon-knowledge"></i>
                                        </div>
                                        <div className="about-two__single-content">
                                            <p className="about-two__single-text">Enhance your skills
                                                with us now</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="thm-btn">Learn More</a>
                            </div>
                        </div>
                        <div className="col-xl-6 d-flex justify-content-xl-end justify-content-sm-center">
                            <div className="about-two__image">
                                <span className="about-two__image-dots"></span>
                                <img src="/assets/images/abt.png" alt="" />
                                    <div className="about-two__count">
                                        <div className="about-two__count-text">Trusted by
                                            <span className="counter">
                                                <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 4890 : 0} /></VisibilitySensor>
                                            </span></div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}