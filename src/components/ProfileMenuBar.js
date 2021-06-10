import React, { useContext } from 'react'
import ProfileContext from '../contexts/ProfileContext'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
// chips: 独自themeを使用するには以下の様に、useThemeをインポートする必要がある
import { useTheme } from '@material-ui/core/styles'

const ProfileMenuBar = () => {

    // chips: useThemeで独自themeを取り出す
    const theme = useTheme();
    const { currentUser } = useContext(ProfileContext);

    const useMenuBarStyle = makeStyles((theme) => ({
        root: {
            backgroundColor: theme.palette.primary.main,
            width: '100vw',
            height: '60px'
        }
    }))

    const useContainerBoxStyle = makeStyles(() => ({
        root: {
            width: '1060px',
            height: '100%',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
        }
    }))

    const useAvatorStyle = makeStyles(() => ({
        root: {
            width: theme.spacing(5),
            height: theme.spacing(5),
        }
    }))

    const useTextStyle = makeStyles((theme) => ({
        root: {
            display: 'inline-block',
            fontWeight: '550',
            color: theme.palette.white.main,
            padding: '5px 10px',
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

    const useUserNameStyle = makeStyles(() => ({
        root: {
            marginRight: '20px'
        }
    }))

    const useSignOutLableStyle = makeStyles((theme) => ({
        root: {
            borderRadius: '0.4em',
            '&:hover': {
                backgroundColor: theme.palette.commit_hover.main,
                cursor: 'pointer'
            }
        }
    }))

    const useIconStyle = makeStyles(() => ({
        root: {
            display: 'inline-block',
            verticalAlign: 'top',
            paddingTop: '2.5px',

        }
    }))

    const classes_menubar = useMenuBarStyle(theme)
    const classes_container = useContainerBoxStyle(theme)
    const classes_avator = useAvatorStyle(theme)
    const classes_userName = useUserNameStyle(theme)
    const classes_signOut = useSignOutLableStyle(theme)
    const classes_text = useTextStyle(theme)
    const classes_icon = useIconStyle(theme)

    return (
        <>
            <Box className={classes_menubar.root}>
                <Box className={classes_container.root}>
                    <Avatar
                        src={currentUser.avatorURL}
                        className={classes_avator.root}
                    />
                    <Typography
                        className={classes_text.root + " " + classes_userName.root}
                    >
                        {currentUser.userName}
                    </Typography>
                    <Tooltip title="ログアウトする">
                        <Button className={classes_text.root + " " + classes_signOut.root} >
                            <ExitToAppIcon
                                className={classes_icon.root}
                                fontSize="small"
                            />
                        ログアウト
                    </Button>
                    </Tooltip>
                </Box>
            </Box>
        </>
    )
}

export default ProfileMenuBar;