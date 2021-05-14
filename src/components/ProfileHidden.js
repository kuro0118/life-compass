import React, { useContext } from 'react'
import ProfileContext from '../contexts/ProfileContext'
import getProfileUser from '../functions/getProfileUser';
import getRelativePath from '../functions/getRelativePath';
import { SendNoticeModal } from '../style/common/Modal'
import { PATH_IMAGE_SEND_FEEDBACK } from '../const/CommonConst'
import CropImage from './CropImage';


const ProfileHidden = () => {
    const { sendNoticeDisplayed, setSendNoticeDisplayed } = useContext(ProfileContext);
    const { cropModalDisplayed, setCropModalDisplayed } = useContext(ProfileContext);
    // const { uploadImageURL, setUploadImageURL } = useContext(ProfileContext);

    const commonHandleClose = () => {
        setCropModalDisplayed(false)
    }

    // const cropHandleSend = () => {
    //     setCropModalDisplayed(false)
    //     // ストレージに保存する処理を入れる
    //     const onStorageURL = uploadToStorage(uploadImageURL, setUploadImageURL);
    //     console.log('画像を保存しました。')
    // }

    const showNoticeImage = () => {
        const relativePath = getRelativePath(__dirname, PATH_IMAGE_SEND_FEEDBACK)
        return relativePath
    }

    const profileUser = getProfileUser()

    return (
        <>
            <SendNoticeModal
                open={sendNoticeDisplayed}
                profileUser={profileUser}
                getImageURL={showNoticeImage}
                onClose={commonHandleClose}
                onClick={commonHandleClose}
            />
            <CropImage
                onClose={commonHandleClose}
            />
        </>
    )
}

export default ProfileHidden