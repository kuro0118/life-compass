import React, { useState, useContext } from 'react'
import Box from '@material-ui/core/Box';
import {
    ContentsTabs,
    ContentsTab,
} from '../style/profile/Contents';
import '../css/myProfile/ContentsRight.css'
import ProfileAnalysisTab from '../components/ProfileAnalysisTab'
import ProfileFeedbackTab from '../components/ProfileFeedbackTab'
import ProfileContext from '../contexts/ProfileContext'

const ProfileContentsRight = () => {

    // chips: Tabsコンポーネントは状態管理をしないとエラーが出てしまうため、注意。
    const [displayedTab, setDisplayedTab] = useState(0);
    const { editorDisplayStatus, setEditorDisplayStatus } = useContext(ProfileContext);

    const handleChange = (event, newValue) => {
        setDisplayedTab(newValue);
        setEditorDisplayStatus(false);
    };

    return (
        <>
            <Box className="contents-right-container">
                <Box className="contents-tab-group">
                    <ContentsTabs value={displayedTab} onChange={handleChange}>
                        <ContentsTab label="分析" />
                        <ContentsTab label="フィードバック" />
                        <ContentsTab label="お気に入り" />
                    </ContentsTabs>
                </Box>
                {
                    displayedTab === 0 && < ProfileAnalysisTab />
                }
                {
                    displayedTab === 1 && < ProfileFeedbackTab />
                }
            </Box>
        </>
    )
}

export default ProfileContentsRight;