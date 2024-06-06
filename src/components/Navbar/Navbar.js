import React from 'react'
import { seniorWoman, testLogo } from '../../assets/image'
import Home from '../../assets/svg/Home';
import classes from './Navbar.module.css'
import { navItemData } from '../Data';
import Settings from '../../assets/svg/Settings';
import More from '../../assets/svg/More';
const Navbar = () => {
  return (
    <div className={classes.navbarContainer}>
      <div>
        <img src={testLogo} alt="test-logo" />
      </div>
      <div className={classes.navItemContainer}> {navItemData.map((item, index) => (
        <>
          <a key={item.name + index} href={item.path} className={classes.navItem}>
            <div>{item.icon}</div>
            <p>{item.name}</p>
          </a>
        </>
      ))}</div>
      <div className={classes.seniorProfileContainer}> <div className={classes.seniorProfile}>
        <img src={seniorWoman} alt="senior-woman" />
        <div className={classes.nameContainer}>
          <h1 className={classes.name}>Dr. Jose Simmons</h1>
          <p className={classes.position}>General Practitioner</p>
        </div>

      </div>
        <div className={classes.divider}></div>
        <div className={classes.action}>
          <Settings />
          <More />
        </div>
      </div>
     
    </div>
  );
}

export default Navbar
