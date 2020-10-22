import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { TweenMax, TimelineMax, Power1 } from "gsap";
import Typical from "react-typical";
import styles from "./Home.module.css";
import codergif from "../../assets/images/codergifportfolio.gif";

function Home() {
  let buttonRef = useRef(null);
  let gifRef = useRef(null);
  let sectionRef = useRef(null);
  let homeRef = useRef(null);
  let typingRef = useRef(null);


  useEffect(() => {
	const tl = new TimelineMax();
	const ptl = new TimelineMax();
	const ltl = new TimelineMax();

	ptl.from(homeRef, 1, { opacity: 0 }, "+=1");
	tl.from(gifRef, 1, { opacity: 0 }, "+=2");
	ltl.from(typingRef, 1, { opacity: 0 }, "+=1");

    onWindowResize();
    window.addEventListener("resize", onWindowResize);

    return () => window.removeEventListener("resize", onWindowResize);
  }, []);

  const onWindowResize = () => {
	let gifHeight;
    let gifLeft;
    let ease = Power1.easeOut;
    let gifStyle;
	const innerWidth = window.innerWidth;
	
    if (innerWidth >= 1290) {
      gifHeight = 500;
      gifLeft = "55%";
    }
    if (innerWidth < 1290) {
      gifHeight = 500;
      gifLeft = "55%";
    }
    if (innerWidth < 1188) {
      gifHeight = 400;
      gifLeft = "55%";
    }
    if (innerWidth < 1000) {
      gifLeft = "60%";
    }
    if (innerWidth < 850) {
      gifLeft = "65%";
      gifHeight = 300;
    }
    if (innerWidth < 740) {
      gifHeight = 200;
    }

    gifStyle = {
      height: gifHeight,
      left: gifLeft,
      ease,
    };
    if (gifHeight) {
      TweenMax.to(gifRef, 0.3, gifStyle);
    }
    let sectionLeft;
    let sectionStyle;
    let sectionPadding;

    if (innerWidth >= 1100) {
      sectionLeft = 0;
      sectionPadding = "0 0 0 100px";
    }
    if (innerWidth < 1100) {
      sectionLeft = -50;
      sectionPadding = "0 0 0 100px";
    }
    if (innerWidth < 740) {
      sectionLeft = -90;
      sectionPadding = "0 0 0 100px";
    }
    if (innerWidth <= 600) {
      sectionLeft = 0;
      sectionPadding = "0 0 0 0px";
    }
    if (innerWidth < 480) {
      sectionLeft = 0;
      sectionPadding = "0 0 0 0px";
    }
    sectionStyle = {
      left: sectionLeft,
      padding: sectionPadding,
      ease,
    };
    TweenMax.to(sectionRef, 0.3, sectionStyle);
  }


  const enterButton = () => {
    TweenMax.to(buttonRef, 0.3, {
      backgroundColor: "#00ffff",
      color: "black",
    });
  };

  const leaveButton = () => {
    TweenMax.to(buttonRef, 0.3, {
      backgroundColor: "transparent",
      color: "#00ffff",
    });
  };

  return (
    <main className={styles.homeContainer} ref={(el) => (homeRef = el)}>
      <div className={styles.htmlContainer}>
        <div className={styles.homeHtmlSpan}>
          <span>{"<html>"}</span>
          <span className={styles.homeBodySpan}>{"<body>"}</span>
        </div>
      </div>
      <section className={styles.introSection} ref={(el) => (sectionRef = el)}>
        <h1>Hi,</h1>
        <h1>I'm John Mwaura,</h1>
        {window.innerWidth < 1000 ? (
          <h1 style={{ lineBreak: "none", color: "#00ffff", padding: "5px" }}>
            I'm a Full-Stack Developer
          </h1>
        ) : (
          <div ref={(el) => (typingRef = el)}>
            <Typical
              className={styles.typeWriter}
              steps={[
                " I'm a Full-stack Developer",
                1000,
                "I'm Passionate",
                1000,
                "I'm a Quick-Learner",
                1000,
                "I'm a Problem Solver",
                1000,
              ]}
              loop={2}
              wrapper="h2"
            />
          </div>
        )}
        <p className={styles.homeParagraph}>
          <span className={styles.homeParagraphSpan}>{"<p>"}</span>
          &nbsp;MongoDB /ExpressJS/ReactJS/ NodeJS &nbsp;
          <span className={styles.homeParagraphSpan}>{"</p>"}</span>
        </p>
        <div>
          <Link className={styles.homeLink} to="/projects">
            <button
              className={styles.homeButton}
              onMouseEnter={enterButton}
              onMouseLeave={leaveButton}
              ref={(el) => (buttonRef = el)}
            >
              P R O J E C T S
            </button>
          </Link>
        </div>
      </section>
      <img
        alt="codergif"
        className={styles.landingGif}
        src={codergif}
        ref={(el) => (gifRef = el)}
      />
      <aside>
        <div className={styles.closingHtmlContainer}>
          <div className={styles.closingHtmlSpan}>
            <span className={styles.closingBodySpan}>{"</body>"}</span>
            <span>{"</html>"}</span>
          </div>
        </div>
      </aside>
    </main>
  );
}

export default Home;
