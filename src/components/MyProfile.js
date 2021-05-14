import React, { useState, useReducer } from 'react'
import MenuBar from './ProfileMenuBar'
import Contents from './ProfileContents'
import '../css/myProfile/MyProfile.css'
import Box from '@material-ui/core/Box'
import ProfileFooter from './ProfileFooter'
import ProfileHidden from './ProfileHidden'
import ProfileContext from '../contexts/ProfileContext'
import { EditorState, convertFromRaw } from 'draft-js';
import {
    READ_MODE,
    EDIT_MODE
} from '../const/CommonConst'
import getInitData from '../functions/getInitData'
import reducer from '../reducers';
import getInitCurrentUser from '../functions/getInitCurrentUser'

const MyProfile = () => {

    const initialState = {
        feedbacks: getInitData(),
        bookmarks: []
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const initData = convertFromRaw({
        entityMap: {},
        blocks: [
            {
                key: "xxxxxx", // ユニークなキー値
                text: "本文を入力", // 任意のテキスト
                type: "unstyled", // テキストのタイプ。初期値は "unstyled"
                depth: 0,
                entityRanges: [],
                inlineStyleRanges: [],
                data: {},
            },
        ],
    })

    const [editorState, setEditorState] = useState(
        () => EditorState.createWithContent(initData),
    );

    const [profileMode, setProfileMode] = useState(
        {
            mode: READ_MODE
        }
    );

    const [editorDisplayStatus, setEditorDisplayStatus] = useState(false);
    const [sendNoticeDisplayed, setSendNoticeDisplayed] = useState(false);
    const [cropModalDisplayed, setCropModalDisplayed] = useState(false);
    const [uploadImageURL, setUploadImageURL] = useState(
        {
            name: "",
            image: "",
            imageURL: ""
        }
    );

    const [currentUser, setCurrentUser] = useState(
        getInitCurrentUser()
    )

    return (
        <>
            <ProfileContext.Provider
                value={{
                    state,
                    dispatch,
                    currentUser,
                    setCurrentUser,
                    editorState,
                    setEditorState,
                    profileMode,
                    setProfileMode,
                    editorDisplayStatus,
                    setEditorDisplayStatus,
                    sendNoticeDisplayed,
                    setSendNoticeDisplayed,
                    cropModalDisplayed,
                    setCropModalDisplayed,
                    uploadImageURL,
                    setUploadImageURL
                }}>
                <Box component="div" display="block" className="myprofile-container">
                    <MenuBar />
                    <Contents />
                    <ProfileFooter />
                    <ProfileHidden />
                </Box>
            </ProfileContext.Provider>
        </>
    )
}

export default MyProfile;