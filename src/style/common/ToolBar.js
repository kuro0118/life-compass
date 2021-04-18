import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import ReplyIcon from '@material-ui/icons/Reply';
import editIcon from '../../images/editIcon.png'
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
            <ListItem className={props.classes.itemStyle}>
                <ReplyIcon />
            </ListItem>
        </Tooltip>
        <Tooltip title="引用">
            <ListItem className={props.classes.itemStyle}>
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
        bottom: "50px",
        padding: "5px",
        border: "none",
        backgroundColor: "white",
        borderRadius: "35px",
        textAlign: "center",
        '&:hover': {
            opacity: 1,
            cursor: 'pointer',
            backgroundColor: '#F0F0F0'
        }
    }
})((props) => (
    <Box className={props.classes.boxStyle} onClick={props.onClick}>
        <Tooltip title="フィードバックを送る">
            <img src={editIcon} alt="feedbackIcon" />
        </Tooltip>
    </Box>
));