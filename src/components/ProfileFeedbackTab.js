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
    FeedbackMeisaiReceiveDate,
    FeedbackMeisaiReactionBlock,
    FeedbackMeisaiReaction,
    FeedbackMeisaiReactionBlankBlock
} from '../style/profile/Contents';
import {
    FeedbackToolBar,
    MeisaiHeadBar
} from '../style/common/ToolBar';
import { ReplyModal, DeleteConfirmModal } from '../style/common/Modal';
import ProfileContext from '../contexts/ProfileContext'
import replaceNewLineCode from '../functions/replaceNewLineCode'
import {
    DELETE_EVENT,
    REPLY_EVENT,
    REACTION_GOOD_EVENT,
    REACTION_LAUGH_EVENT,
    REACTION_SORRY_EVENT
} from '../actions/profile';
import getToday from '../functions/getToday';
import getInitCurrentUser from '../functions/getInitCurrentUser';
import {
    DISABLED_REPLY,
    EMOJI_GOOD,
    EMOJI_LAUGH,
    EMOJI_SORRY,
    ENABLED_REPLY
} from '../const/CommonConst'

const ProfileFeedbackTab = () => {
    const { state, dispatch } = useContext(ProfileContext);
    const initFeedbackData = state.feedbacks;
    const [touchMeisaiId, setTouchMeisaiId] = useState('0000');
    const [replyData, setReplyData] = useState(
        {
            number: "",
            branchNumber: "",
            userName: "",
            avator: "",
            receiveDate: "",
            comment: "",
            reactionLaugh: '',
            reactionSorry: '',
            reactionGood: ''
        }
    )
    const [confirmData, setConfirmData] = useState(
        {
            number: "",
            branchNumber: "",
            userName: "",
            avator: "",
            receiveDate: "",
            comment: "",
            reactionLaugh: '',
            reactionSorry: '',
            reactionGood: ''
        }
    )
    const [replyModalDisplayed, setReplyModalDisplayed] = useState(false);
    const [deleteConfirmDisplayed, setDeleteConfirmDisplayed] = useState(false);
    const [toolBarDisplayMode, setToolBarDisplayMode] = useState(DISABLED_REPLY);
    const [enabledReply, setEnabledReply] = useState(false);
    const [enabledDelete, setEnabledDelete] = useState(false);
    const [modalInputData, setModalInputData] = useState("");

    const handleReplyClick = (meisaiData) => {
        console.log('返信が押されました');
        setReplyData(meisaiData)
        setReplyModalDisplayed(true)
    }

    const handleBookmarkClick = () => {
        console.log('ブックマークが押されました');
    }

    const handleGoodClick = (number, branchNumber, reactionCount) => {
        console.log('グッドボタンが押されました');
        dispatch({
            type: REACTION_GOOD_EVENT,
            number: number,
            branchNumber: branchNumber,
            reactionGood: reactionCount + 1
        })
    }

    const handleLaughClick = (number, branchNumber, reactionCount) => {
        console.log('笑顔が押されました');
        dispatch({
            type: REACTION_LAUGH_EVENT,
            number: number,
            branchNumber: branchNumber,
            reactionLaugh: reactionCount + 1
        })
    }

    const handleSorryClick = (number, branchNumber, reactionCount) => {
        console.log('すみませんが押されました');
        dispatch({
            type: REACTION_SORRY_EVENT,
            number: number,
            branchNumber: branchNumber,
            reactionSorry: reactionCount + 1
        })
    }

    const handleFixClick = () => {
        console.log('決定が押されました');
    }

    const handleDeleteClick = (mention) => {
        console.log('削除が押されました');
        setConfirmData(mention)
        setDeleteConfirmDisplayed(true)
    }

    const handleMouseOver = (number, branchNumber, index, maxCount) => {
        // タッチしたメンションIDを設定
        const newId = number + branchNumber
        setTouchMeisaiId(newId)

        // 返信アイコンの表示ステータスを判定
        let touchMeisaiIndex = index + 1
        touchMeisaiIndex === maxCount ? setEnabledReply(true) : setEnabledReply(false)
    };

    const handleMouseOut = (number, branchNumber) => {
        const newId = number + branchNumber
        setTouchMeisaiId(newId);
        setEnabledReply(false)
    };

    const modalHandleClose = () => {
        setReplyModalDisplayed(false)
        setDeleteConfirmDisplayed(false)
        setReplyData({
            number: "",
            branchNumber: "",
            userName: "",
            avator: "",
            receiveDate: "",
            comment: "",
            reactionLaugh: '',
            reactionSorry: '',
            reactionGood: ''
        })
        setConfirmData({
            number: "",
            branchNumber: "",
            userName: "",
            avator: "",
            receiveDate: "",
            comment: "",
            reactionLaugh: '',
            reactionSorry: '',
            reactionGood: ''
        })
    }

    const modalHandleChange = (event) => {
        setModalInputData(event.target.value)
    }

    const modalHandleSend = () => {
        dispatch({
            type: REPLY_EVENT,
            number: replyData.number,
            branchNumber: "",
            userName: getInitCurrentUser().userName,
            avator: getInitCurrentUser().avatorURL,
            receiveDate: getToday(),
            comment: modalInputData
        })
        setReplyModalDisplayed(false)
    }

    const modalHandleDeleteClick = () => {
        dispatch({
            type: DELETE_EVENT,
            number: confirmData.number,
            branchNumber: confirmData.branchNumber
        })
        setDeleteConfirmDisplayed(false)
    }

    return (
        <>
            <ContentsFeedbackTab>
                <FeedbackContainer onMouseLeave={() => handleMouseOver('000', '000')}>
                    <FeedbackHeading
                        variant="subtitle1"
                    >
                        {initFeedbackData.length}件のフィードバックがあります
                    </FeedbackHeading>
                    {
                        initFeedbackData.map((mentions, index) => (
                            <FeedbackMeisaiGroup key={index}>
                                <MeisaiHeadBar onBookmarkClick={handleBookmarkClick} onFixClick={handleFixClick} />
                                {
                                    mentions.mention.map((mention, index) => (
                                        <FeedbackMeisai
                                            key={index}
                                            onMouseEnter={() => handleMouseOver(mention.number, mention.branchNumber, index, mentions.mention.length)}
                                            onMouseLeave={() => handleMouseOut(mention.number, mention.branchNumber, index, mentions.mention.length)}
                                        >
                                            <FeedbackMeisaiAvatarBlock>
                                                <FeedbackMeisaiAvatar src={mention.avator} />
                                            </FeedbackMeisaiAvatarBlock>
                                            <FeedbackMeisaiCommentBlock>
                                                <FeedbackMeisaiReceiveDate>{mention.receiveDate}</FeedbackMeisaiReceiveDate>
                                                <FeedbackMeisaiComment>
                                                    {replaceNewLineCode(mention.comment)}
                                                </FeedbackMeisaiComment>
                                                {mention.reactionGood == 0 && mention.reactionLaugh == 0 && mention.reactionSorry == 0 ?
                                                    <FeedbackMeisaiReactionBlankBlock />
                                                    : <FeedbackMeisaiReactionBlock>
                                                        {mention.reactionGood !== 0 ?
                                                            <FeedbackMeisaiReaction>{EMOJI_GOOD} {mention.reactionGood}</FeedbackMeisaiReaction> : ''
                                                        }
                                                        {mention.reactionLaugh !== 0 ?
                                                            <FeedbackMeisaiReaction>{EMOJI_LAUGH} {mention.reactionLaugh}</FeedbackMeisaiReaction> : ''
                                                        }
                                                        {mention.reactionSorry !== 0 ?
                                                            <FeedbackMeisaiReaction>{EMOJI_SORRY} {mention.reactionSorry}</FeedbackMeisaiReaction> : ''
                                                        }
                                                    </FeedbackMeisaiReactionBlock>

                                                }
                                            </FeedbackMeisaiCommentBlock>
                                            {(mention.number + mention.branchNumber) === touchMeisaiId ?
                                                <FeedbackToolBar
                                                    onReplyClick={() => handleReplyClick(
                                                        {
                                                            number: mention.number,
                                                            branchNumber: mention.branchNumber,
                                                            userName: mention.userName,
                                                            avator: mention.avator,
                                                            receiveDate: mention.receiveDate,
                                                            comment: mention.comment
                                                        }
                                                    )}
                                                    onGoodClick={() => handleGoodClick(mention.number, mention.branchNumber, mention.reactionGood)}
                                                    onLaughClick={() => handleLaughClick(mention.number, mention.branchNumber, mention.reactionLaugh)}
                                                    onSorryClick={() => handleSorryClick(mention.number, mention.branchNumber, mention.reactionSorry)}
                                                    onDeleteClick={() => handleDeleteClick(
                                                        {
                                                            number: mention.number,
                                                            branchNumber: mention.branchNumber,
                                                            userName: mention.userName,
                                                            avator: mention.avator,
                                                            receiveDate: mention.receiveDate,
                                                            comment: mention.comment
                                                        }
                                                    )}
                                                    enabledReply={enabledReply}
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
                    onChange={modalHandleChange}
                    onSendClick={modalHandleSend}
                    replyData={replyData}
                />
                <DeleteConfirmModal
                    open={deleteConfirmDisplayed}
                    onClose={modalHandleClose}
                    onDeleteClick={modalHandleDeleteClick}
                    onCancelClick={modalHandleClose}
                    replyData={replyData}
                />
            </ContentsFeedbackTab>
        </>
    )
}

export default ProfileFeedbackTab;