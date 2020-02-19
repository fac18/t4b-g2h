import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import PeopleIcon from "@material-ui/icons/People";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  link: {
    textDecoration: "none",
    color: "black"
  }
});

export default function NavMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link className={classes.link} to="/">
          <ListItem>
            <ListItemIcon style={{ color: "#EB5A61" }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link className={classes.link} to="/About">
          <ListItem>
            <ListItemIcon style={{ color: "#EB5A61" }}>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText>About</ListItemText>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link className={classes.link} to="/Partners">
          <ListItem>
            <ListItemIcon style={{ color: "#EB5A61" }}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText>Partners</ListItemText>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link className={classes.link} to="/memberlogin">
          <ListItem>
            <ListItemIcon style={{ color: "#EB5A61" }}>
              <LockOpenIcon />
            </ListItemIcon>
            <ListItemText>Login</ListItemText>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link className={classes.link} to="/membersignup">
          <ListItem>
            <ListItemIcon style={{ color: "#EB5A61" }}>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText>Sign-Up</ListItemText>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      <Button
        onClick={toggleDrawer("right", true)}
        style={{ color: "#2b2b31" }}
      >
        <p>MENU</p>
        <MenuIcon />
      </Button>
      <Drawer open={state.right} onClose={toggleDrawer("right", false)}>
        {sideList("right")}
      </Drawer>
    </div>
  );
}
