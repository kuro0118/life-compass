import React from 'react'
import Header from '../components/ProfileHeader'
import LeftContents from '../components/ProfileContentsLeft'
import RightContents from '../components/ProfileContentsRight'
import Box from '@material-ui/core/Box';
import '../css/myProfile/Contents.css'

const ProfileContents = () => {
    return (
        <>
            <Box className="contents-container">
                <Header />
                <LeftContents />
                <RightContents />
            </Box>
        </>
    )
}

export default ProfileContents;