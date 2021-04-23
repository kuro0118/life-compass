import React, { useState, useContext, createRef } from 'react'
import Box from '@material-ui/core/Box';
import {
    ContentsTable,
    ContentsTableHead,
    ContentsTableBody,
    ContentsTableRow,
    ContentsTableBodyTitleCell,
    ContentsTableBodyDescCell,
    ContentsTableHeaderCell
} from '../style/profile/Contents';
import '../css/myProfile/ContentsRight.css'
import { ActionToolBar, EditIconButton, CloseIconButton } from '../style/common/ToolBar';
import { EditModal } from '../style/common/Modal';
import {
    EditorState,
    ContentBlock,
    genKey
} from 'draft-js';
import ProfileContext from '../contexts/ProfileContext'

const ProfileAnalysisTab = () => {

    const [meisaiId, setId] = useState('00');
    const [modalStatus, setModalStatus] = useState(false);
    const [modalState, setModalState] = useState(
        {
            title: "",
            discription: ""
        }
    );
    const [modalDisplayMode, setModalDisplayMode] = useState(false);

    const { editorDisplayStatus, setEditorDisplayStatus } = useContext(ProfileContext);
    const { editorState, setEditorState } = useContext(ProfileContext);
    const { profileMode } = useContext(ProfileContext);

    // chips: 子コンポーネントへ渡す、親の参照を作成
    const profileRef = createRef();

    const handleClick = (id) => {
        setId(id);
    };

    const handleMouseOverForDebug = (id) => {
        setId(id);
    };

    const handleMouseOutForDebug = (id) => {
        setId(id);
    };

    function createData(id, title, discription) {
        return { id, title, discription };
    }

    const editHandleClick = () => {
        setEditorDisplayStatus(true)
    }

    const cancelEditHandleClick = () => {
        setEditorDisplayStatus(false)
    }

    const modalHandleClose = () => {
        setModalStatus(false)
    }

    const getNewQuoteBlock = (setText) => {
        return new ContentBlock({
            key: genKey(),
            type: "blockquote",
            text: setText
        })
    }

    const quoteAction = (title, discription) => {
        let setText = 'タイトル名：' +
            title +
            '\n' +
            '本文：' +
            discription
        // chips: contentStateはエディタ内容の情報が詰まっているもの。本文、装飾、範囲等。
        //        一方、editorStateはもっとメタ情報が含まれている。
        //        イメージ的には親がeditorState、子がcontentState
        //        
        // chips: createWithContent()を使用すると、ContentStateオブジェクト⇒EditorStateオブジェクトにコンバートする
        // chips: getCurrentContent()を使用すると、現在のeditorStateからcontentStateを引き抜くことが出来る。
        const currentContentState = editorState.getCurrentContent();
        // chips: ContentBlockはエディタに表示されるブロック要素のこと。(divとか)
        //        エディタ内のブロックの数だけ、blockMaps配列として格納されている。
        // chips: 下記の関数で、新しいContentBlockを作成している。
        const newQuoteBlock = getNewQuoteBlock(setText);
        // chips: getBlockMap()を使用すると、contentStateからblockMapsを引き抜くことが出来る。
        //        また、set(key, block)で新しいcontentBlockをblockMapsに追加することが出来る。
        const newBlockMap = currentContentState.getBlockMap().set(newQuoteBlock.key, newQuoteBlock)
        // chips：新しいblockMapsをcontentStateに設定している。
        let setToEditorState = EditorState.push(editorState, currentContentState.set('blockMap', newBlockMap));
        setEditorState(setToEditorState);
    }

    const replyAction = (title, discription) => {
        setModalState({
            title: title,
            discription: discription
        })
        setModalStatus(true)
        setModalDisplayMode(true);
        setEditorDisplayStatus(false);
    }

    const gridTempRows = [
        createData('01', 'あなたの強みは何ですか？', '学生の時、体育会系の部活に入っていたので、体力には自信があります。'),
        createData('02', 'あなたの弱みは何ですか？', '緊張しやすいところです。'),
        createData('03', '直近1ヵ月で、一番幸せな一時は何かありましたか？', '中学の時の同級生と温泉旅行に行った事です。'),
        createData('04', 'どのくらいまでに結婚がしたいですか？', '20代のうちに結婚出来ればと思っています。'),
        createData('05', 'どんな職種にチャレンジしてみたいですか？', '教師や予備校の先生等、学生を相手にした職業に就きたいなと思っています。'),
    ];

    return (
        <>
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
                                        {meisaiId === row.id ?
                                            <ActionToolBar
                                                onReplyClick={() => replyAction(row.title, row.discription)}
                                                onQuoteClick={() => quoteAction(row.title, row.discription)}
                                            />
                                            : <Box style={{ height: "45px" }}></Box>}
                                    </ContentsTableBodyDescCell>
                                </ContentsTableRow>
                            ))
                        }
                    </ContentsTableBody>
                </ContentsTable>
            </Box>
            {editorDisplayStatus ?
                <CloseIconButton
                    onClick={() => cancelEditHandleClick()}
                />
                :
                <EditIconButton
                    onClick={() => editHandleClick()}
                />
            }
            <EditModal
                open={modalStatus}
                onClose={modalHandleClose}
                ref={profileRef}
                modalState={modalState}
                modalDisplayMode={modalDisplayMode}
            />
        </>
    )
}

export default ProfileAnalysisTab;