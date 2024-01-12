import React from "react";

import Hnworks from "../assets/img/Hnworks.png";

import { introText } from "../constants";

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">
                <h2 className="intro__title">
                    {introText.title}
                </h2>
                <div className="intro__lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="intro__text">
                    <div className="text">
                        <div>{introText.desc[0]}</div>
                        <div>{introText.desc[1]}</div>
                        <div>{introText.desc[2]}</div>
                        <div>{introText.desc[3]}</div>
                    </div>
                    <div className="img">
                        <img src={Hnworks} alt="Hnworks" />
                    </div>
                </div>
                <div className="intro__lines bottom" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
    )
}

export default Intro;