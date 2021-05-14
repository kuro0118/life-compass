import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { PATH_APP_LOGO } from '../../const/CommonConst'

export const LoginFormLogo = (props) => {

    const useLogoStyles= makeStyles((theme) => ({
        root: {
            margin: '0 auto'
        }
    }))

    const logo = getRelativePath(__dirname, PATH_APP_LOGO)

    const classes_logo = useLogoStyles(theme);

    return (
        <img
            className={classes_logo.root}
            src={logo}
            alt="Life Compass"
        />
    )
}
