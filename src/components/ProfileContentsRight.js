import React, { useState, useEffect, useReducer, createRef } from 'react'
import Box from '@material-ui/core/Box';
import {
    ContentsTabs,
    ContentsTab,
    ContentsTable,
    ContentsTableHead,
    ContentsTableBody,
    ContentsTableRow,
    ContentsTableBodyTitleCell,
    ContentsTableBodyDescCell,
    ContentsTableHeaderCell
} from '../style/profile/Contents';
import '../css/myProfile/ContentsRight.css'
import { ActionToolBar, EditIconButton } from '../style/common/ToolBar';
import { makeStyles } from '@material-ui/core';
import { EditModal, EditorModal, TitleForm } from '../style/common/Modal';
import { Editor, EditorState } from 'draft-js';
import Modal from '@material-ui/core/Modal';

const ProfileContentsRight = () => {

    // chips: Tabsコンポーネントは状態管理をしないとエラーが出てしまうため、注意。
    const [value, setValue] = useState(0);
    const [meisaiId, setId] = useState('00');
    const [bodyText, setBodyText] = useState('test');
    const [modalStatus, setModalStatus] = useState(false);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    // chips: 子コンポーネントへ渡す、親の参照を作成
    const profileRef = createRef();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClick = (id) => {
        setId(id);
        console.log(id);
        console.log("test");
    };

    const handleMouseOverForDebug = (id) => {
        // setDisplayStatus("block");
        setId(id);
    };

    const handleMouseOutForDebug = (id) => {
        // setDisplayStatus("none");
        setId(id);
    };

    function createData(id, title, discription) {
        return { id, title, discription };
    }

    const editHandleClick = () => {
        console.log("test");
        setModalStatus(true)
    }

    const editHandleClose = () => {
        setModalStatus(false)
    }

    const onChange = () => {
        setEditorState(editorState);
    };

    const gridTempRows = [
        createData('01', 'あなたの強みは何ですか？', '学生の時、体育会系の部活に入っていたので、体力には自信があります。'),
        createData('02', 'あなたの弱みは何ですか？', '緊張しやすいところです。'),
        createData('03', '直近1ヵ月で、一番幸せな一時は何かありましたか？', '中学の時の同級生と温泉旅行に行った事です。'),
        createData('04', 'どのくらいまでに結婚がしたいですか？', '20代のうちに結婚出来ればと思っています。'),
        createData('05', 'どんな職種にチャレンジしてみたいですか？', '教師や予備校の先生等、学生を相手にした職業に就きたいなと思っています。'),
    ];

    return (
        <>
            <Box className="contents-right-container">
                <Box className="contents-tab-group">
                    <ContentsTabs value={value} onChange={handleChange}>
                        <ContentsTab label="分析" />
                        <ContentsTab label="フィードバック" />
                        <ContentsTab label="お気に入り" />
                    </ContentsTabs>
                </Box>
                <Box className="contents-grid-group">
                    <ContentsTable
                        onMouseLeave={() => handleMouseOutForDebug('00')}
                    >
                        <ContentsTableHead>
                            <ContentsTableRow>
                                <ContentsTableHeaderCell >タイトル</ContentsTableHeaderCell >
                                <ContentsTableHeaderCell  >本文</ContentsTableHeaderCell >
                            </ContentsTableRow>
                        </ContentsTableHead>
                        <ContentsTableBody >
                            {
                                gridTempRows.map(row => (
                                    <ContentsTableRow
                                        key={row.id}
                                        hover role="checkbox"
                                        onClick={() => handleClick(row.id)}
                                        onMouseEnter={() => handleMouseOverForDebug(row.id)}
                                        onMouseLeave={() => handleMouseOutForDebug(row.id)}
                                    >
                                        <ContentsTableBodyTitleCell
                                            onClick={() => handleClick(row.id)}
                                        >
                                            {row.title}
                                        </ContentsTableBodyTitleCell>
                                        <ContentsTableBodyDescCell>
                                            {row.discription}
                                            {meisaiId === row.id ? <ActionToolBar /> : <Box style={{ height: "45px" }}></Box>}
                                        </ContentsTableBodyDescCell>
                                    </ContentsTableRow>
                                ))
                            }
                        </ContentsTableBody>
                    </ContentsTable>
                </Box>
            </Box>
            <EditIconButton
                onClick={() => editHandleClick()}
            />
            <EditModal
                open={modalStatus}
                onClose={editHandleClose}
                ref={profileRef}
            />
            {/* <Editor editorState={editorState} onChange={onChange}>
                </Editor> */}
        </>
    )
}

export default ProfileContentsRight;