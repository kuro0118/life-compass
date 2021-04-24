import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

// chips: rootは外観
// chips: indicatorはタブを移動した時に動く下線部
// chips: withStylesは既存のプロパティを再定義
//        makeStylesは新しいプロパティを定義
//        既存のmaterial-uiのスタイルをそのまま活かしたいのであれば、
//        withStylesのほうがいい。
// chips: whithStylesの第一引数にthemeを渡すことが出来る。(propsも渡せる？？)
export const ContentsTabs = withStyles(theme => ({
    root: {
        padding: '0px',
        fontSize: '14px',
        color: theme.palette.third.main,
        backgroundColor: 'inherit',
        verticalAlign: 'bottom'
    },
    indicator: {
        backgroundColor: theme.palette.secondary.main,
    },
}))(Tabs)

export const ContentsTab = withStyles(theme => ({
    root: {
        textTransform: 'none',
        minWidth: 72,
        fontWeight: 500,
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&$selected': {
            color: theme.palette.secondary.main,
            fontWeight: 700,
        },
        '&:focus': {
            color: '#40a9ff',
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

export const ContentsTable = withStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
        marginTop: '20px'
    }
})(Table)

export const ContentsTableHead = withStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        fontSize: '14px',
        color: 'white',
        fontWeight: '650'
    }
}))(TableHead)

export const ContentsTableRow = withStyles({
    root: {}
})(TableRow)

export const ContentsTableBody = withStyles({
    root: {
        backgroundColor: 'white'
    }
})(TableBody)

export const ContentsTableHeaderCell = withStyles({
    root: {
        color: 'white',
        fontWeight: '600',
        paddingTop: '5px',
        paddingBottom: '5px'
    }
})(TableCell)

export const ContentsTableBodyTitleCell = withStyles({
    root: {
        color: 'black',
        width: '30%',
        height: '35px',
        fontSize: '12px',
        fontWeight: '600',
        minHeight: '100px',
        paddingTop: '5px',
        paddingBottom: '0px',
        verticalAlign: 'top'
    }
})(TableCell)

export const ContentsTableBodyDescCell = withStyles({
    root: {
        color: 'black',
        width: '65%',
        fontSize: '12px',
        minHeight: '100px',
        paddingTop: '5px',
        paddingBottom: '0px',
        verticalAlign: 'top'
    }
})(TableCell)

export const ContentsAvatar = withStyles({
    root: {
        width: '130px',
        height: '130px',
        margin: '0 auto',
        marginTop: '20px'
    }
})(Avatar)

export const ContentsUserName = withStyles({
    root: {
        fontSize: '20px',
        color: 'black',
        textAlign: 'center',
        fontWeight: '700',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ],
        marginTop: '15px'
    }
})(Typography)

export const ContentsBodyText = withStyles(theme => ({
    root: {
        fontSize: '14px',
        color: theme.palette.body.main,
        textAlign: 'center',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ],
        marginTop: '15px'
    }
}))(Typography)

export const ContentsGoodIcon = withStyles(theme => ({
    root: {
        color: theme.palette.secondary.main,
        fontSize: '40px'
    }
}))(ThumbUpAltIcon)

export const ContentsBadIcon = withStyles(theme => ({
    root: {
        color: theme.palette.third.main,
        fontSize: '40px'
    }
}))(ThumbDownAltIcon)

export const ContentsReviewCount = withStyles(theme => ({
    root: {
        fontSize: '14px',
        fontWeight: '700',
        color: theme.palette.body.main,
        textAlign: 'center',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ],
    }
}))(Typography)

export const ContentsProfileItemLabel = withStyles({
    root: {
        fontSize: '14px',
        fontWeight: '700',
        color: 'black',
        textAlign: 'center',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ],
        display: 'inline-block',
        width: '40%'
    }
})(Typography)

export const ContentsProfileItemValue = withStyles({
    root: {
        fontSize: '12px',
        color: 'black',
        textAlign: 'center',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ],
        display: 'inline-block',
        width: '55%',
        textAlign: 'left'
    }
})(Typography)

export const ContentsFeedbackTab = withStyles({
    root: {
        width: '100%',
        marginTop: '20px'
    }
})(Box)

export const FeedbackContainer = withStyles(theme => ({
    root: {
        // borderTop: `1px solid ${theme.palette.third.main}`
    }
}))(Box)

export const FeedbackHeading = withStyles(theme => ({
    root: {
        color: theme.palette.primary.main,
        fontSize: '20px',
        fontWeight: '700'
    }
}))(Typography)

export const FeedbackMeisaiGroup = withStyles(theme => ({
    root: {
        borderTop: `1px solid ${theme.palette.third.main}`,
        borderBottom: `1px solid ${theme.palette.third.main}`,
        marginBottom: '20px',
        position: 'relative'
    }
}))(Box)

export const FeedbackMeisai = withStyles(theme => ({
    root: {
        marginTop: '10px',
        marginBottom: '20px',
        position: 'relative'
    }
}))(Box)

export const FeedbackMeisaiAvatarBlock = withStyles(theme => ({
    root: {
        display: 'inline-block',
        width: '15%',
        borderRight: `0.5px solid ${theme.palette.third.main}`,
        verticalAlign: 'top',
    }
}))(Box)

export const FeedbackMeisaiAvatar = withStyles(theme => ({
    root: {
        width: '80px',
        height: '80px',
        margin: '0 auto',
    }
}))(Avatar)

export const FeedbackMeisaiCommentBlock = withStyles(theme =>({
    root: {
        padding: '0px 20px',
        display: 'inline-block',
        width: '70%',
        verticalAlign: 'top',
    }
}))(Box)

export const FeedbackMeisaiReceiveDate = withStyles(theme => ({
    root: {
        color: theme.palette.third.main,
        fontSize: '12px',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ],
        marginBottom: '3px'
    }
}))(Typography)

export const FeedbackMeisaiComment = withStyles(theme => ({
    root: {
        color: theme.palette.body.main,
        fontSize: '14px',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ],
    }
}))(Typography)