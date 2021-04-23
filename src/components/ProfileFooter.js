import React, { useContext } from 'react'
import { EditBar } from '../style/common/EditBar';
import '../css/myProfile/Header.css'
import ProfileContext from '../contexts/ProfileContext'

const ProfileFooter = () => {

    const { editorDisplayStatus } = useContext(ProfileContext);

    if (editorDisplayStatus) {
        return <DisplayedEditor />
    } else {
        return <NotDisplayedEditor />
    }
}

const DisplayedEditor = () => {
    return (
        <>
            <EditBar />
        </>
    )
}

const NotDisplayedEditor = () => {
    return (
        <>
        </>
    )
}

export default ProfileFooter;