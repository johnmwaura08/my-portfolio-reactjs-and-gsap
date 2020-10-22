import React from "react";
import { TweenMax } from "gsap";
import { useHistory } from "react-router-dom";
import styles from "./Navbar.module.css";

 function Navbar() {

  const history = useHistory();
	
  const enterHomeButton = () => {
    TweenMax.to(`.fa-home`, 0.4, { color: "#181818" });
    TweenMax.to(`.p-home`, 0.4, { color: "#00ffff", opacity: 1 }, "-=.4");
  }

  const leaveHomeButton = () => {
    TweenMax.to(`.fa-home`, 0.4, {
      color: "#42474b",
    });
    TweenMax.to(`.p-home`, 0.4, { color: "red", opacity: 0 }, "-=.4");
  } 

  const enterAboutButton = () => {
    TweenMax.to(`.fa-user`, 0.4, { color: "#181818" });
    TweenMax.to(`.p-user`, 0.4, { color: "#00ffff", opacity: 1 }, "-=.4");
  }

  const leaveAboutButton = () => {
    TweenMax.to(`.fa-user`, 0.4, {
      color: "#42474b",
    });
    TweenMax.to(`.p-user`, 0.4, { color: "red", opacity: 0 }, "-=.4");
  }

  const enterSkillsButton = () => {
    TweenMax.to(`.fa-cog`, 0.4, { color: "#181818" });
    TweenMax.to(`.p-cog`, 0.4, { color: "#00ffff", opacity: 1 }, "-=.4");
  }

  const leaveSkillsButton = () => {
    TweenMax.to(`.fa-cog`, 0.4, {
      color: "#42474b",
    });
    TweenMax.to(`.p-cog`, 0.4, { color: "red", opacity: 0 }, "-=.4");
  }

  const enterProjectsButton = () => {
    TweenMax.to(`.fa-eye`, 0.4, { color: "#181818" });
    TweenMax.to(`.p-eye`, 0.4, { color: "#00ffff", opacity: 1 }, "-=.4");
  }

  const leaveProjectsButton = () => {
    TweenMax.to(`.fa-eye`, 0.4, {
      color: "#42474b",
    });
    TweenMax.to(`.p-eye`, 0.4, { color: "red", opacity: 0 }, "-=.4");
  }

  const enterContactButton = () => {
    TweenMax.to(`.fa-eye`, 0.4, { color: "#181818" });
    TweenMax.to(`.p-eye`, 0.4, { color: "#00ffff", opacity: 1 }, "-=.4");
  }

  const leaveContactButton = () => {
    TweenMax.to(`.fa-envelope`, 0.4, {
      color: "#42474b",
    });
    TweenMax.to(`.p-envelope`, 0.1, { color: "#00ffff", opacity: 0 },);
  }

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
