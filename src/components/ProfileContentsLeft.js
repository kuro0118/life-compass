import React, { useState, useContext } from 'react'
import ProfileContext from '../contexts/ProfileContext'
import Box from '@material-ui/core/Box';
import {
    ContentsAvatar,
    ContentsBodyText,
    ContentsUserName,
    ContentsGoodIcon,
    ContentsBadIcon,
    ContentsReviewCount,
    ContentsProfileItemLabel,
    ContentsProfileItemValue,
    ContentsAvatorOverlay,
    ContentsUploadImageIcon,
    ContentsAvatorOverlayText
} from '../style/profile/Contents';
import '../css/myProfile/ContentsLeft.css'
import { ACCEPT_IMAGE_EXTENTION, PATH_AVATOR_ME } from '../const/CommonConst'
import getRelativePath from '../functions/getRelativePath';
import { useFileUpload } from "use-file-upload";

const ProfileContentsLeft = () => {

    const myAvator = getRelativePath(__dirname, PATH_AVATOR_ME);

    const [isOverAvator, setIsOverAvator] = useState(false);

    const { setCropModalDisplayed } = useContext(ProfileContext);
    const { setUploadImageURL } = useContext(ProfileContext);

    const [files, selectFiles] = useFileUpload();

    const handleOverAvator = () => {
        setIsOverAvator(true)
    }

    const handleOutAvator = () => {
        setIsOverAvator(false)
    }

    const handleAvatorClick = () => {
        selectFiles({ accept: ACCEPT_IMAGE_EXTENTION }, ({ name, size, source, file }) => {
            console.log("Files Selected", { name, size, source, file });
            setUploadImageURL(source)
            setCropModalDisplayed(true);
        })
    }

    return (
        <>
            <Box className="contents-left-container">
                <Box className="contents-left-top-container">
                    <Box className="contents-user-icon-group">
                        <ContentsUploadImageIcon
                            onMouseEnter={handleOverAvator}
                            onMouseLeave={handleOutAvator}
                            onClick={handleAvatorClick}
                        />
                        <ContentsAvatar src={myAvator}
                            onMouseEnter={handleOverAvator}
                        />
                        {isOverAvator === true ?
                            <ContentsAvatorOverlay
                                onMouseEnter={handleOverAvator}
                                onMouseLeave={handleOutAvator}
                                onClick={handleAvatorClick}
                            >
                                <ContentsAvatorOverlayText
                                    variant='body1'
                                    component='p'
                                >
                                    アバターを変更

                                </ContentsAvatorOverlayText>
                            </ContentsAvatorOverlay>
                            : ""
                        }
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
                <Box className="contents-left-bottom-container">
                    <Box className="contents-base-profile-group">
                        <ContentsProfileItemLabel variant="body1">性別　　：</ContentsProfileItemLabel>
                        <ContentsProfileItemValue variant="body1">男性</ContentsProfileItemValue>
                        <ContentsProfileItemLabel variant="body1">誕生日　：</ContentsProfileItemLabel>
                        <ContentsProfileItemValue variant="body1">1995年1月21日</ContentsProfileItemValue>
                        <ContentsProfileItemLabel variant="body1">職業　　：</ContentsProfileItemLabel>
                        <ContentsProfileItemValue variant="body1">キャリアコンサルタント</ContentsProfileItemValue>
                        <ContentsProfileItemLabel variant="body1">居住地　：</ContentsProfileItemLabel>
                        <ContentsProfileItemValue variant="body1">東京</ContentsProfileItemValue>
                        <ContentsProfileItemLabel variant="body1">出身地　：</ContentsProfileItemLabel>
                        <ContentsProfileItemValue variant="body1">茨城県</ContentsProfileItemValue>
                        <ContentsProfileItemLabel variant="body1">最終学歴：</ContentsProfileItemLabel>
                        <ContentsProfileItemValue variant="body1">大学院</ContentsProfileItemValue>
                        <ContentsProfileItemLabel variant="body1">結婚　　：</ContentsProfileItemLabel>
                        <ContentsProfileItemValue variant="body1">既婚</ContentsProfileItemValue>
                        <ContentsProfileItemLabel variant="body1">子供　　：</ContentsProfileItemLabel>
                        <ContentsProfileItemValue variant="body1">2人</ContentsProfileItemValue>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ProfileContentsLeft;