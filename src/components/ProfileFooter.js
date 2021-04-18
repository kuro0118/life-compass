import React, { useState, useEffect, useReducer } from 'react'
import { EditBar } from '../style/common/EditBar';
import '../css/myProfile/Header.css'
import { EditorState, ContentState } from 'draft-js';
// import Editor from '@draft-js-plugins/editor';


const ProfileFooter = () => {

    const [editorState, setEditorState] = useState(
        () => EditorState.createWithContent(ContentState.createFromText('本文を入力')),
    );

    return (
        <>
            <EditBar editorState={editorState} onChange={setEditorState}/>
        </>
    )
}

export default ProfileFooter;