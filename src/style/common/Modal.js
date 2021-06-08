import React, { forwardRef } from 'react'
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Close from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import replaceNewLineCode from '../../functions/replaceNewLineCode'
import Link from '@material-ui/core/Link';
import {
    IMG_ALT_FEEDBACKED
} from '../../const/CommonConst';

// chips: propsは親コンポーネントのporps
//        refは親コンポーネントのref (親⇒子へのアクセスをするため、参照を渡している)
export const EditModal = forwardRef((props, ref) => {

    const useModalContainerStyle = makeStyles((theme) => ({
        paper: {
            position: 'absolute',
            // chips: top、left、transformの3点セットで画面中央固定
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 550,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            textAlign: 'center'
        }
    }))

    const useModalContentsStyle = makeStyles((theme) => ({
        paper: {
            paddingTop: "15px",
            paddingBottom: "15px",
            paddingRight: "30px",
            paddingLeft: "30px"
        },
    }))

    const useModalHeaderStyle = makeStyles((theme) => ({
        paper: {
            borderBottom: '1.5px solid grey',
            textAlign: 'right'
        }
    }))

    const useSubmitButtonStyle = makeStyles((theme) => ({
        root: {
            padding: '5px 40px 5px 40px',
            marginTop: '25px'
        }
    }))

    const useCloseButtonStyle = makeStyles((theme) => ({
        root: {
            cursor: 'pointer'
        }
    }))

    const classes_container = useModalContainerStyle();
    const classes_contents = useModalContentsStyle();
    const classes_blank_line = useModalHeaderStyle();
    const classes_submit_button = useSubmitButtonStyle();
    const classes_close_button = useCloseButtonStyle();

    return (
        <Modal
            onClose={props.onClose}
            open={props.open}
        >
            <Box className={classes_container.paper}>
                <Box className={classes_blank_line.paper} >
                    <Tooltip title="閉じる">
                        <Close
                            className={classes_close_button.root}
                            onClick={props.onClose}
                        />
                    </Tooltip>
                </Box>
                {props.modalDisplayMode === true ?
                    <ReplyContainerBox classes={classes_contents} {...props} /> : <EditContainerBox classes={classes_contents} {...props} />
                }
                <Button
                    className={classes_submit_button.root}
                    color="primary"
                    variant="contained"
                >
                    送信
                </Button>
            </Box>
        </Modal>
    )
})

// 編集モード時の内容ブロック
const EditContainerBox = (props) => {

    const useTitleFormStyle = makeStyles((theme) => ({
        root: {
            marginTop: '30px',
        },
    }))

    const useDiscriptionFormStyle = makeStyles((theme) => ({
        root: {
            marginTop: '30px',
            marginBottom: '10px'
        },
    }))

    const classes_title_form = useTitleFormStyle();
    const classes_disc_form = useDiscriptionFormStyle();

    return (
        <Box className={props.classes.paper}>
            <TextField
                id="outlined-basic"
                className={classes_title_form.root}
                variant="filled"
                size="small"
                fullWidth
                label="タイトル"
                type="search"
                tabIndex={0}
                defaultValue={props.modalState.title}
                disabled={props.modalDisplayMode}
            />
            <TextField
                id="outlined-multiline-static"
                className={classes_disc_form.root}
                label="本文"
                fullWidth
                multiline
                rows={4}
                variant="filled"
                defaultValue={props.modalState.discription}
                disabled={props.modalDisplayMode}
            />
        </Box>
    )
}

// 返信モード時の内容ブロック
const ReplyContainerBox = (props) => {

    const useContentsTextStyle = makeStyles((theme) => ({
        paper: {
            textAlign: 'left'
        },
        font: {
            fontWeight: '700'
        },
        margin: {
            marginBottom: '15px'
        }
    }))

    const useReplyFormStyle = makeStyles((theme) => ({
        paper: {
            marginTop: '30px',
            marginBottom: '10px'
        }
    }))

    const classes_contents_text = useContentsTextStyle();
    const classes_reply_form = useReplyFormStyle();

    return (
        <Box className={props.classes.paper}>
            <Typography variant="subtitle1" className={classes_contents_text.paper + " " + classes_contents_text.font}>
                タイトル：
            </Typography>
            <Typography variant="body1" className={classes_contents_text.paper + " " + classes_contents_text.margin}>
                {props.modalState.title}
            </Typography >
            <Typography variant="subtitle1" className={classes_contents_text.paper + " " + classes_contents_text.font}>
                本文：
            </Typography>
            <Typography variant="body1" className={classes_contents_text.paper + " " + classes_contents_text.margin}>
                {props.modalState.discription}
            </Typography>
            <TextField
                id="outlined-multiline-static"
                className={classes_reply_form.root}
                label="返信"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
            />
        </Box >
    )
}

