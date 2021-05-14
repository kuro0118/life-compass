import { withStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button, Checkbox, FormControlLabel } from '@material-ui/core';
import { LABEL_CONTINUE_LOGIN } from '../../const/CommonConst';


export const LoginContainer = withStyles(theme => ({
    root: {
        backgroundColor: theme.palette.login.main,
        width: '100vw',
        height: 'auto',
        minHeight: '100vh'
    }
}))(Box)

export const LoginFormCotainer = withStyles(theme => ({
    root: {
        backgroundColor: theme.palette.white.main,
        margin: '0 auto',
        width: '350px'
    }
}))(Box)

export const HeaderText = withStyles(theme => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        fontSize: '22px',
    }
}))(Typography)

export const FromInputUserID = withStyles(theme => ({
    root: {
        backgroundColor: theme.palette.body.main,
        fontSize: '22px',
        marginBottom: '15px'
    }
}))(TextField)

export const FromInputPassword = withStyles(theme => ({
    root: {
        backgroundColor: theme.palette.body.main,
        fontSize: '22px',
        marginBottom: '10px'
    }
}))(TextField)

export const CheckBoxArea = () => {

    const useControlAreaStyles = makeStyles((theme) => ({
        root: {
            marginBottom: '20px'
        }
    }))

    const useCheckBoxStyles = makeStyles((theme) => ({
        root: {
            fontSize: '12px'
        }
    }))

    const classes_control_area = useControlAreaStyles()
    const classes_checkbox = useCheckBoxStyles()

    return (
        <FormControlLabel
            className={classes_control_area.root}
            value='1'
            control=
            {
                <Checkbox
                    className={classes_checkbox.root}
                    color="secondary"
                />
            }
            label={LABEL_CONTINUE_LOGIN}
        />
    )
}

export const LoginButton = withStyles(theme => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.white.main,
        fontSize: '20px',
        padding: '2.5px 7px',
        borderRadius: '3em',
        marginBottom: '20px'
    }
}))(Button)

export const LoginFooter = (props) => {

    const useControlAreaStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: theme.palette.login.main,
            margin: '0 auto'
        }
    }))

    const useLinkLabelStyles = makeStyles((theme) => ({
        root: {
            color: theme.palette.body.main,
            fontSize: '12px'
        }
    }))

    const useLinkStyles = makeStyles((theme) => ({
        root: {
            color: theme.palette.secondary.main,
            marginBottom: '5px',
            fontSize: '12px'
        }
    }))

    const classes_control_area = useControlAreaStyles(theme);
    const classes_link_label = useLinkLabelStyles(theme);
    const classes_link_btn = useLinkStyles(theme);

    return (
        <Box className={classes_control_area.root}>
            <Typography
                className={classes_link_label.root}
                variant='body2'
                component='p'
            />
            <Link
                component="button"
                variant="body2"
                component="h4"
                underline='none'
                className={classes_link_btn.root}
                onClick={props.onClick}
            >
                <Typography
                    className={classes_link_label.root}
                    variant='body1'
                    component='p'
                />
            </Link>
        </Box>
    )
}