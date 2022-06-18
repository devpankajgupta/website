import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

import InputIcon from "@mui/icons-material/Input";
import PhoneIcon from "@mui/icons-material/Phone";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function NavBar() {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const pages = ["Products", "Pricing", "Blog"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const [anchorElNav, setAnchorElNav] = React.useState();
  const [anchorElUser, setAnchorElUser] = React.useState();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div>
      <div className="topNav">
        <ul>
          <li>
            <PhoneIcon /> Phone : 99873 94444{" "}
          </li>
          <li>
            <EmailIcon /> Email : jagannathskitchen@gmail.com{" "}
          </li>
          <li>
            <AccessTimeIcon /> 08:30 am - 10:30 pm
          </li>
        </ul>
        <ul>
          <li onClick={handleClickOpen}>
            <InputIcon /> Login
          </li>
        </ul>
      </div>
      <div className="nav">
        <NavLink className="navlink" activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" activeClassName="active" to="/about">
          About
        </NavLink>
        <NavLink className="navlink" activeClassName="active" to="/meal-plan">
          Meal Plan
        </NavLink>
        <NavLink className="navlink" activeClassName="active" to="/contact-us">
          Contact Us
        </NavLink>
      </div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Login</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" style={{ width: "500px" }}>
              <div className="textDiv">
                <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
              </div>
              <div className="textDiv">
                <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" />
              </div>
              <div className="textDiv">
                <Button variant="contained">Submit</Button>
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default NavBar;
