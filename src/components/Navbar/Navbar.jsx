import React from "react";
import { TweenMax } from "gsap";
import { useHistory } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const history = useHistory();

  if (window.innerWidth > 1000) {
  }

  const enterHomeButton = () => {
    if (window.innerWidth > 1000) {
      TweenMax.to(`.fa-home`, 0.4, { color: "#181818" });
      TweenMax.to(`.p-home`, 0.4, { color: "#00ffff", opacity: 1 }, "-=.4");
    } else {
      TweenMax.to(`.fa-home`, 0.4, { color: "#00ffff" });
    }
  };

  const leaveHomeButton = () => {
    TweenMax.to(`.fa-home`, 0.4, {
      color: "#42474b",
    });
    TweenMax.to(`.p-home`, 0.4, { color: "red", opacity: 0 }, "-=.4");
  };

  const enterAboutButton = () => {
    if (window.innerWidth > 1000) {
      TweenMax.to(`.fa-user`, 0.4, { color: "#181818" });
      TweenMax.to(`.p-user`, 0.4, { color: "#00ffff", opacity: 1 }, "-=.4");
    } else {
      TweenMax.to(`.fa-user`, 0.4, { color: "#00ffff" });
    }
  };

  const leaveAboutButton = () => {
    TweenMax.to(`.fa-user`, 0.4, {
      color: "#42474b",
    });
    TweenMax.to(`.p-user`, 0.4, { color: "red", opacity: 0 }, "-=.4");
  };

  const enterSkillsButton = () => {
    if (window.innerWidth > 1000) {
      TweenMax.to(`.fa-cog`, 0.4, { color: "#181818" });
      TweenMax.to(`.p-cog`, 0.4, { color: "#00ffff", opacity: 1 }, "-=.4");
    } else {
      TweenMax.to(`.fa-cog`, 0.4, { color: "#00ffff" });
    }
  };

  const leaveSkillsButton = () => {
    TweenMax.to(`.fa-cog`, 0.4, {
      color: "#42474b",
    });
    TweenMax.to(`.p-cog`, 0.4, { color: "red", opacity: 0 }, "-=.4");
  };

  const enterProjectsButton = () => {
    if (window.innerWidth > 1000) {
      TweenMax.to(`.fa-eye`, 0.4, { color: "#181818" });
      TweenMax.to(`.p-eye`, 0.4, { color: "#00ffff", opacity: 1 }, "-=.4");
    } else {
      TweenMax.to(`.fa-eye`, 0.4, { color: "#00ffff" });
    }
  };

  const leaveProjectsButton = () => {
    TweenMax.to(`.fa-eye`, 0.4, {
      color: "#42474b",
    });
    TweenMax.to(`.p-eye`, 0.4, { color: "red", opacity: 0 }, "-=.4");
  };

  const enterContactButton = () => {
    if (window.innerWidth > 1000) {
      TweenMax.to(`.fa-envelope`, 0.4, { color: "#181818" });
      TweenMax.to(`.p-envelope`, 0.4, { color: "#00ffff", opacity: 1 }, "-=.4");
    } else {
      TweenMax.to(`.fa-envelope`, 0.4, { color: "#00ffff" });
    }
  };

  const leaveContactButton = () => {
    TweenMax.to(`.fa-envelope`, 0.4, {
      color: "#42474b",
    });
    TweenMax.to(`.p-envelope`, 0.1, { color: "#00ffff", opacity: 0 });
  };

  const handleMenuItemClick = (pageURL) => {
    history.push(pageURL);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <div></div>
        <i
          className={`fas fa-lg fa-home`}
          onMouseEnter={() => enterHomeButton()}
          onMouseLeave={() => leaveHomeButton()}
          onClick={() => handleMenuItemClick("/")}
        >
          <p className={"p-home"}>HOME</p>
        </i>
        <i
          className={`fas fa-lg fa-user`}
          onMouseEnter={() => enterAboutButton()}
          onMouseLeave={() => leaveAboutButton()}
          onClick={() => handleMenuItemClick("/about")}
        >
          <p className={"p-user"}>ABOUT</p>
        </i>{" "}
        <i
          className={`fas fa-lg fa-cog`}
          onMouseEnter={() => enterSkillsButton()}
          onMouseLeave={() => leaveSkillsButton()}
          onClick={() => handleMenuItemClick("/skills")}
        >
          <p className={"p-cog"}>SKILLS</p>
        </i>
        <i
          className={`fas fa-lg fa-eye`}
          onMouseEnter={() => enterProjectsButton()}
          onMouseLeave={() => leaveProjectsButton()}
          onClick={() => handleMenuItemClick("/projects")}
        >
          <p className={"p-eye"}>PROJECTS</p>
        </i>
        <i
          className={`fas fa-lg fa-envelope`}
          onMouseEnter={() => enterContactButton()}
          onMouseLeave={() => leaveContactButton()}
          onClick={() => handleMenuItemClick("/contact")}
        >
          <p className={"p-envelope"}>CONTACT</p>
        </i>
      </div>
    </div>
  );
}

export default Navbar;
