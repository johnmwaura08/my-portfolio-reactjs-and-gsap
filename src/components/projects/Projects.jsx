import React, { useRef, useEffect } from "react";
import { ImEye } from "react-icons/im";
import { BiCodeAlt } from "react-icons/bi";
import { TweenMax, Power1 } from "gsap";
import styles from "./Projects.module.css";
import projects from "./ProjectsList";
import cx from 'classnames';

function Projects() {
  let projectsRef = useRef(null);

  useEffect(() => {
    onWindowResize(true);
  }, []);
  function onWindowResize(immediate) {
    let ease = Power1.easeOut;
    let textTop;
    let textPadding;
    let textStyle;
    let time = immediate ? 0 : 0.3;
    const innerWidth = window.innerWidth;
    if (innerWidth > 1100) {
      textPadding = "50px 50px 20px 50px";
      textTop = 0;
    }
    if (innerWidth <= 1100) {
      textPadding = "50px 50px 20px 50px";
      textTop = 70;
    }
    textStyle = {
      marginTop: textTop,
      padding: textPadding,
      ease,
    };

    TweenMax.to(projectsRef, time, textStyle);
  }

  return (
    <main className={styles.projectsContainer}>
      <section
        className={styles.projectsIntroSection}
        ref={(el) => (projectsRef = el)}
      >
        <span className={styles.projectsPSpan}>{"<p>"}</span>
        <p className={styles.projectsIntro}>
          You can also check out my github to see more projects!{" "}
          <a
            className={styles.socialLink}
            href="https://github.com/johnmwaura08"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-github fa-github-projects" />
          </a>
        </p>
        <span className={styles.projectsPSpan}>{"</p>"}</span>
      </section>
      <section className={styles.projectsSection}>
        {projects.map((project) => (
          <div className={styles.projectItem}>
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              <img alt={` ${project.name}`} src={project.image} />
            </a>
            <h2>{project.name}</h2>

            <p>{project.description}</p>
            <div className={styles.buttonContainer}>
              {project.name === "Legacy Financial Dashboard" ? (
                <button className={cx(styles.viewButton, styles.legacyButton)}>
                  Source Code available on Request
                </button>
              ) : (
                <>
                  <button className={styles.viewButton}>
                    <ImEye />
                    Demo
                  </button>
                  <button className={styles.viewButton}>
                    <BiCodeAlt />
                    Source
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Projects;
