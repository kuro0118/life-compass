import React, { forwardRef } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button, Checkbox, FormControlLabel } from '@material-ui/core';
import {
    LABEL_CONTINUE_LOGIN,
    LABEL_NO_ACCOUNT,
    LABEL_LINK_CREATE_ACCOUNT
} from '../../const/CommonConst';
import Link from '@material-ui/core/Link';


export const LoginContainer = withStyles(theme => ({
    root: {
        backgroundColor: theme.palette.profile.main,
        width: '100vw',
        height: 'auto',
        minHeight: '100vh',
        position: 'relative'
    }
}))(Box)

export const LoginFormCotainer = withStyles(theme => ({
    root: {
        position: 'absolute',
        backgroundColor: theme.palette.white.main,
        textAlign: 'center',
        margin: '0 auto',
        padding: '35px',
        width: '350px',
        top: '50%',
        left: '50%',
        transform: 'translateY(-50%) translateX(-50%)',
        boxShadow: theme.shadows[5],
    }
}))(Box)

export const HeaderText = withStyles(theme => ({
    root: {
        color: theme.palette.body.main,
        fontWeight: '550',
        fontSize: '20px',
        marginBottom: '50px'
    }
}))(Typography)

export const FormInputPassword = forwardRef((props, ref) => {

    const useInputStyles = makeStyles(theme => ({
        root: {
            color: theme.palette.body.main,
            fontSize: '22px',
            marginBottom: '10px',
        }
    }))

    const classes_input = useInputStyles();

    return (
        <TextField
            className={classes_input.root}
            fullWidth
            inputRef={props.inputRef}
            onChange={props.onChange}
            id="password"
            label="パスワード"
            type="password"
            variant="outlined"
        />
    )
})

export const FormInputMailAddress = forwardRef((props, ref) => {

    const useInputStyles = makeStyles(theme => ({
        root: {
            color: theme.palette.body.main,
            fontSize: '22px',
            marginBottom: '25px'
        }
    }))

    const classes_input = useInputStyles();

    return (
        <TextField
            className={classes_input.root}
            fullWidth
            onChange={props.onChange}
            inputRef={props.inputRef}
            id="mailAddress"
            label="メールアドレス"
            variant="outlined"
        />
    )
})

export const CheckBoxArea = () => {

    const useControlAreaStyles = makeStyles((theme) => ({
        root: {
            display: 'block',
            marginBottom: '20px',
            textAlign: 'left'
        }
    }))

    const useCheckBoxLableStyles = makeStyles((theme) => ({
        root: {
            fontSize: '14px'
        }
    }))

    const classes_control_area = useControlAreaStyles()
    const classes_checkbox_label = useCheckBoxLableStyles()

    return (
        <FormControlLabel
            className={classes_control_area.root}
            value='1'
            control=
            {
                <Checkbox
                    size='small'
                    color="secondary"
                />
            }
            label={
                <span
                    className={classes_checkbox_label.root}
                >
                    {LABEL_CONTINUE_LOGIN}
                </span>}
        />
    )
}

export const LoginButton = withStyles(theme => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.white.main,
        display: 'block',
        padding: '5px 50px',
        borderRadius: '1.2em',
        margin: '0 auto',
        marginBottom: '20px',
        fontSize: 17,
        '&:hover': {
            backgroundColor: theme.palette.login_hover.main
        }
    }
}))(Button)

export const LoginFooter = (props) => {

    const useControlAreaStyles = makeStyles((theme) => ({
        root: {
            margin: '0 auto',
            marginTop: '40px'
        }
    }))

    const useLinkLabelStyles = makeStyles((theme) => ({
        root: {
            color: theme.palette.body.main,
            marginBottom: '5px',
            fontSize: '14px'
        }
    }))

    const useLinkStyles = makeStyles((theme) => ({
        root: {
            color: theme.palette.secondary.main,
            marginBottom: '5px',
            fontSize: '14px',
            cursor: 'pointer'
        }
    }))

    const classes_control_area = useControlAreaStyles();
    const classes_link_label = useLinkLabelStyles();
    const classes_link_btn = useLinkStyles();

    return (
        <Box className={classes_control_area.root}>
            <Typography
                className={classes_link_label.root}
            >
                {LABEL_NO_ACCOUNT}
            </Typography>
            <Link
                component="p"
                underline='none'
                className={classes_link_btn.root}
                onClick={props.onClick}
            >
                {LABEL_LINK_CREATE_ACCOUNT}
            </Link>
        </Box>
    )
}