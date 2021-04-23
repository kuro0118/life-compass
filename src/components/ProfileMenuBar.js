import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
// chips: 独自themeを使用するには以下の様に、useThemeをインポートする必要がある
import { useTheme } from '@material-ui/core/styles';

const ProfileMenuBar = () => {

    // chips: useThemeで独自themeを取り出す
    const theme = useTheme();

    const useMenuBarStyle = makeStyles((theme) => ({
        root: {
            backgroundColor: theme.palette.primary.main,
            width: '100vw',
            height: '60px'
        }
    }))

    const classes_menubar = useMenuBarStyle(theme);

    return (
        <>
            <Box className={classes_menubar.root}>
            </Box>
        </>
    )
}

export default ProfileMenuBar;