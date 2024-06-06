import React from 'react'
import Search from '../../assets/svg/Search'
import { williams } from '../../assets/image'
import More2 from '../../assets/svg/More2'
import classes from './Sidebar.module.css'
const Sidebar = () => {
    return (
        <div className={classes.pageRoot}>
            <div className={classes.header}>    <h3 className={classes.title}>Patients</h3>
                <div><Search /></div></div>
            <div className={classes.profileContent}>
                <div className={classes.profileWrapper}> <img src={williams} alt="profile-img" />
                    <div>
                        <h3 className={classes.profileName}>Emily Williams</h3>
                        <p className=''> Female, 18</p>
                    </div></div>
                <More2/>
            </div>
        </div>
    )
}

export default Sidebar
