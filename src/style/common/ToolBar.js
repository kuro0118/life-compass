import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import ReplyIcon from '@material-ui/icons/Reply';
import Delete from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SmsIcon from '@material-ui/icons/Sms';
import editIcon from '../../images/editIcon.png'
import sendIcon from '../../images/sendIcon.png'
import foldupIcon from '../../images/foldupIcon.png'
import Tooltip from '@material-ui/core/Tooltip';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Emoji } from 'emoji-mart';

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

export const MeisaiHeadBar = withStyles({
    boxStyle: {
        textAlign: 'right',
        position: 'absolute',
        top: '0px',
        right: '10px',
        zIndex: '10'
    },
    iconStyle: {
        fontSize: '30px',
        '&:hover': {
            opacity: 0.7,
            cursor: 'pointer',
        }
    },
})((props) => (
    <Box className={props.classes.boxStyle}>
        <Tooltip title="このフィードバックを終了する">
            <CheckCircleOutlineIcon className={props.classes.iconStyle} onClick={props.onFixClick} color="primary" />
        </Tooltip>
        <Tooltip title="ブックマークする">
            <BookmarkBorderIcon className={props.classes.iconStyle} onClick={props.onBookmarkClick} color="primary" />
        </Tooltip>
    </Box>
))

export const FeedbackToolBar = withStyles(theme => ({
    listStyle: {
        backgroundColor: 'white',
        textAlign: 'right',
        padding: "2px 0px",
        display: 'inline-block',
        boxShadow: "4px 4px 4px rgba(0,0,0,0.4)",
        verticalAlign: 'top',
        borderRadius: '0.2em',
        position: 'absolute',
        bottom: '-5px',
        right: '0px'
    },
    itemStyle: {
        color: "white",
        display: "inline-block",
        width: "35px",
        height: "25px",
        paddingBottom: "0px",
        paddingTop: "4px",
        paddingRight: "15px",
        paddingLeft: "8px",
        textAlign: "center",
        borderRight: "0.3px solid rgba(174, 170, 170, 0.4)",
        backgroundColor: "white",
        '&:hover': {
            opacity: 0.7,
            cursor: 'pointer',
        },
        verticalAlign: 'top'
    },
    iconStyle: {
        fontSize: '16px',
    },
    emojiStyle: {
        paddingBottom: '5px'
    }
}))((props) => (
    <List className={props.classes.listStyle}>
        {props.enabledReply === true ?
            <Tooltip title="返信する">
                <ListItem className={props.classes.itemStyle} onClick={props.onReplyClick}>
                    <SmsIcon className={props.classes.iconStyle} color="primary" />
                </ListItem>
            </Tooltip> : ''
        }
        <Tooltip title="いいね！">
            <ListItem className={props.classes.itemStyle} onClick={props.onGoodClick}>
                <Emoji emoji="thumbsup" className={props.classes.emojiStyle} size={16} />
            </ListItem>
        </Tooltip>
        <Tooltip title="笑顔">
            <ListItem className={props.classes.itemStyle} onClick={props.onLaughClick}>
                <Emoji emoji="smile" className={props.classes.emojiStyle} size={16} />
            </ListItem>
        </Tooltip>
        <Tooltip title="すみません！">
            <ListItem className={props.classes.itemStyle} onClick={props.onSorryClick}>
                <Emoji emoji="pray" className={props.classes.emojiStyle} size={16} />
            </ListItem>
        </Tooltip>
        <Tooltip title="ゴミ箱に捨てる">
            <ListItem className={props.classes.itemStyle} onClick={props.onDeleteClick}>
                <Delete className={props.classes.iconStyle} color="primary" />
            </ListItem>
        </Tooltip>
    </List>
));