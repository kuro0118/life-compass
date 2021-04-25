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
import { ReplyModal } from '../style/common/Modal';
import ProfileContext from '../contexts/ProfileContext'
import replaceNewLineCode from '../functions/replaceNewLineCode'

const ProfileFeedbackTab = () => {

    const [touchMeisaiId, setTouchMeisaiId] = useState('0000');
    const [replyData, setReplyData] = useState(
        {
            number: "",
            branchNumber: "",
            userName: "",
            avator: "",
            receiveDate: "",
            comment: ""
        }
    )
    const [replyModalDisplayed, setReplyModalDisplayed] = useState(false);

    const { initFeedbackData } = useContext(ProfileContext);

    const handleReplyClick = (meisaiData) => {
        console.log('返信が押されました');
        setReplyData(meisaiData)
        setReplyModalDisplayed(true)
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

    const modalHandleClose = () => {
        setReplyModalDisplayed(false)
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
                                                    {replaceNewLineCode(el.comment)}
                                                </FeedbackMeisaiComment>
                                            </FeedbackMeisaiCommentBlock>
                                            {(el.number + el.branchNumber) === touchMeisaiId ?
                                                <FeedbackToolBar
                                                    onReplyClick={() => handleReplyClick(
                                                        {
                                                            number: el.number,
                                                            branchNumber: el.branchNumber,
                                                            userName: el.userName,
                                                            avator: el.avator,
                                                            receiveDate: el.receiveDate,
                                                            comment: el.comment
                                                        }
                                                    )}
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
                <ReplyModal
                    open={replyModalDisplayed}
                    onClose={modalHandleClose}
                    replyData={replyData}
                />
            </ContentsFeedbackTab>
        </>
    )
}

export default ProfileFeedbackTab;