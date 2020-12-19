import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CodeIcon from "@material-ui/icons/Code";
import covidgif from "../../assets/images/covidgif.gif";
import githubgif from "../../assets/images/githubgif.gif";
import shippinggif from "../../assets/images/shippinggif.gif";
import portfoliogif from "../../assets/images/portfoliogif.gif";
import legacygif from "../../assets/images/legacygif.gif";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    [theme.breakpoints.down("sm")]: {
      width: "600px",
      overflow: "scroll",
      paddingBottom: "40px",
      paddingTop: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "300px",
      overflow: "scroll",
      textAlign: "center",
      alignSelf: "center",
      margin: "auto",
    },
    margin: "auto",
    backGroundColor: "#37393b",
    backGround: "#37393b",
    borderRadius: "10px",
    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
    flexDirection: "row",
    fontFamily: "Poppins, sans-serif !important",
    color: "#37393b",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#00ffff",
  },
  gridContainer: {
    paddingLeft: "140px",
    paddingRight: "40px",
    paddingTop: "40px",
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
      overflow: "visible",
      padding: "5px 5px 5px 10px",

      overflowY: "scroll",
      objectFit: "contain",
      paddingTop: "40px",
      paddingBottom: "40px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "100vh",
      overflow: "visible",
      //   padding: "5px 5px 5px 10px",
      alignItems: "center",
      textAlign: "center",
      overflowY: "scroll",
      objectFit: "contain",
      paddingTop: "40px",
      paddingBottom: "40px",
    },
  },
  iconbtn: {
    fontFamily: "Poppins, sans-serif !important",
    fontSize: "17px",
    padding: "8px",
    color: "#37393b",
    border: "2px solid #00ffff !important",
    width: "100px",
    borderRadius: "5px",
    backgroundColor: "#00ffff",
    justifyContent: "space-between",
    fontWeight: "500",
    "&:hover": {
      backgroundColor: "#00ffff",
      color: "black",
    },
  },
  legacybtn: {
    // backgroundColor: red[500],
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    fontFamily: "Poppins, sans-serif !important",
    fontSize: "17px",
    padding: "8px",
    color: "#37393b",
    border: "2px solid #00ffff !important",
    backgroundColor: "#00ffff",
    borderRadius: "5px",

    fontWeight: "500",
    "&:hover": {
      backgroundColor: "#00ffff",
      color: "black",
    },
  },
  font: {
    fontFamily: "Poppins, sans-serif !important",
    fontWeight: "800",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={4}
      justify="center"
      className={classes.gridContainer}
    >
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                COVID-19 TRACKER
              </Avatar>
            }
            title="COVID-19 TRACKER"
          />
          <CardMedia
            className={classes.media}
            image={covidgif}
            title="COVID-19 TRACKER"
          />
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.font}
            >
              This app displays the most current data of Covid-19 cases
              worldwide. Data includes number of deaths, number of infections
              and number of recoveries. You can also select a country and see
              it's corresponding data. I've used ChartsJs to display the data
              and ReactJS to fetch the data from an API.
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              className={classes.iconbtn}
              href="https://nostalgic-raman-5bdcfb.netlify.app"
              target="_blank"
            >
              <VisibilityIcon /> Demo
            </IconButton>

            <IconButton
              className={classes.iconbtn}
              href="https://github.com/johnmwaura08/Covid-19-tracker-ReactJS"
              target="_blank"
            >
              <CodeIcon /> Source
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                WAVY KITS
              </Avatar>
            }
            title=" WAVY KITS"
          />
          <CardMedia
            className={classes.media}
            image={shippinggif}
            title="WAVY KITS"
          />
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.font}
            >
              This is an e-commerce store for original kits from some of the
              biggest soccer clubs in the world.The landing page was designed
              using figma and implemented in React. The cards were designed
              using styled components. The user can click on a kit, see details
              and add to cart. I've implemented react-paypal-express for
              check-out using paypal.
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              className={classes.iconbtn}
              href="https://wavy-kits-reactjs.netlify.app"
              target="_blank"
            >
              <VisibilityIcon /> Demo
            </IconButton>

            <IconButton
              className={classes.iconbtn}
              href="https://github.com/johnmwaura08/e-commerce-store"
              target="_blank"
            >
              <CodeIcon /> Source
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                GITHUB MEMBERS
              </Avatar>
            }
            title="GITHUB MEMBERS"
          />
          <CardMedia
            className={classes.media}
            image={githubgif}
            title="GITHUB MEMBERS"
          />
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.font}
            >
              This app utilises the Github Api. The user logs in and can search
              for github users and see data such as repositories, followers, and
              languages. I've used authO for user sign up and sign in using
              social connections. The user can also create an account and sign
              in.I've used Fusion Charts to display the data from Github APi.
              This app is built using ReactJS
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              className={classes.iconbtn}
              href="https://github-members-react.netlify.app"
              target="_blank"
            >
              <VisibilityIcon /> Demo
            </IconButton>

            <IconButton
              className={classes.iconbtn}
              href="https://github.com/johnmwaura08/github-api-search-users"
              target="_blank"
            >
              <CodeIcon /> Source
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                LEGACY FINANCIAL DASHBOARD
              </Avatar>
            }
            title="LEGACY FINANCIAL DASHBOARD"
          />
          <CardMedia
            className={classes.media}
            image={legacygif}
            title="LEGACY FINANCIAL DASHBOARD"
          />
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.font}
            >
              I collaborated in a team to build an internal dashboard for a
              local company. We used the MERN stack during production. The
              project was styled using material-UI on the front-end. User
              authentication on the backend was done using PassportJS. The
              project was deployed using Google Cloud Platform.
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton className={classes.legacybtn} target="_blank">
              <CodeIcon /> Source Code Private
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                PORTFOLIO WEBSITE
              </Avatar>
            }
            title="PORTFOLIO WEBSITE"
          />
          <CardMedia
            className={classes.media}
            image={portfoliogif}
            title="PORTFOLIO WEBSITE"
          />
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.font}
            >
              This is my portfolio website built with REACTJS and GSAP. I used
              Greensock's Timeline Max to build a rotating cube that dynamically
              displays the languages, frameworks and tools i'm proficient in. I
              used custom css to design a modern looking site that's
              aesthetically pleasing and minimalistic. I used Material-UI to
              design a simple responsive contact form and FormSpree email
              service.
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              className={classes.iconbtn}
              href="https://www.johnmwaura.dev/"
              target="_blank"
            >
              <VisibilityIcon /> Demo
            </IconButton>

            <IconButton
              className={classes.iconbtn}
              href="https://github.com/johnmwaura08/my-portfolio-reactjs-and-gsap"
              target="_blank"
            >
              <CodeIcon /> Source
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
