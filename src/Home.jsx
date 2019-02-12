import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Grid from "@material-ui/core/Grid";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import WorkIcon from "@material-ui/icons/Work";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BuildIcon from "@material-ui/icons/Build";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import classNames from "classnames";

const styles = theme => ({
  appLocal: {
    position: "relative",
    width: "100%",
    margin: "auto",
    background: 'url("/images/vancouver.jpg")',
    backgroundPosition: "50%",
    backgroundSize: "cover",
    height: 380
  },
  app: {
    position: "relative",
    width: "100%",
    margin: "auto",
    background:
      'url("https://weinianlim.github.io/William-Can-Code/images/vancouver.jpg")',
    backgroundPosition: "50%",
    backgroundSize: "cover",
    height: 380
  },
  appBar: {
    position: "fixed",
    width: "100%",
    right: 0,
    left: 0
  },
  navButton: {
    color: "#ccd0d5",
    "&:hover": {
      color: "#377dff",
      backgroundColor: "transparent"
    }
  },
  introDivider: {
    height: 5,
    width: 60,
    // backgroundColor: "#eaf2ff"377dff,
    backgroundColor: "#377dff",
    margin: "30px 0"
  },
  divider: {
    margin: "15px 0"
  },
  mainRaised: {
    position: "relative",
    zIndex: "3",
    margin: "-60px 30px 0px 30px",
    [theme.breakpoints.down("sm")]: {
      margin: "-60px 15px 0px 15px"
    }
  },
  mainContent: {
    paddingRight: 15,
    paddingLeft: 15,
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: 1200,
    [theme.breakpoints.down("md")]: {
      maxWidth: 890
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 720
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 540
    }
  },
  bigAvatar: {
    marginTop: -80,
    marginBottom: 5,
    width: 160,
    height: 160
  },
  imgAvatar: {
    boxShadow: "rgba(0,0,0,.14), rgba(0,0,0,.12), rgba(0,0,0,.2)"
  },
  BNA: {
    marginLeft: 5,
    marginRight: 5,
    color: "#555555",
    borderRadius: "2px",
    width: 110,
    height: 110,
    "&:hover": {
      backgroundColor: "#EEECEE"
    },
    "&:focus": {
      //   backgroundColor: "purple",
      boxShadow:
        "0 5px 20px 0 rgba(0,0,0,.2), 0 13px 24px -11px rgba(156,39,176,.6)",
      color: "white"
    },
    "&:active": {
      color: "white",
      //   backgroundColor: "purple",
      boxShadow:
        "0 5px 20px 0 rgba(0,0,0,.2), 0 13px 24px -11px rgba(156,39,176,.6)"
    }
  },
  BNASelected: {
    backgroundColor: "purple",
    // boxShadow:
    //   "0 5px 20px 0 rgba(0,0,0,.2), 0 13px 24px -11px rgba(156,39,176,.6)",
    color: "white",
    "&:hover": {
      backgroundColor: "purple",
      boxShadow:
        "0 5px 20px  0 rgba(0,0,0,.2), 0 13px 24px -11px rgba(156,39,176,.6)",
      color: "white"
    },
    "&:focus": {
      backgroundColor: "purple",
      boxShadow:
        "0 5px 20px  0 rgba(0,0,0,.2), 0 13px 24px -11px rgba(156,39,176,.6)",
      color: "white"
    }
    // "&:active": {
    //   backgroundColor: "purple",
    //   boxShadow:
    //     "0 5px 20px  0 rgba(0,0,0,.2), 0 13px 24px -11px rgba(156,39,176,.6)",
    //   color: "white"
    // }
  },
  // BNALabel: {
  //   color: "#555555",
  //   "&:focus": {
  //     color: "white"
  //   }
  // },
  BNAWrapper: {
    color: "white"
  },
  experiencesPlace: {
    fontFamily: "Roboto Slab",
    fontWeight: "600",
    color: "#3c4858"
  },
  experiencesPosition: {
    fontFamily: "Roboto Slab",
    fontWeight: "600",
    color: "#8B9299",
    textTransform: "uppercase"
  },
  experiencesDescription: {
    fontFamily: "Roboto Slab",
    fontWeight: "600",
    color: "#B5B5B5"
  },
  experiencesImg: {
    width: "100%",
    height: "auto",
    borderRadius: 10,
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.12),0 2px 4px 0 rgba(0,0,0,0.08)",
    [theme.breakpoints.down("md")]: {
      // width: "auto",
      // height: 200,
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {}
  }
});

class Home extends Component {
  state = {
    value: "experiences",
    open: false,
    backgroundColor: "transparent",
    backgroundShadow: "none"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    if (window.pageYOffset > 200) {
      this.setState({
        backgroundShadow:
          "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 150, 243, 0.46)",
        backgroundColor: "#2196F3"
      });
    } else {
      this.setState({
        backgroundColor: "transparent",
        backgroundShadow: "none"
      });
    }
  };

