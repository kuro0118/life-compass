import React, { useState, useContext } from 'react'
import {
    ContentsFeedbackTab,
    FeedbackContainer,
    FeedbackHeading,
    FeedbackMeisai,
    FeedbackMeisaiAvatar,
    FeedbackMeisaiAvatarBlock,
    FeedbackMeisaiComment,
    FeedbackMeisaiCommentBlock,
    FeedbackMeisaiGroup,
    FeedbackMeisaiReceiveDate
} from '../style/profile/Contents';
import {
    FeedbackToolBar,
    MeisaiHeadBar
} from '../style/common/ToolBar';
import ProfileContext from '../contexts/ProfileContext'

const ProfileFeedbackTab = () => {

    const [touchMeisaiId, setTouchMeisaiId] = useState('0000');
    const { initFeedbackData } = useContext(ProfileContext);

    const handleReplyClick = () => {
        console.log('返信が押されました');
    }

    const handleBookmarkClick = () => {
        console.log('ブックマークが押されました');
    }

    const handleGoodClick = () => {
        console.log('グッドボタンが押されました');
    }

    const handleLaughClick = () => {
        console.log('笑顔が押されました');
    }

    const handleSorryClick = () => {
        console.log('すみませんが押されました');
    }

    const handleFixClick = () => {
        console.log('決定が押されました');
    }

    const handleDeleteClick = () => {
        console.log('削除が押されました');
    }

    const handleMouseOver = (number, branchNumber) => {
        console.log(number);
        const newId = number + branchNumber
        setTouchMeisaiId(newId);
    };

    const handleMouseOut = (number, branchNumber) => {
        const newId = number + branchNumber
        setTouchMeisaiId(newId);
    };

    console.log(touchMeisaiId);

    const setSplitComment = (comment) => {
        const texts = comment.split("\n").map((item, index) => {
            // <></> は key を設定できないので、<React.Fragment /> を使う
            return (
                <React.Fragment key={index}>{item}<br /></React.Fragment>
            );
        });
        return (<span>{texts}</span>);
    }

    return (
        <>
            <ContentsFeedbackTab>
                <FeedbackContainer onMouseLeave={() => handleMouseOver('00', '00')}>
                    <FeedbackHeading
                        variant="subtitle1"
                    >
                        23件のメッセージがあります。
                    </FeedbackHeading>
                    {
                        Object.keys(initFeedbackData).map(rowKey => (
                            <FeedbackMeisaiGroup key={rowKey}>
                                <MeisaiHeadBar onBookmarkClick={handleBookmarkClick} onFixClick={handleFixClick} />
                                {
                                    initFeedbackData[rowKey].map(el => (
                                        <FeedbackMeisai
                                            key={el.branchNumber}
                                            onMouseEnter={() => handleMouseOver(el.number, el.branchNumber)}
                                            onMouseLeave={() => handleMouseOut(el.number, el.branchNumber)}
                                        >
                                            <FeedbackMeisaiAvatarBlock>
                                                <FeedbackMeisaiAvatar src={el.avator} />
                                            </FeedbackMeisaiAvatarBlock>
                                            <FeedbackMeisaiCommentBlock>
                                                <FeedbackMeisaiReceiveDate>{el.receiveDate}</FeedbackMeisaiReceiveDate>
                                                <FeedbackMeisaiComment>
                                                    {setSplitComment(el.comment)}
                                                </FeedbackMeisaiComment>
                                            </FeedbackMeisaiCommentBlock>
                                            {(el.number + el.branchNumber) === touchMeisaiId ?
                                                <FeedbackToolBar
                                                    onReplyClick={handleReplyClick}
                                                    onGoodClick={handleGoodClick}
                                                    onLaughClick={handleLaughClick}
                                                    onSorryClick={handleSorryClick}
                                                    onDeleteClick={handleDeleteClick}
                                                /> : ""
                                            }
                                        </FeedbackMeisai>
                                    ))
                                }
                            </ FeedbackMeisaiGroup>
                        ))
                    }
                </FeedbackContainer>
            </ContentsFeedbackTab>
        </>
    )
}

export default ProfileFeedbackTab;