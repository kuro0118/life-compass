import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import ReplyIcon from '@material-ui/icons/Reply';
import editIcon from '../../images/editIcon.png'
import sendIcon from '../../images/sendIcon.png'
import foldupIcon from '../../images/foldupIcon.png'
import Tooltip from '@material-ui/core/Tooltip';

export const ActionToolBar = withStyles({
    listStyle: {
        backgroundColor: 'inherit',
        width: '100%',
        textAlign: 'right',
        paddingBottom: "5px"
    },
    itemStyle: {
        fontSize: "11px",
        color: "white",
        display: "inline-block",
        width: "35px",
        marginRight: "5px",
        padding: "0px",
        textAlign: "center",
        border: "1px solid #107692",
        backgroundColor: "#1597BB",
        boxShadow: "1px 1px 1px 1px black",
        '&:hover': {
            opacity: 0.7,
            cursor: 'pointer',
        }
    },
})((props) => (
    <List className={props.classes.listStyle}>
        <Tooltip title="返信">
            <ListItem className={props.classes.itemStyle} onClick={props.onReplyClick}>
                <ReplyIcon />
            </ListItem>
        </Tooltip>
        <Tooltip title="引用">
            <ListItem className={props.classes.itemStyle} onClick={props.onQuoteClick}>
                <FormatQuoteIcon />
            </ListItem>
        </Tooltip>
    </List>
));

export const EditIconButton = withStyles({
    boxStyle: {
        width: "55px",
        color: "black",
        position: "fixed",
        right: "50px",
        bottom: "10px",
        padding: "5px",
        border: "none",
        backgroundColor: "white",
        borderRadius: "35px",
        textAlign: "center",
        zIndex: "1",
        '&:hover': {
            opacity: 1,
            cursor: 'pointer',
            backgroundColor: '#F0F0F0'
        }
    }
})((props) => (
    // chips: propsには上記のwithStylesで定義したテーマも含まれる
    <Box className={props.classes.boxStyle} onClick={props.onClick}>
        <Tooltip title="コメントを入力する">
            <img src={editIcon} alt="editIcon" />
        </Tooltip>
    </Box>
));

export const SendIconButton = withStyles({
    boxStyle: {
        width: "55px",
        color: "black",
        position: "absolute",
        right: "-85px",
        bottom: "10px",
        padding: "5px",
        paddingTop: "10px",
        border: "none",
        backgroundColor: "white",
        borderRadius: "35px",
        textAlign: "center",
        zIndex: "1",
        '&:hover': {
            opacity: 1,
            cursor: 'pointer',
            backgroundColor: '#F0F0F0'
        }
    }
})((props) => (
    <Box className={props.classes.boxStyle} onClick={props.onClick}>
        <Tooltip title="コメントを送信する">
            <img src={sendIcon} alt="sendIcon" />
        </Tooltip>
    </Box>
));

export const CloseIconButton = withStyles({
    boxStyle: {
        width: "55px",
        color: "black",
        position: "fixed",
        right: "50px",
        bottom: "10px",
        padding: "5px",
        paddingTop: "10px",
        border: "none",
        backgroundColor: "white",
        borderRadius: "40px",
        textAlign: "center",
        verticalAlign: "middle",
        zIndex: "1",
        '&:hover': {
            opacity: 1,
            cursor: 'pointer',
            backgroundColor: '#F0F0F0'
        }
    }
})((props) => (
    <Box className={props.classes.boxStyle} onClick={props.onClick}>
        <Tooltip title="コメント入力をキャンセル">
            <img src={foldupIcon} alt="foldupIcon" />
        </Tooltip>
    </Box>
));