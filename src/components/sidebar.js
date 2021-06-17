import React from "react";
import "./sidebar.css";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  return (
    <div class="sidebar">
      <div class="profile">
        <Avatar alt="Fouad Ghandour" src="" className={classes.large} />

        <h4>Fouad Ghandour</h4>
        <h6>Software Development Manager</h6>
      </div>
      <div class="sidemenu">
        <ul>
          <li>
            <SignalCellularAltIcon fontSize="inherit" />
            <p>Dashboard</p>
          </li>
          <li>
            <PeopleOutlineIcon fontSize="inherit" />
            <p>Customers</p>
          </li>
          <li>
            <LocalMallOutlinedIcon fontSize="inherit" />
            <p>Products</p>
          </li>
          <li>
            <PersonOutlineIcon fontSize="inherit" />
            <p>Account</p>
          </li>
          <li>
            <SettingsOutlinedIcon fontSize="inherit" />
            <p>Settings</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
