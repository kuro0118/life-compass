import React, { forwardRef } from 'react'
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Close from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

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
            paddingRight: "30px",
            paddingLeft: "30px"
        }
    }))

    const useTitleFormStyle = makeStyles((theme) => ({
        root: {
            marginTop: '30px',
            marginBottom: '30px'
        }
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
    const classes_text_form = useTitleFormStyle();
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
                <Box className={classes_contents.paper}>
                    <TextField
                        id="outlined-basic"
                        className={classes_text_form.root}
                        variant="outlined"
                        size="small"
                        fullWidth
                        label="タイトル"
                        type="search"
                        tabIndex={0}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="本文"
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                    />
                </Box>
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