  render() {
    const { classes, width } = this.props;
    const { value } = this.state;
    const url = window.location.href;
    console.log(window.innerHeight);
    return (
      <div>
        <AppBar
          className={classes.appBar}
          style={{
            backgroundColor: this.state.backgroundColor,
            boxShadow: this.state.backgroundShadow
          }}
        >
          {isWidthUp("sm", width) ? (
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Avatar
                      alt="Will Header"
                      src={
                        url == "http://localhost:3000/"
                          ? "/images/profile.jpg"
                          : "https://weinianlim.github.io/William-Can-Code/images/profile.jpg"
                      }
                      style={{ margin: "10px" }}
                      imgProps={{ root: classes.imgAva }}
                    />
                  </Grid>
                  <Grid item />
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                >
                  <Grid item>
                    <Button className={classes.navButton}>Projects</Button>
                  </Grid>
                  <Grid item>
                    <Button className={classes.navButton}>About</Button>
                  </Grid>
                  <Grid item>
                    <Button className={classes.navButton}>Contact Me</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <Toolbar>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                >
                  <Grid item>
                    <IconButton onClick={this.handleDrawerOpen}>
                      <MenuIcon />
                    </IconButton>
                  </Grid>
                  <Grid item align="center">
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                    >
                      <Grid item>
                        <Avatar
                          alt="Will Header"
                          src={
                            url == "http://localhost:3000/"
                              ? "/images/profile.jpg"
                              : "https://weinianlim.github.io/William-Can-Code/images/profile.jpg"
                          }
                          style={{ margin: "10px" }}
                        />
                      </Grid>
                      <Grid item />
                      <Typography variant="h4">I'm Will</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Toolbar>
          )}
        </AppBar>
        <Drawer open={this.state.open} onClose={this.handleDrawerClose}>
          <List>
            <ListItem>Projects</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Contact Me</ListItem>
          </List>
        </Drawer>
        <div className={classes.app} />
        <div className={classes.mainRaised}>
          <Paper elevation={24} style={{ margin: "auto" }}>
            <div className={classes.mainContent}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <Avatar
                    src={
                      url == "http://localhost:3000/"
                        ? "/images/profile.jpg"
                        : "https://weinianlim.github.io/William-Can-Code/images/profile.jpg"
                    }
                    className={classes.bigAvatar}
                    imgProps={{ root: classes.imgAvatar }}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h4"
                    gutterBottom
                    style={{
                      marginTop: "20px",
                      color: "#3c4858",
                      fontWeight: "700",
                      fontFamily: "Roboto Slab"
                    }}
                  >
                    William Lim
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="caption"
                    gutterBottom
                    style={{
                      textTransform: "uppercase",
                      color: "#6f757c",
                      fontWeight: "700",
                      fontFamily: "Roboto"
                    }}
                  >
                    Developer {"&"} Designer
                  </Typography>
                </Grid>
                <Grid
                  item
                  style={{
                    marginTop: "30px"
                  }}
                >
                  <i
                    class="im im-linkedin"
                    style={{ color: "#0077B5", marginRight: "20px" }}
                  />

                  <i class="im im-mail" style={{ color: "#D54D40" }} />

                  <i
                    class="im im-github"
                    style={{ color: "#24292E", marginLeft: "20px" }}
                  />
                </Grid>
              </Grid>
              <Typography
                variant="body1"
                gutterBottom
                style={{
                  maxWidth: "500px",
                  textAlign: "center",
                  margin: "10px auto"
                }}
              >
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                style={{ height: "200px" }}
              >
                <BottomNavigation
                  value={this.state.value}
                  onChange={this.handleChange}
                  showLabels
                >
                  <BottomNavigationAction
                    label="Experiences"
                    value="experiences"
                    icon={<WorkIcon />}
                    classes={{
                      root: classes.BNA,
                      selected: classes.BNASelected,
                      label: classes.BNALabel,
                      wrapper: value === "experiences" ? classes.BNAWrapper : ""
                    }}
                  />
                  <BottomNavigationAction
                    label="Technology"
                    value="technology"
                    icon={<i class="im im-layer" />}
                    classes={{
                      root: classes.BNA,
                      selected: classes.BNASelected,
                      label: classes.BNALabel,
                      wrapper: value === "technology" ? classes.BNAWrapper : ""
                    }}
                  />
                  <BottomNavigationAction
                    label="Projects"
                    value="projects"
                    icon={<BuildIcon />}
                    classes={{
                      root: classes.BNA,
                      selected: classes.BNASelected,
                      label: classes.BNALabel,
                      wrapper: value === "projects" ? classes.BNAWrapper : ""
                    }}
                  />
                </BottomNavigation>
              </Grid>
              {/* <Switch>
                <Route
                  path={match.url + "/experiences"}
                  component={Experiences}
                />
                <Route
                  path={match.url + "/technology"}
                  component={Technology}
                />
                <Route path={match.url + "/projects"} component={Projects} />
              </Switch> */}
              {value === "experiences" && (
                <div>
                  <Typography
                    variant="h3"
                    gutterBottom
                    style={{
                      maxWidth: "600px",
                      textAlign: "center",
                      margin: "10px auto",
                      color: "#3c4858",
                      fontFamily: "Roboto Slab",
                      fontWeight: "700"
                    }}
                  >
                    Awesome Experiences
                  </Typography>
                  <Grid container spacing={24} style={{ marginTop: "35px" }}>
                    <Grid item xs={12} sm={5} md={2}>
                      <img
                        src={
                          url == "http://localhost:3000/"
                            ? "/images/portonlogo.png"
                            : "https://weinianlim.github.io/William-Can-Code/images/portonlogo.png"
                        }
                        className={classes.experiencesImg}
                      />
                    </Grid>
                    <Grid item xs={12} sm={7} md={4}>
                      <Typography
                        variant="h5"
                        gutterBottom
                        className={classes.experiencesPlace}
                      >
                        Porton Health
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        className={classes.experiencesPosition}
                      >
                        Junior Full Stack Developer
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        className={classes.experiencesDescription}
                      >
                        Working at Porton Health since 2018, October has been
                        awesome. Besides able to work with my favourite
                        javscript library, React, I get to learn how to design,
                        build and test in Meteor. My team and I are working hard
                        everyday to deliver the best version of porton health
                        Web Application.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={5} md={2}>
                      <img
                        src={
                          url == "http://localhost:3000/"
                            ? "/images/clarius.png"
                            : "https://weinianlim.github.io/William-Can-Code/images/clarius.png"
                        }
                        className={classes.experiencesImg}
                      />
                    </Grid>
                    <Grid item xs={12} sm={7} md={4}>
                      <Typography
                        variant="h5"
                        gutterBottom
                        className={classes.experiencesPlace}
                      >
                        Clarius Mobile Health
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        className={classes.experiencesPosition}
                      >
                        Software Engineer
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        className={classes.experiencesDescription}
                      >
                        Clarius was my stepping stone towards programming
                        industry. My main focus there was to develop new
                        software feature for their android version of Clarius
                        Mobile Application. During my time there, I had the
                        opportunity to learn new programming language and
                        technology such as python, Qt and Jenkins
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={5} md={2}>
                      <img
                        src={
                          url == "http://localhost:3000/"
                            ? "/images/brainstation.png"
                            : "https://weinianlim.github.io/William-Can-Code/images/brainstation.png"
                        }
                        className={classes.experiencesImg}
                      />
                    </Grid>
                    <Grid item xs={12} sm={7} md={4}>
                      <Typography
                        variant="h5"
                        gutterBottom
                        className={classes.experiencesPlace}
                      >
                        Brainstation
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        className={classes.experiencesPosition}
                      >
                        Full Time Web Development Student
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        className={classes.experiencesDescription}
                      >
                        Brainstation was nothing but endless of fun. I took at
                        10 week full time web development program and I got to
                        say, it was intense! In the end of the program, I was
                        able to build MERN stack Web Application from scratch,
                        comfortably.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={5} md={2}>
                      <img
                        src={
                          url == "http://localhost:3000/"
                            ? "/images/ubc.jpg"
                            : "https://weinianlim.github.io/William-Can-Code/images/ubc.jpg"
                        }
                        className={classes.experiencesImg}
                      />
                    </Grid>
                    <Grid item xs={12} sm={7} md={4}>
                      <Typography
                        variant="h5"
                        gutterBottom
                        className={classes.experiencesPlace}
                      >
                        University of British Columbia
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        className={classes.experiencesPosition}
                      >
                        B.A.Sc in Electrical Engineering
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        className={classes.experiencesDescription}
                      >
                        My four years in UBC was a phenomenal period of time.
                        The were ups and downs and it was a really truly
                        challenging and hard for me. I am glad that I did not
                        quit as UBC showed me what I love and capable of doing,
                        gifted me passion of continuous learning and trained me
                        to not give up.
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              )}
            </div>
          </Paper>
          <div style={{ height: "100px" }} />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withWidth()(withStyles(styles)(Home));

// {isWidthUp("md", width) ? (
//   <Grid
//
//     direction="row"
//     justify="space-between"
//     alignItems="center"
//   >
//     <Grid item>
//       <Typography
//         variant="h1"
//         style={{
//           color: "#377dff",
//           fontFamily: "Roboto",
//           fontWeight: "500"
//         }}
//       >
//         Hi, I'm Will
//       </Typography>
//       <Typography
//         variant="subtitle1"
//         gutterBottom
//         style={{ color: "#798490", fontFamily: "Roboto Slab" }}
//       >
//         Designer {"&"} Developer
//       </Typography>
//       <Divider variant="fullWidth" className={classes.introDivider} />
//       <Typography
//         variant="h6"
//         gutterBottom
//         style={{ fontFamily: "Roboto" }}
//       >
//         Full Stack Developer at Porton Health
//       </Typography>
//     </Grid>
//     <Grid item align="center">
//       <img
//         style={{
//           borderRadius: "10px",
//           height: "250px",
//           width: "250px"
//         }}
//         src={
//           url == "http://localhost:3000/"
//             ? "/images/profile.jpg"
//             : "https://weinianlim.github.io/William-Can-Code/images/profile.jpg"
//         }
//       />
//     </Grid>
//   </Grid>
// ) : (
//   <Grid
//     container
//     direction="column"
//     justify="space-around"
//     alignItems="center"
//   >
//     <Grid item>
//       <img
//         style={{
//           borderRadius: "50%",
//           height: "150px",
//           width: "150px"
//         }}
//         alt="Avatar"
//         src={
//           url == "http://localhost:3000/"
//             ? "/images/profile.jpg"
//             : "https://weinianlim.github.io/William-Can-Code/images/profile.jpg"
//         }
//       />
//     </Grid>
//     <Grid item>
//       <Typography
//         variant="h4"
//         style={{
//           color: "#377dff",
//           fontFamily: "Roboto Condensed",
//           fontWeight: "500"
//         }}
//       >
//         Hi, I'm Will
//       </Typography>
//     </Grid>
//     <Grid item>
//       <Typography
//         variant="subtitle1"
//         gutterBottom
//         style={{ color: "#798490", fontFamily: "Roboto Slab" }}
//       >
//         Designer {"&"} Developer
//       </Typography>
//     </Grid>
//     <Grid item>
//       <Typography
//         variant="h6"
//         gutterBottom
//         style={{ fontFamily: "Roboto" }}
//       >
//         Full Stack Developer at Porton Health
//       </Typography>
//     </Grid>
//   </Grid>
// )}

// <Divider variant="middle" className={classes.divider} />
// <Typography variant="h3" gutterBottom>
//   My Journey
// </Typography>
// <Grid container spacing={24}>
//   <Grid item xs={12} sm={4}>
//     <img
//       style={{
//         borderRadius: "10px",
//         height: "auto",
//         width: "200px"
//       }}
//       src={
//         url == "http://localhost:3000/"
//           ? "/images/portonlogo.png"
//           : "https://weinianlim.github.io/William-Can-Code/images/portonlogo.png"
//       }
//     />
//   </Grid>
//   <Grid item xs={12} sm={7}>
//     <Typography variant="h5" gutterBottom>
//       Porton Health
//     </Typography>
//   </Grid>

//   <Grid item xs={12} sm={7}>
//     <Typography variant="h5" gutterBottom>
//       Brainstation
//     </Typography>
//   </Grid>
//   <Grid item xs={12} sm={4}>
//     <img
//       style={{
//         borderRadius: "10px",
//         height: "300px",
//         width: "auto"
//       }}
//       src={
//         url == "http://localhost:3000/"
//           ? "/images/brainstation.png"
//           : "https://weinianlim.github.io/William-Can-Code/images/brainstation.png"
//       }
//     />
//   </Grid>

//   <Grid item xs={12} sm={4}>
//     <img
//       style={{
//         borderRadius: "10px",
//         height: "250px",
//         width: "auto"
//       }}
//       src={
//         url == "http://localhost:3000/"
//           ? "/images/clarius.png"
//           : "https://weinianlim.github.io/William-Can-Code/images/clarius.png"
//       }
//     />
//   </Grid>
//   <Grid item xs={12} sm={8}>
//     <Typography variant="h5" gutterBottom>
//       Clarius Mobile Health
//     </Typography>
//   </Grid>

//   <Grid item xs={12} sm={8}>
//     <Typography variant="h5" gutterBottom>
//       University of British Columbia
//     </Typography>
//   </Grid>
//   <Grid item xs={12} sm={4}>
//     <img
//       style={{
//         borderRadius: "10px",
//         height: "270px",
//         width: "auto"
//       }}
//       src={
//         url == "http://localhost:3000/"
//           ? "/images/ubc.jpg"
//           : "https://weinianlim.github.io/William-Can-Code/images/ubc.jpg"
//       }
//     />
//   </Grid>
// </Grid>

// <Divider variant="middle" className={classes.divider} />
