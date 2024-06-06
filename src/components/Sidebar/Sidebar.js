import React from 'react'
import Search from '../../assets/svg/Search'
import { williams } from '../../assets/image'
import More2 from '../../assets/svg/More2'
import classes from './Sidebar.module.css'
import { sideBarData } from '../Data'
const Sidebar = () => {
    return (
        <div className={classes.pageRoot}>
            <div className={classes.header}>    <h3 className={classes.title}>Patients</h3>
                <div><Search /></div></div>
            {sideBarData.map((item,index) => (
                <>
                    <div key={item.profileName+index} className={classes.profileContent}>
                        <div className={classes.profileWrapper}> <img src={item.image} alt="profile-img" />
                            <div>
                                <h3 className={classes.profileName}>{item.profileName}</h3>
                                <p className={classes.gender}> {item.gender}</p>
                            </div></div>
                        <More2 />
                    </div>
                </>
           ))}
        </div>
    )
}

export default Sidebar
