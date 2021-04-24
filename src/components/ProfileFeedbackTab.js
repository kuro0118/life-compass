import React, { useState } from 'react'
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
import joon from '../images/joon.png'
import kokoro from '../images/kokoro.png'
import okina from '../images/okina.png'
import {
    FeedbackToolBar,
    BookMarkButton
} from '../style/common/ToolBar';

const ProfileFeedbackTab = () => {

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

    const gridMeisaiRows = [
        createData('01', '01', 'joon', '2021-04-17 23:30:21', '初めまして！じょおんと申します。\r\nコメントさせていただきます。'),
        createData('01', '02', 'kokoro', '2021-04-17 23:42:21', '初めまして！コメントありがとうございます。\r\n理由はhogehogeかなと思っております。'),
        createData('01', '03', 'joon', '2021-04-17 23:45:21', '返事ありがとうございます。\r\nなるほど、理解しました。ありがとうございます！'),
        createData('02', '01', 'okina', '2021-04-17 23:25:21', '初めまして！おきなと申します。\r\nコメントさせていただきます。'),
    ];

    function createData(number, branchNumber, avator, receiveDate, comment) {
        return { number, branchNumber, avator, receiveDate, comment};
    }

    return (
        <>
            <ContentsFeedbackTab>
                <FeedbackContainer>
                    <FeedbackHeading
                        variant="subtitle1"
                    >
                        23件のメッセージがあります。
                    </FeedbackHeading>
                    <FeedbackMeisaiGroup >
                        <BookMarkButton />
                        <FeedbackMeisai>
                            <FeedbackMeisaiAvatarBlock>
                                <FeedbackMeisaiAvatar src={joon} />
                            </FeedbackMeisaiAvatarBlock>
                            <FeedbackMeisaiCommentBlock>
                                <FeedbackMeisaiReceiveDate>2021-4-21 23:21:10</FeedbackMeisaiReceiveDate>
                                <FeedbackMeisaiComment>はじめまして！TTTTと申します。<br />コメントさせていただきます。</FeedbackMeisaiComment>
                            </FeedbackMeisaiCommentBlock>
                        </FeedbackMeisai>
                        <FeedbackMeisai>
                            <FeedbackMeisaiAvatarBlock>
                                <FeedbackMeisaiAvatar src={kokoro} />
                            </FeedbackMeisaiAvatarBlock>
                            <FeedbackMeisaiCommentBlock>
                                <FeedbackMeisaiReceiveDate>2021-4-21 23:31:10</FeedbackMeisaiReceiveDate>
                                <FeedbackMeisaiComment>はじめまして！コメントしていただきありがとうございます。<br />理由はhogehogeかな、と思っています。</FeedbackMeisaiComment>
                            </FeedbackMeisaiCommentBlock>
                        </FeedbackMeisai>
                        <FeedbackMeisai>
                            <FeedbackMeisaiAvatarBlock>
                                <FeedbackMeisaiAvatar src={joon} />
                            </FeedbackMeisaiAvatarBlock>
                            <FeedbackMeisaiCommentBlock>
                                <FeedbackMeisaiReceiveDate>2021-4-21 23:35:10</FeedbackMeisaiReceiveDate>
                                <FeedbackMeisaiComment>返事ありがとうございます。<br />そういうことだったんですね。解りました。</FeedbackMeisaiComment>
                            </FeedbackMeisaiCommentBlock>
                        </FeedbackMeisai>
                    </ FeedbackMeisaiGroup>
                    <FeedbackMeisaiGroup >
                        <BookMarkButton />
                        <FeedbackMeisai>
                            <FeedbackMeisaiAvatarBlock>
                                <FeedbackMeisaiAvatar src={okina} />
                            </FeedbackMeisaiAvatarBlock>
                            <FeedbackMeisaiCommentBlock>
                                <FeedbackMeisaiReceiveDate>2021-4-21 22:41:10</FeedbackMeisaiReceiveDate>
                                <FeedbackMeisaiComment>はじめまして！TTTTと申します。<br />コメントさせていただきます。</FeedbackMeisaiComment>
                            </FeedbackMeisaiCommentBlock>
                        </FeedbackMeisai>
                    </ FeedbackMeisaiGroup>
                    <FeedbackToolBar
                        onReplyClick={handleReplyClick}
                        onBookmarkClick={handleBookmarkClick}
                        onGoodClick={handleGoodClick}
                        onLaughClick={handleLaughClick}
                        onSorryClick={handleSorryClick}
                        onFixClick={handleFixClick}
                        onDeleteClick={handleDeleteClick}
                    />
                </FeedbackContainer>
            </ContentsFeedbackTab>
        </>
    )
}

export default ProfileFeedbackTab;