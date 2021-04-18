import React, { useEffect, useReducer } from 'react'
import MenuBar from './ProfileMenuBar'
import Contents from './ProfileContents'
import '../css/myProfile/MyProfile.css'
import Box from '@material-ui/core/Box'
import ProfileFooter from './ProfileFooter'

const MyProfile = () => {

    return (
        <>
            <Box component="div" display="block" className="myprofile-container">
                <MenuBar />
                <Contents />
                <ProfileFooter />
            </Box>
        </>
    )
}

export default MyProfile;