import React, { useContext } from 'react'
import { EditBar } from '../style/common/EditBar';
import '../css/myProfile/Header.css'
import ProfileContext from '../contexts/ProfileContext'
import { CREATE_EVENT } from '../actions/profile';
import createState from '../functions/createState';
import getToday from '../functions/getToday';
import getInitCurrentUser from '../functions/getInitCurrentUser';

const ProfileFooter = () => {

    const { editorDisplayStatus } = useContext(ProfileContext);

    if (editorDisplayStatus) {
        return <DisplayedEditor />
    } else {
        return <NotDisplayedEditor />
    }
}

const DisplayedEditor = () => {

    const { dispatch } = useContext(ProfileContext);
    const { editorState, setEditorState } = useContext(ProfileContext);
    const { setEditorDisplayStatus } = useContext(ProfileContext);
    const { setSendNoticeDisplayed } = useContext(ProfileContext);

    const handleSendClick = (editorState) => {

        // 現在のEditorの入力情報を取得する。(旧)
        // chips: getBlocksArray()で全てのBlockMapsを取得し、配列として取得している。
        //        それをmap処理を使用し、BlockMapsのtextプロパティを抽出している。
        // const blocks = editorState.getCurrentContent().getBlocksAsArray();
        // const comment = blocks.map((block) => block.getText());

        // 現在のEditorの入力情報を取得する。
        // chips: getPlainText()で入力値をそのまま取得可能
        const comment = editorState.getCurrentContent().getPlainText();

        dispatch(
            {
                ...createState(
                    '',
                    '',
                    getInitCurrentUser().userID,
                    getInitCurrentUser().userName,
                    getInitCurrentUser().avatorURL,
                    getToday(),
                    comment,
                ), type: CREATE_EVENT
            }
        )

        setEditorDisplayStatus(false)
        setSendNoticeDisplayed(true)
    }

    return (
        <>
            <EditBar handleSendClick={() => handleSendClick(editorState)} />
        </>
    )
}

const NotDisplayedEditor = () => {
    return (
        <>
        </>
    )
}

export default ProfileFooter;