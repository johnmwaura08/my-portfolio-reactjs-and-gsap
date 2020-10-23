import React from "react";
import covidgif from "../../assets/images/covidgif.gif";
import githubgif from "../../assets/images/githubgif.gif";
import shippinggif from "../../assets/images/shippinggif.gif";
import portfoliogif from "../../assets/images/portfoliogif.gif";
import legacygif from "../../assets/images/legacygif.gif";

const projects = [
  {
    name: "COVID-19 TRACKER",
    description: (
      <p>
        This app displays the most current data of Covid-19 cases worldwide.
        Data includes number of deaths, number of infections and number of
        recoveries. You can also select a country and see it's corresponding
        data. I've used ChartsJs to display the data and ReactJS to fetch the
        data from an API.
      </p>
    ),
    image: covidgif,
    demoLink: "https://nostalgic-raman-5bdcfb.netlify.app",
    sourceLink: "https://github.com/johnmwaura08/Covid-19-tracker-ReactJS",
  },
  {
    name: "WAVY KITS",
    description: (
      <p>
        This is an e-commerce store for original kits from some of the biggest
        soccer clubs in the world.The landing page was designed using figma and
        implemented in React. The cards were designed using styled components.
        The user can click on a kit, see details and add to cart. I've
        implemented react-paypal-express for check-out using paypal.
      </p>
    ),
    image: shippinggif,
    demoLink: "https://wavy-kits-reactjs.netlify.app",
    sourceLink: "https://github.com/johnmwaura08/e-commerce-store",
  },
  {
    name: "GITHUB MEMBERS",
    description: (
      <p>
        This app utilises the Github Api. The user logs in and can search for
        github users and see data such as number of repositories, number of
        followers, most forked repositories, largest repositories, and most used
        languages. Since the number of searches per hour is limited by IP
        address, the user can also see the number of api requests they have
        left. I've used authO for user sign up and sign in using social
        connections such as google, twitter or github. The user can also create
        an account and sign in . I've used Fusion Charts to display the data
        from Github APi. This app is built using ReactJS
      </p>
    ),
    image: githubgif,
    demoLink: "https://github-members-react.netlify.app",
    sourceLink: "https://github.com/johnmwaura08/github-api-search-users",
  },
  {
    name: "LEGACY FINANCIAL DASHBOARD",
    description: (
      <p>
        I was part of a team hired to build a dashboard for a local company. We
        used the MERN stack during production. The project was styled using
        material-UI on the front-end. User authentication on the backend was
        done using PassportJS. The project was deployed using Google Cloud
        Platform
      </p>
    ),
    image: legacygif,
  },
  {
    name: "PORTFOLIO WEBSITE",
    description: (
      <p>
        This is my portfolio website i designed to display my projects and
        skills.The portfolio is built with ReactJS and includes hooks. I
        included gifs from Lottie Files and animated the project using gsap. I
        used Greensock's Timeline max to build a rotating cube that dynamically
        displays the languages, frameworks and tools i'm proficient in. I used
        custom css to design a modern looking site that's aesthetically pleasing
        and minimalistic. I used Material-UI to design a simple responsive
        contact form and FormSpree as the form backend and email service.
      </p>
    ),
    image: portfoliogif,
  },
];

export default projects;
