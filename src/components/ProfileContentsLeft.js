import React, { useEffect, useReducer } from 'react'
import Box from '@material-ui/core/Box';
import {
    ContentsAvatar,
    ContentsBodyText,
    ContentsUserName,
    ContentsGoodIcon,
    ContentsBadIcon,
    ContentsReviewCount
} from '../style/profile/Contents';
import '../css/myProfile/ContentsLeft.css'
import kokoro from '../images/kokoro.png'

const ProfileContentsLeft = () => {
    return (
        <>
            <Box className="contents-left-container">
                <Box className="contents-user-icon-group">
                    <ContentsAvatar src={kokoro}></ContentsAvatar>
                </Box>
                <Box className="contents-user-name-group">
                    <ContentsUserName variant="h1">ばるす</ContentsUserName>
                </Box>
                <Box className="contents-feedback-group">
                    <ContentsBodyText variant="body1">総フィードバック:12,345</ContentsBodyText>
                </Box>
                <Box className="contents-review-group">
                    <Box className="contents-review-icon-group goodIcon">
                        <ContentsReviewCount variant="body1">Good:153</ContentsReviewCount>
                        <ContentsGoodIcon></ContentsGoodIcon>
                    </Box>
                    <Box className="contents-review-icon-group badIcon">
                        <ContentsReviewCount variant="body1">Bad:23</ContentsReviewCount>
                        <ContentsBadIcon></ContentsBadIcon>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ProfileContentsLeft;