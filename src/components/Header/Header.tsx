import * as React from "react";
import { useTheme } from "react-jss";
import useStyles from "./Header.styles";
import { Link, RouteComponentProps } from "react-router-dom";
import logo from '../../assets/SNKS.svg';
import { useState } from "react";
import CONST from '../../constants'



const Header = ({ ...props }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes.nav}>
        {
          CONST.navLinks.map((link, index) => {
            return (

              link.icon ?

                <div key={index} className={props.location.pathname !== link.path ? classes.link : classes.active}>
                  <Link to={link.path}>
                    <i className={link.icon}></i>
                    {true ? <div className={classes.cartProductsAmount}></div> : null}
                  </Link>
                </div> :

                <div key={index} className={props.location.pathname !== link.path ? classes.link : classes.active}>
                  <Link to={link.path}>{link.title}</Link>
                </div>
            )
          })
        }
        <div className={classes.langs}>
          <select name="lang">
            <option value="">EN</option>
            <option value="">UA</option>
          </select>
        </div>
        <div className={props.location.pathname !== '/profile' ? classes.link : classes.active}>
          <Link to={'/profile'} >Profile</Link>
        </div>
      </div>
    </header>
  );
};


export { Header };
