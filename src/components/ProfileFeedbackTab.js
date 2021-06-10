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
    EMOJI_GOOD,
    EMOJI_LAUGH,
    EMOJI_SORRY
} from '../const/CommonConst'
import initState from '../functions/initState';
import createState from '../functions/createState';
import createStateByMention from '../functions/createStateByMention';

const ProfileFeedbackTab = () => {
    const { state, dispatch } = useContext(ProfileContext);
    const initFeedbackData = state.feedbacks;
    const [touchMeisaiId, setTouchMeisaiId] = useState('0000');
    const [replyData, setReplyData] = useState(
        initState()
    )
    const [confirmData, setConfirmData] = useState(
        initState()
    )
    const [replyModalDisplayed, setReplyModalDisplayed] = useState(false);
    const [deleteConfirmDisplayed, setDeleteConfirmDisplayed] = useState(false);
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

    const handleGoodClick = (mention) => {
        console.log('グッドボタンが押されました');
        dispatch({
            type: REACTION_GOOD_EVENT,
            number: mention.number,
            branchNumber: mention.branchNumber,
            reactionGood: mention.reactionGood + 1
        })
    }

    const handleLaughClick = (mention) => {
        console.log('笑顔が押されました');
        dispatch({
            type: REACTION_LAUGH_EVENT,
            number: mention.number,
            branchNumber: mention.branchNumber,
            reactionLaugh: mention.reactionLaugh + 1
        })
    }

    const handleSorryClick = (mention) => {
        console.log('すみませんが押されました');
        dispatch({
            type: REACTION_SORRY_EVENT,
            number: mention.number,
            branchNumber: mention.branchNumber,
            reactionSorry: mention.reactionSorry + 1
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

    const handleMouseOver = (mention, index, maxCount) => {

        // タッチしたメンションIDを設定
        const newId = mention.number + mention.branchNumber
        setTouchMeisaiId(newId)

        // 返信アイコンの表示ステータスを判定
        let touchMeisaiIndex = index + 1
        touchMeisaiIndex === maxCount ? setEnabledReply(true) : setEnabledReply(false)

        // 削除アイコンの表示ステータスを判定
        mention.userName === getInitCurrentUser().userName &&
            touchMeisaiIndex === maxCount ? setEnabledDelete(true) : setEnabledDelete(false)
    };

    const handleMouseOut = () => {
        // 現在タッチしているメンションIDをクリア
        setTouchMeisaiId("");
        setEnabledReply(false)
    };

    const modalHandleClose = () => {
        setReplyModalDisplayed(false)
        setDeleteConfirmDisplayed(false)
        setReplyData(
            initState()
        )
        setConfirmData(
            initState()
        )
    }

    const modalHandleChange = (event) => {
        setModalInputData(event.target.value)
    }

    const modalHandleSend = () => {

        dispatch(
            {
                ...createState(
                    replyData.number,
                    "",
                    getInitCurrentUser().userID,
                    getInitCurrentUser().userName,
                    getInitCurrentUser().avatorURL,
                    getToday(),
                    modalInputData,
                ), type: REPLY_EVENT
            }
        )
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
                                            onMouseEnter={() => handleMouseOver(mention, index, mentions.mention.length)}
                                            onMouseLeave={handleMouseOut}
                                        >
                                            <FeedbackMeisaiAvatarBlock>
                                                <FeedbackMeisaiAvatar src={mention.avator} />
                                            </FeedbackMeisaiAvatarBlock>
                                            <FeedbackMeisaiCommentBlock>
                                                <FeedbackMeisaiReceiveDate>{mention.receiveDate}</FeedbackMeisaiReceiveDate>
                                                <FeedbackMeisaiComment>
                                                    {replaceNewLineCode(mention.comment)}
                                                </FeedbackMeisaiComment>
                                                {mention.reactionGood === 0 && mention.reactionLaugh === 0 && mention.reactionSorry === 0 ?
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
                                                        createStateByMention(mention)
                                                    )}
                                                    onGoodClick={() => handleGoodClick(mention)}
                                                    onLaughClick={() => handleLaughClick(mention)}
                                                    onSorryClick={() => handleSorryClick(mention)}
                                                    onDeleteClick={() => handleDeleteClick(
                                                        createStateByMention(mention)
                                                    )}
                                                    enabledReply={enabledReply}
                                                    enabledDelete={enabledDelete}
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