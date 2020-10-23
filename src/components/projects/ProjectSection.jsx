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
import projects from "./ProjectsList";

const projectsArray = projects;

console.log(projectsArray);

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "wrap",
    backGroundColor: "#37393b",
    marginLeft: "150px",
    flexDirection: "row",
  },
  root: {
    maxWidth: 700,
    display: "grid",
    margin: "70px",
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
    paddingTop: "56.25%", // 16:9
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
    color: "black",
  },
  font: {
    fontFamily: "Poppins, sans-serif !important",
    fontSize: "17px",
    fontWeight: "800",
  },

  btnContainer: {
    // backgroundColor: red[500],
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
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

    borderRadius: "5px",

    fontWeight: "500",
    "&:hover": {
      backgroundColor: "#00ffff",
      color: "black",
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
    justifyContent: "space-evenly",
    fontWeight: "500",
    "&:hover": {
      backgroundColor: "#00ffff",
      color: "black",
    },
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <>
      {projectsArray.map((project, index) => (
        <div className={classes.container} key={index}>
          <Grid
            container
            spacing={1}
            direction="column"
            justify="flex-start"
            alignItems="center"
           
          >
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {project.name}
                  </Avatar>
                }
                title={project.name}
                className={classes.font}
              />
              <CardMedia
                className={classes.media}
                image={project.image}
                title={project.name}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.font}
                >
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <div className={classes.btnContainer}>
                  {project.name === "Legacy Financial Dashboard" ? (
                    <IconButton className={classes.legacybtn}>
                      <CodeIcon /> Source code availabe on request
                    </IconButton>
                  ) : (
                    <>
                      <IconButton className={classes.iconbtn}>
                        <VisibilityIcon /> Demo
                      </IconButton>

                      <IconButton className={classes.iconbtn}>
                        <CodeIcon /> Source
                      </IconButton>
                    </>
                  )}
                </div>
              </CardActions>
            </Card>
          </Grid>
        </div>
      ))}
    </>
  );
}
