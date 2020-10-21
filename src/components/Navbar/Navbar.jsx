import React from "react";
import { TweenMax } from "gsap";
import styles from "./Navbar.module.css";

export default function Navbar() {
  function enterHomeButton() {
    TweenMax.to(`.fa-home`, 0.4, { color: "#181818" });
    TweenMax.to(`.p-home`, 0.4, { color: "#00ffff", opacity: 1 }, "-=.4");
  }

  function leaveHomeButton() {
    TweenMax.to(`.fa-home`, 0.4, {
      color: "#42474b",
    });
    TweenMax.to(`.p-home`, 0.4, { color: "red", opacity: 0 }, "-=.4");
  }
  function enterAboutButton() {
    TweenMax.to(`.fa-user`, 0.4, { color: "#181818" });
    TweenMax.to(`.p-user`, 0.4, { color: "#00ffff", opacity: 1 }, "-=.4");
  }
  function leaveAboutButton() {
    TweenMax.to(`.fa-user`, 0.4, {
      color: "#42474b",
    });
    TweenMax.to(`.p-user`, 0.4, { color: "red", opacity: 0 }, "-=.4");
  }
  function enterSkillsButton() {
    TweenMax.to(`.fa-cog`, 0.4, { color: "#181818" });
    TweenMax.to(`.p-cog`, 0.4, { color: "#00ffff", opacity: 1 }, "-=.4");
  }
  function leaveSkillsButton() {
    TweenMax.to(`.fa-cog`, 0.4, {
      color: "#42474b",
    });
    TweenMax.to(`.p-cog`, 0.4, { color: "red", opacity: 0 }, "-=.4");
  }

  function enterProjectsButton() {
    TweenMax.to(`.fa-eye`, 0.4, { color: "#181818" });
    TweenMax.to(`.p-eye`, 0.4, { color: "#00ffff", opacity: 1 }, "-=.4");
  }
  function leaveProjectsButton() {
    TweenMax.to(`.fa-eye`, 0.4, {
      color: "#42474b",
    });
    TweenMax.to(`.p-eye`, 0.4, { color: "red", opacity: 0 }, "-=.4");
  }
  function enterContactButton() {
    TweenMax.to(`.fa-eye`, 0.4, { color: "#181818" });
    TweenMax.to(`.p-eye`, 0.4, { color: "#00ffff", opacity: 1 }, "-=.4");
  }
  function leaveContactButton() {
    TweenMax.to(`.fa-envelope`, 0.4, {
      color: "#42474b",
    });
    TweenMax.to(`.p-envelope`, 0.4, { color: "#00ffff", opacity: 0 }, "-=.4");
  }

  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <i
          className={`fas fa-lg fa-home`}
          onMouseEnter={() => enterHomeButton()}
          onMouseLeave={() => leaveHomeButton()}
        >
          <p className={"p-home"}>HOME</p>
        </i>
        <i
          className={`fas fa-lg fa-user`}
          onMouseEnter={() => enterAboutButton()}
          onMouseLeave={() => leaveAboutButton()}
        >
          <p className={"p-user"}>ABOUT</p>
        </i>{" "}
        <i
          className={`fas fa-lg fa-cog`}
          onMouseEnter={() => enterSkillsButton()}
          onMouseLeave={() => leaveSkillsButton()}
        >
          <p className={"p-cog"}>SKILLS</p>
        </i>
        <i
          className={`fas fa-lg fa-eye`}
          onMouseEnter={() => enterProjectsButton()}
          onMouseLeave={() => leaveProjectsButton()}
        >
          <p className={"p-eye"}>PROJECTS</p>
        </i>
        <i
          className={`fas fa-lg fa-envelope`}
          onMouseEnter={() => enterContactButton()}
          onMouseLeave={() => leaveContactButton()}
        >
          <p className={"p-envelope"}>CONTACT</p>
        </i>
      </div>
    </div>
  );
}
