import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
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
export const ContentsTabs = withStyles({
    root: {
        padding: '0px',
        fontSize: '14px',
        color: 'gray',
        backgroundColor: 'inherit',
        verticalAlign: 'bottom'
    },
    indicator: {
        backgroundColor: '#1890ff',
    },
})(Tabs);

export const ContentsTab = withStyles({
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
            color: '#1890ff',
            fontWeight: 700,
        },
        '&:focus': {
            color: '#40a9ff',
        },
    },
    selected: {},
})((props) => <Tab disableRipple {...props} />);

export const ContentsTable = withStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
        marginTop: '20px'
    },
    table: {
        minWidth: 650,
    }
})(Table)

export const ContentsTableHead = withStyles({
    root: {
       backgroundColor: '#1597BB',
       fontSize: '14px',
       color: 'white',
       fontWeight: '650'
    }
})(TableHead)

export const ContentsTableRow = withStyles({
    root: {}
})(TableRow)

export const ContentsTableBody = withStyles({
    root: {
       backgroundColor: 'white',
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
        fontSize: '12px',
        fontWeight: '600',
        minHeight: '100px',
        paddingTop: '5px',
        paddingBottom: '20px',
        verticalAlign: 'top'
    }
})(TableCell)

export const ContentsTableBodyDescCell = withStyles({
    root: {
        color: 'black',
        fontSize: '12px',
        minHeight: '100px',
        paddingTop: '5px',
        paddingBottom: '20px',
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

export const ContentsBodyText = withStyles({
    root: {
        fontSize: '14px',
        color: '#194350',
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
})(Typography)

export const ContentsGoodIcon = withStyles({
    root: {
        color: '#1890ff',
        fontSize: '40px'
    }
})(ThumbUpAltIcon)

export const ContentsBadIcon = withStyles({
    root: {
        color: 'grey',
        fontSize: '40px'
    }
})(ThumbDownAltIcon)

export const ContentsReviewCount = withStyles({
    root: {
        fontSize: '14px',
        fontWeight: '700',
        color: '#194350',
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
})(Typography)