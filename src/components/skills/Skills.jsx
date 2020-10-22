/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import React, { useRef, useEffect, useState } from "react";
import styles from "./Skills.module.css";
import { TimelineMax, TweenMax, Power1, Power0, Linear } from "gsap";
import cx from "classnames";

const rotatingBoxTL = new TimelineMax();

function Skills() {
  let skillsRef = useRef(null);
  let cubeRef = useRef(null);
  let cubeWrap = useRef(null);

  const [skillsList, setSkillsList] = useState([
    "JAVASCRIPT",
    "REACTJS",
    "CSS3",
    "HTML5",
    "GITFLOW",
    "CONTEXT-API",
    "NODEJS",
    "SASS",
    "SCSS",
    "ExpressJS",
    "RESTful APIs",
    "CHARTSJS",
    "FUSION CHARTS",
    "D3",
    "BOOTSTRAP",
    "AUTH0",
    "MONGODB",
    "MATERIAL-UI",
    "FIGMA",
  ]);

  const [defaultItem, setDefaultItem] = useState(["ReactJS"]);
  const [choice, setChoice] = useState("skillsList");
  const [currentText, setCurrentText] = useState("ReactJS");
  const [previousText, setPreviousText] = useState("ReactJS");

  useEffect(() => {
    const ptl = new TimelineMax();
    ptl.fromTo(cubeWrap, 1, { opacity: 0 }, { opacity: 1 }, "+=.2");
    skillsAnimation();
    onWindowResize(true);
    return () => {
      window.onreset = null;
      rotatingBoxTL.clear();
    };
  }, []);

  const skillsAnimation = () => {
    const list = choice === "skillsList" ? skillsList : defaultItem;

    const randomNum = Math.ceil(Math.random() * 4);
    const rotationX =
      randomNum === 1 ? "90deg" : randomNum === 2 ? "-90deg" : "0deg";
    const rotationY =
      randomNum === 3 ? "90deg" : randomNum === 4 ? "-90deg" : "0deg";
    const item = list[Math.floor(Math.random() * list.length)];
    const index = list.indexOf(item);

    if (choice === "skillsList") {
      defaultItem.push(skillsList[index]);
      skillsList.splice(index, 1);
    } else {
      skillsList.push(defaultItem[index]);
      defaultItem.splice(index, 1);
    }

    if (list.length === 0) {
      const newChoice = choice === "skillsList" ? "defaultItem" : "skillsList";
      setChoice(newChoice);
    }

    setCurrentText(item);
    setPreviousText(currentText);
    setSkillsList([...skillsList]);
    setDefaultItem([...defaultItem]);

    rotatingBoxTL
      .to(cubeRef, 0, {
        rotationY: "0deg",
        rotationX: "0deg",
        ease: Linear.easeNone,
        repeat: -1,
        paused: false,
      })
      .to(cubeRef, 1.5, {
        rotationY,
        rotationX,
        ease: Power0.easeOut,
        repeat: -1,
        paused: false,
      })
      .to(cubeRef, 0, {
        rotationY: "0deg",
        rotationX: "0deg",
        repeat: -1,
        paused: false,
      })
      .call(skillsAnimation);
  };

  const onWindowResize = (immediate) => {
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
      textTop = 0;
      textPadding = "0 0 0 20px";
      textWidth = "600px";
      textMargin = 0;
    }
    if (innerWidth < 1000) {
      textLeft = 0;
      textTop = 0;
      textPadding = 0;
      textWidth = "500px";
      textMargin = "0 auto";
    }
    if (innerWidth < 700) {
      textLeft = 0;
      textTop = 0;
      textPadding = 0;
      textWidth = "90%";
      textMargin = "0 auto";
    }
    if (innerWidth < 460) {
      textLeft = 0;
      textTop = 0;
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

    TweenMax.to(skillsRef, time, textStyle);

    let imageLeft;
    if (innerWidth >= 1250) {
      imageLeft = "15%";
    }

    if (innerWidth < 1250) {
      imageLeft = "10%";
    }
    if (innerWidth < 1100) {
      imageLeft = "10%";
    }
    if (innerWidth < 1000) {
      imageLeft = 0;
    }

    let imageStyle = {
      left: imageLeft,
      ease,
    };

    TweenMax.to(cubeWrap, time, imageStyle);
  };

  return (
    <main className={styles.skillsContainer}>
      <section
        className={styles.introSkillsSection}
        ref={(el) => (skillsRef = el)}
      >
        <span className={styles.skillsBodySpan}>{"<body>"}</span>
        <span className={styles.skillsPSpan}>{"<p>"}</span>
        <p className={styles.skillsParagraph}>
          I work with{" "}
          <span style={{ color: "#00ffff" }}>
            ReactJS, HTML6 ,CSS3 & JavaScript
          </span>{" "}
          in the front-end to build scalable, responsive, single page web
          applications.
        </p>
        <span className={styles.skillsPSpan}>{"</p>"}</span>
        <span className={styles.skillsPSpan}>{"<p>"}</span>
        <p className={styles.skillsParagraph}>
          I write custom CSS and also frequently use CSS frameworks such as{" "}
          <span style={{ color: "#00ffff" }}>
            Material-UI, Bootstrap & Tailwind CSS.{" "}
          </span>{" "}
          I have also implemented{" "}
          <span style={{ color: "#00ffff" }}>styled components </span>in my
          projects.
        </p>
        <span className={styles.skillsPSpan}>{"</p>"}</span>
        <span className={styles.skillsPSpan}>{"<p>"}</span>
        <p className={styles.skillsParagraph}>
          For the back end, I usually build{" "}
          <span style={{ color: "#00ffff" }}>Express </span> apps with{" "}
          <span style={{ color: "#00ffff" }}>NodeJS</span>. I handle database
          management with{" "}
          <span style={{ color: "#00ffff" }}>MongoDB & FireBase</span> .
          <span className={styles.skillsPSpan}>{"</p>"}</span>
          <span className={styles.skillsPSpan}>{"<p>"}</span>
        </p>
        <p className={styles.skillsParagraph}>
          I use <span style={{ color: "#00ffff" }}> Heroku & Netlify</span> to
          deploy my projects. I have also used{" "}
          <span style={{ color: "#00ffff" }}>Google Cloud Platform</span> to
          host a clients website.
        </p>
        <span className={styles.skillsPSpan}>{"</p>"}</span>
        <span className={styles.skillsPSpan}>{"<p>"}</span>
        <p className={styles.skillsParagraph}>
          I use <span style={{ color: "#00ffff" }}>PassportJS</span> for
          authentication in my fullstack apps. In my front-end projects, i use{" "}
          <span style={{ color: "#00ffff" }}>authO </span>for user
          authentication.
        </p>
        <span className={styles.skillsPSpan}>{"</p>"}</span>
        <span className={styles.skillsPSpan}>{"<p>"}</span>
        <p className={styles.skillsParagraph}>
          I am also proficient with reading data from APIs and displaying it
          using charts and bars. I use{" "}
          <span style={{ color: "#00ffff" }}>Fusion Charts & ChartsJS</span> for
          data visualization
        </p>
        <span className={styles.skillsPSpan}>{"</p>"}</span>
        <span className={styles.skillsPSpan}>{"</p>"}</span>
        <span className={styles.skillsBodySpan}>{"</body>"}</span>
      </section>
      <section className={styles.skillsWrap} ref={(el) => (cubeWrap = el)}>
        <aside className={styles.skillsCube} ref={(el) => (cubeRef = el)}>
          <div className={cx(styles.cubeElement, styles.cubeFront)}>
            {previousText}
          </div>{" "}
          <div className={cx(styles.cubeElement, styles.cubeTop)}>
            {currentText}
          </div>{" "}
          <div className={cx(styles.cubeElement, styles.cubeBottom)}>
            {currentText}
          </div>{" "}
          <div className={cx(styles.cubeElement, styles.cubeLeft)}>
            {currentText}
          </div>{" "}
          <div className={cx(styles.cubeElement, styles.cubeRight)}>
            {currentText}
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Skills;