export const ReplyModal = forwardRef((props, ref) => {

    const useModalContainerStyle = makeStyles((theme) => ({
        paper: {
            position: 'absolute',
            // chips: top、left、transformの3点セットで画面中央固定
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 550,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            textAlign: 'center'
        }
    }))

    const useModalContentsStyle = makeStyles((theme) => ({
        root: {
            paddingTop: "15px",
            paddingBottom: "15px",
        },
    }))

    const useModalHeaderStyle = makeStyles((theme) => ({
        paper: {
            borderBottom: '1.5px solid grey',
            textAlign: 'right'
        }
    }))

    const useSubmitButtonStyle = makeStyles((theme) => ({
        root: {
            padding: '5px 40px 5px 40px',
        }
    }))

    const useCloseButtonStyle = makeStyles((theme) => ({
        root: {
            cursor: 'pointer'
        }
    }))

    const classes_container = useModalContainerStyle();
    const classes_contents = useModalContentsStyle();
    const classes_blank_line = useModalHeaderStyle();
    const classes_submit_button = useSubmitButtonStyle();
    const classes_close_button = useCloseButtonStyle();

    return (
        <Modal
            onClose={props.onClose}
            open={props.open}
        >
            <Box className={classes_container.paper}>
                <Box className={classes_blank_line.paper} >
                    <Tooltip title="閉じる">
                        <Close
                            className={classes_close_button.root}
                            onClick={props.onClose}
                        />
                    </Tooltip>
                </Box>
                <CommentReplyContainerBox classes={classes_contents} {...props} />
                <Button
                    className={classes_submit_button.root}
                    color="primary"
                    variant="contained"
                    onClick={props.onSendClick}
                >
                    送信
                </Button>
            </Box>
        </Modal>
    )
})

const CommentReplyContainerBox = (props) => {

    const useAvatarStyles = makeStyles((theme) => ({
        root: {
            width: '110px',
            height: '110px',
            marginBottom: '5px'
        }
    }))

    const useUserNameStyles = makeStyles((theme) => ({
        root: {
            fontSize: '14px',
            width: '110px',
            color: 'black',
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
        }
    }))

    const useAvatarGroupStyles = makeStyles((theme) => ({
        root: {
            display: 'inline-block',
            width: '20%',
            verticalAlign: 'top',
        }
    }))

    const useCommentGroupStyles = makeStyles((theme) => ({
        root: {
            display: 'inline-block',
            width: '75%',
            verticalAlign: 'top',
            textAlign: 'left',
            marginLeft: '10px'
        }
    }))

    const useReceiveDateStyles = makeStyles((theme) => ({
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
    }))

    const useCommentStyles = makeStyles((theme) => ({
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
    }))

    const useReplyFormStyle = makeStyles((theme) => ({
        paper: {
            marginTop: '15px',
            marginBottom: '10px'
        }
    }))

    const classes_avatar = useAvatarStyles();
    const classes_user_name = useUserNameStyles();
    const classes_avatar_group = useAvatarGroupStyles();
    const classes_comment_group = useCommentGroupStyles();
    const classes_receive_date = useReceiveDateStyles();
    const classes_comment = useCommentStyles();
    const classes_reply_form = useReplyFormStyle();

    return (
        <Box className={props.classes.root}>
            <Box className={classes_avatar_group.root}>
                <Avatar className={classes_avatar.root} src={props.replyData.avator} />
                <Typography className={classes_user_name.root} variant="h1">{props.replyData.userName}</Typography>
            </Box>
            <Box className={classes_comment_group.root}>
                <Typography className={classes_receive_date.root} variant="body1">{props.replyData.receiveDate}</Typography>
                <Typography className={classes_comment.root} variant="body1">{replaceNewLineCode(props.replyData.comment)}</Typography>
            </Box>
            <TextField
                id="outlined-multiline-static"
                className={classes_reply_form.paper}
                label="返信"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                onChange={props.onChange}
            />
        </Box >
    )
}

