import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { TimelineMax, Power1, TweenMax, Circ, Elastic, Back, Sine } from "gsap";
import styles from "./About.module.css";


function About() {
  const history = useHistory();
  let aboutRef = useRef(null);
  let paragraphRef = useRef(null);
  let buttonRef = useRef(null);

  useEffect(() => {

    onWindowResize(true);
    window.addEventListener("resize", onWindowResize);
    return () => window.removeEventListener("resize", onWindowResize);
  }, []);

  const onWindowResize = (immediate) => {
    const ctl = new TimelineMax();
    let ease = Power1.easeOut;
    let textLeft;
    let textTop;
    let textPadding;
    let textMargin;
    let textWidth;
    let textStyle;
    let time = immediate ? 0 : 0.3;
    const innerWidth = window.innerWidth;

    if (innerWidth > 1100) {
      textLeft = 0;
      textTop = 0;
      textPadding = "0 0 0 100px";
      textWidth = "600px";
      textMargin = 0;
    }
    if (innerWidth <= 1100) {
      textLeft = 0;
      textTop = 70;
      textPadding = "0 0 0 20px";
      textWidth = "600px";
      textMargin = 0;
    }
    if (innerWidth < 1000) {
      textLeft = 0;
      textTop = 70;
      textPadding = 0;
      textWidth = "500px";
      textMargin = "0 auto";
    }
    if (innerWidth < 700) {
      textLeft = 0;
      textTop = 70;
      textPadding = 0;
      textWidth = "400px";
      textMargin = "0 auto";
    }
    if (innerWidth < 500) {
      textLeft = 0;
      textTop = 70;
      textPadding = 0;
      textWidth = "350px";
      textMargin = "0 auto";
    }
    if (innerWidth < 420) {
      textLeft = 0;
      textTop = 70;
      textPadding = 0;
      textWidth = "80%";
      textMargin = "0 auto";
    }
    textStyle = {
      left: textLeft,
      marginTop: textTop,
      padding: textPadding,
      width: textWidth,
      margin: textMargin,
      ease,
    };

    TweenMax.to(aboutRef, time, textStyle);

    let pSize;
    let pStyle;
    if (innerWidth >= 420) {
      pSize = "16px";
    }
    if (innerWidth < 420) {
      pSize = "12px";
    }
    pStyle = {
      fontSize: pSize,
    };
    ctl.to(paragraphRef, time, pStyle);
  };

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
  
     const handleMenuItemClick = (pageURL) => {
       history.push(pageURL);
     };

  return (
    <main className={styles.aboutContainer}>
      <div className={styles.wrapper}>
        <section
          className={styles.aboutIntroSection}
          ref={(el) => (aboutRef = el)}
        >
          <span className={styles.aboutBodySpan}>{"<body>"}</span>
          <span className={styles.aboutH1AndPSpan}>{"<section>"}</span>
          <span className={styles.aboutH1AndPSpan}>{"<h1>"}</span>
          <h1>About Me</h1>
          <span className={styles.aboutH1AndPSpan}>{"</h1>"}</span>

          <span className={styles.aboutH1AndPSpan}>{"<p>"}</span>
          <p
            className={styles.aboutParagraph}
            ref={(el) => (paragraphRef = el)}
          >
            I am a fullstack developer focused mainly on the MERN stack. I am
            able and willing to learn any stack or language to suit your needs.
          </p>
          <span className={styles.aboutPSpanInner}>{"<p>"}</span>
          <p
            className={styles.aboutParagraph}
            ref={(el) => (paragraphRef = el)}
          >
            I am a graduate of
            <span style={{ color: "#00ffff" }}> OK-CODERS</span> , Oklahoma's
            first full-stack development bootcamp. I also completed over{" "}
            <span style={{ color: "#00ffff" }}>1800</span> hours of
            FreeCodeCamp's curriculum and received the legacy full-stack
            certificate together with 6 other certificates.I am also a graduate
            of Oklahoma City Community College where i attained my
            <span style={{ color: "#00ffff" }}> associates in engineering</span>
          </p>
          <span className={styles.aboutPSpanInner}>{"</p>"}</span>
          <span className={styles.aboutPSpanInner}>{"<p>"}</span>
          <p
            className={styles.aboutParagraph}
            ref={(el) => (paragraphRef = el)}
          >
            I am dedicated, passionate and{" "}
            <span style={{ color: "#00ffff" }}> consistent</span> as seen on my
            github profile where i have over
            <span style={{ color: "#00ffff" }}> 700 </span>
            contributions in 2020. I am eager to provide value to your company.
            I have also written a few Javascript related{" "}
            <span style={{ color: "#00ffff" }}>articles</span> on Medium. Please
            click the icons below to visit my Github, Medium and Linkedin
            Profile{" "}
          </p>
          <span className={styles.aboutPSpanInner}>{"</p>"}</span>
          <span className={styles.aboutPSpanInner}>{"<i>"}</span>

          <div className={styles.iconContainer}>
            <a href="https://github.com/johnmwaura08">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://medium.com/@johnmwaura08">
              <i class="fab fa-medium"></i>
            </a>
            <a href="https://www.linkedin.com/in/john-mwaura-a11aa0159/">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
          <span className={styles.aboutH1AndPSpan}>{"</i>"}</span>
          <span className={styles.aboutH1AndPSpan}>{"</section>"}</span>
          <span className={styles.aboutBodySpan}>{"</body>"}</span>
        </section>
        <div className={styles.certificateButtonContainer}>
          <button
            className={styles.certificateButton}
            onMouseEnter={enterButton}
            onMouseLeave={leaveButton}
            ref={(el) => (buttonRef = el)}
            onClick={() => handleMenuItemClick("/images")}
          >
            View Certifications
          </button>
        </div>
      </div>
    </main>
  );
}

export default About;
