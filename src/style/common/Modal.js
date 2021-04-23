import React, { forwardRef } from 'react'
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Close from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

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
        paper : {
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