export const DeleteConfirmModal = forwardRef((props, ref) => {

    const useModalContainerStyle = makeStyles((theme) => ({
        root: {
            position: 'absolute',
            // chips: top、left、transformの3点セットで画面中央固定
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '320px',
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            textAlign: 'center'
        }
    }))

    const useModalHeaderStyle = makeStyles((theme) => ({
        root: {
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
            color: theme.palette.body.main,
            fontSize: '20px',
            width: '100%',
            fontWeight: '700',
            textAlign: 'left',
            display: 'block',
            marginBottom: '40px'
        }
    }))

    const useModalMessageStyle = makeStyles((theme) => ({
        root: {
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
            color: theme.palette.body.main,
            width: '100%',
            display: 'block',
            marginBottom: '40px',
            textAlign: 'left'
        }
    }))

    const useModalFooterStyle = makeStyles((theme) => ({
        root: {
            textAlign: 'right',
        }
    }))

    const useModalLinkButton = makeStyles((theme) => ({
        root: {
            color: theme.palette.secondary.main,
            marginLeft: '20px',
            '&:hover': {
                opacity: 0.7,
            }
        }
    }))

    const classes_container = useModalContainerStyle();
    const classes_header = useModalHeaderStyle();
    const classes_message = useModalMessageStyle();
    const classes_footer = useModalFooterStyle();
    const classes_link_btn = useModalLinkButton();

    return (
        <Modal
            onClose={props.onClose}
            open={props.open}
        >
            <Box className={classes_container.root}>
                <Typography className={classes_header.root} varant="h1">メッセージの削除確認</Typography>
                <Box className={classes_message.root} variant="body1">
                    メッセージを削除しますか？<br />
                    (※削除後は復元することは出来ません。)
                </Box>
                <Box className={classes_footer.root}>
                    <Link
                        component="button"
                        variant="body2"
                        underline='none'
                        className={classes_link_btn.root}
                        onClick={props.onCancelClick}
                    >キャンセル</Link>
                    <Link
                        component="button"
                        variant="body2"
                        underline='none'
                        className={classes_link_btn.root}
                        onClick={props.onDeleteClick}
                    >削除する</Link>
                </Box>
            </Box>
        </Modal>
    )
})

export const SendNoticeModal = (props) => {

    const useModalStyle = makeStyles(theme => ({
        root: {
            border: 'none',
            outline: 'none'
        }
    }))

    const useModalContainerStyle = makeStyles((theme) => ({
        root: {
            position: 'absolute',
            // chips: top、left、transformの3点セットで画面中央固定
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: theme.shadows[5],
            width: '320px',
        }
    }))

    const useModalImageStyle = makeStyles((theme) => ({
        root: {
            width: '100%'
        }
    }))

    const useModalContentsStyle = makeStyles((theme) => ({
        root: {
            backgroundColor: theme.palette.background.paper,
            textAlign: 'center',
            padding: '0px 20px'
        }
    }))

    const useModalMessageStyle = makeStyles((theme) => ({
        root: {
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
            color: theme.palette.body.main,
            textAlign: 'left',
            marginBottom: '20px',
        }
    }))

    const useModalLinkButton = makeStyles((theme) => ({
        root: {
            color: theme.palette.secondary.main,
            marginBottom: '20px',
            '&:hover': {
                opacity: 0.7,
            }
        }
    }))

    const classes_modal = useModalStyle()
    const classes_container = useModalContainerStyle();
    const classes_contents = useModalContentsStyle();
    const classes_image = useModalImageStyle();
    const classes_message = useModalMessageStyle();
    const classes_link_btn = useModalLinkButton();
    const imageURL = props.getImageURL();

    return (
        <Modal
            onClose={props.onClose}
            open={props.open}
            className={classes_modal.root}
        >
            <Box className={classes_container.root}>
                <Box className={classes_contents.root}>
                    <img src={imageURL} className={classes_image.root} alt={IMG_ALT_FEEDBACKED} />
                    <Typography className={classes_message.root} variant="body1">
                        {props.profileUser.userName}さんにフィードバックを送信しました！<br />
                    </Typography>
                    <Link
                        component="button"
                        variant="body2"
                        underline='none'
                        className={classes_link_btn.root}
                        onClick={props.onClick}
                    >OK</Link>
                </Box>
            </Box>
        </Modal>
    )
}