import * as React from "react";
import { useTheme } from "react-jss";
import useStyles from "./Header.styles";
import { Link } from "react-router-dom";
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
        <Link to={'/'}>Home</Link>
        <Link to={'/About'}>About</Link>
        <Link to={'/men'}>Men</Link>
        <Link to={'/women'}>Women</Link>
        <Link to={'/contacts'}>Contacts</Link>
        <Link to={'/cart'}><i className="fas fa-cart-plus"></i></Link>
        <div className={classes.profileLink}>
          <Link to={'/profile'}>Profile</Link>
        </div>
      </nav>
    </header>
  );
};


export { Header };
