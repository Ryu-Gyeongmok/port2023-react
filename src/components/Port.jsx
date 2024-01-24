import React, { useEffect, useRef } from "react";

import { portText } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Port = () => {
    const horizontalRef = useRef(null);
    const sectionRef = useRef([]);
    // const width = 500; // 팝업의 가로 길이: 500
    // const height = 400; // 팝업의 세로 길이 : 500
    //  // 팝업을 부모 브라우저의 정 중앙에 위치시킨다.
    // const left = window.screenX + (window.outerWidth - width) / 2;
    // const top = window.screenY + (window.outerHeight - height) / 2;
    // const onPopup = () => {             
    //      window.open("", "개발자 정보", `width=${width},height=${height},left=${left},top=${top}`);    
    // }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = horizontalRef.current;
        const sections = sectionRef.current;

        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top 56px",
                end: () => "+=" + horizontal.offsetWidth,
                pin: true,
                scrub: 1,
                markers: false,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            }
        })

        return () => {
            scrollTween.kill();
        };
    }, []);

    return (
        <section id="port" ref={horizontalRef}>
            <div className="port__inner">
                <h2 className="port__title">
                    Developers <em>개발자 현황</em>
                </h2>
                <div className="port__wrap">
                    {portText.map((port, key) => (
                        <article 
                            className={`port__item p${key+1}`} 
                            key={key}
                            ref={(el) => (sectionRef.current[key] = el)}
                        >
                            <span className="num">{port.num}.</span>
                            <a 
                                //href={port.code} 
                                target="_blank" 
                                className="img" 
                                rel="noreferrer noopener"
                            >
                                <img src={port.img} alt={port.name} />
                            </a>
                            <h3 className="title">{port.title}</h3>
                            <p className="desc">{port.desc}</p>
                            <a 
                                href={port.view} 
                                target="_blank" 
                                className="site" 
                                rel="noreferrer noopener"
                            >
                                개발자 정보 보기</a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Port;