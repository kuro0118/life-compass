import React, { useEffect, useReducer } from 'react'
import Box from '@material-ui/core/Box';
import '../css/myProfile/Header.css'

const ProfileHeader = () => {
    return (
        <>
            <p className="header-heading">My Profile</p>
            <div className="header-blank-line"></div>
        </>
    )
}

export default ProfileHeader;