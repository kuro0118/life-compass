import React, { useState, useEffect, useReducer } from 'react'
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

const ProfileContentsRight = () => {

    // chips: Tabsコンポーネントは状態管理をしないとエラーが出てしまうため、注意。
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClick = (id) => {
        console.log(id);
        console.log("test");
    };

    function createData(id, title, discription) {
        return { id, title, discription };
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
            <Box className="contents-right-container">
                <Box className="contents-tab-group">
                    <ContentsTabs value={value} onChange={handleChange}>
                        <ContentsTab label="分析" />
                        <ContentsTab label="フィードバック" />
                        <ContentsTab label="お気に入り" />
                    </ContentsTabs>
                </Box>
                <Box className="contents-grid-group">
                    <ContentsTable>
                        <ContentsTableHead>
                            <ContentsTableRow>
                                <ContentsTableHeaderCell >タイトル</ContentsTableHeaderCell >
                                <ContentsTableHeaderCell  >本文</ContentsTableHeaderCell >
                            </ContentsTableRow>
                        </ContentsTableHead>
                        <ContentsTableBody>
                            {
                                gridTempRows.map(row => (
                                    <ContentsTableRow key={row.id} hover role="checkbox">
                                        <ContentsTableBodyTitleCell onClick={() => handleClick(row.id)}>{row.title}</ContentsTableBodyTitleCell>
                                        <ContentsTableBodyDescCell onClick={() => handleClick(row.id)}>{row.discription}</ContentsTableBodyDescCell>
                                    </ContentsTableRow>
                                ))
                            }
                        </ContentsTableBody>
                    </ContentsTable>
                </Box>
            </Box>
        </>
    )
}

export default ProfileContentsRight;