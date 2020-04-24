import * as React from "react";
import { useTheme } from "react-jss";
import useStyles from "./Header.styles";
import { NavLink, Link } from "react-router-dom";
import logo from '../../assets/SNKS.svg';

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  const theme = useTheme()
  const classes = useStyles({ theme })
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <NavLink activeClassName={classes.active} to={'/'}>Home</NavLink>
        <NavLink activeClassName={classes.active} to={'/about'} exact>About</NavLink>
        <NavLink activeClassName={classes.active} to={'/men'}>Men</NavLink>
        <NavLink activeClassName={classes.active} to={'/women'}>Women</NavLink>
        <NavLink activeClassName={classes.active} to={'/contacts'}>Contacts</NavLink>
        <NavLink activeClassName={classes.active} to={'/cart'}><i className="fas fa-cart-plus"></i></NavLink>
        <div className={classes.profileLink}>
          <NavLink activeClassName={classes.active} to={'/profile'}>Profile</NavLink>
        </div>
      </nav>
    </header>
  );
};


export { Header };
