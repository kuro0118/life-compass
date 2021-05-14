import React, { useContext, useState, forwardRef } from 'react'
import ProfileContext from '../contexts/ProfileContext'
import Cropper from 'react-easy-crop'
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider'
import { makeStyles, Typography } from '@material-ui/core'
import uploadToStorage from '../functions/uploadToStorage';
import getCroppedImage from '../functions/getCroppedImage';

const CropImage = forwardRef((props, ref) => {

    const { cropModalDisplayed, setCropModalDisplayed } = useContext(ProfileContext);
    const { uploadImageURL, setUploadImageURL } = useContext(ProfileContext);
    const { currentUser} = useContext(ProfileContext);

    const callGetCroppedImage = async () => {
        return await getCroppedImage(
            uploadImageURL,
            croppedAreaPixels
        )
    }

    const cropHandleSend = () => {

        try {
            //トリミングした画像データを取得
            callGetCroppedImage()
                .then((result) => {
                    console.log(uploadImageURL.imageURL)
                    console.log(result)

                    const newImage = {
                        name: uploadImageURL.name,
                        image: result,
                        imageURL: ""
                    }

                    // FirebaseのStorageにアップロード
                    const onStorageURL = uploadToStorage(newImage, currentUser);
                    setCropModalDisplayed(false);
                    console.log('画像を保存しました。')
                })

        } catch (e) {
            console.error(e)
        }
    }

    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    // const [aspect, setAspect] = useState(1)
    const imageURL = uploadImageURL.imageURL ?
        uploadImageURL.imageURL : currentUser.avatorURL

    const onZoomChange = (zoom) => {
        setZoom(zoom)
    }

    // chips: 第1引数は消さない様に注意！！
    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
        console.log(croppedAreaPixels)
    }

    const useCropContainerStyle = makeStyles((theme) => ({
        root: {
            position: 'absolute',
            // chips: top、left、transformの3点セットで画面中央固定
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 550,
            height: 570,
            backgroundColor: theme.palette.primary.main,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            textAlign: 'center',
            position: 'relative',
            zIndex: 1
        }
    }))

    const useCropHeadingStyle = makeStyles(theme => ({
        root: {
            color: theme.palette.white.main,
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
            display: 'inline-block',
            textAlign: 'left',
            fontSize: '14px',
            fontWeight: '700',
            position: 'absolute',
            top: 10,
            left: 32,
            zIndex: 2,
        }
    }))

    const useCropAreaStyle = makeStyles((theme) => ({
        root: {
            height: 400,
            width: 550,
            textAlign: 'center',
            position: 'absolute',
            top: 50,
            left: 32,
            zIndex: 1,
        }
    }))

    const useCropSliderGroupStyle = makeStyles(theme => ({
        root: {
            position: 'absolute',
            top: 480,
            left: 0,
            zIndex: 2,
            width: '100%'
        }
    }))

    const useCropSliderStyle = makeStyles(theme => ({
        root: {
            display: 'inline-block',
            width: '70%',
            verticalAlign: 'top',
            color: theme.palette.white.main
        }
    }))

    const useCropLabelStyle = makeStyles((theme) => ({
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
            fontSize: '16px',
            fontWeight: '700',
            textAlign: 'center',
            color: theme.palette.white.main,
            display: 'inline-block',
            verticalAlign: 'top',
            marginRight: '30px'
        }
    }))

    const useCropFooterStyle = makeStyles(theme => ({
        root: {
            position: 'absolute',
            top: 540,
            right: 35,
            zIndex: 2
        }
    }))

    const useCropButtonStyle = makeStyles((theme) => ({
        root: {
            padding: '5px 20px',
            color: theme.palette.white.main,
        },
        send: {
            backgroundColor: theme.palette.commit.main,
            '&:hover': {
                backgroundColor: theme.palette.commit_hover.main
            }
        },
        cancel: {
            backgroundColor: theme.palette.third.main,
            marginRight: '20px',
            '&:hover': {
                backgroundColor: theme.palette.cancel_hover.main
            }
        },
    }))

    const classes_container = useCropContainerStyle()
    const classes_heading = useCropHeadingStyle()
    const classes_cropArea = useCropAreaStyle()
    const classes_slider_groups = useCropSliderGroupStyle()
    const classes_slider = useCropSliderStyle()
    const classes_label = useCropLabelStyle()
    const classes_footer = useCropFooterStyle()
    const classes_btn = useCropButtonStyle()

    return (
        <>
            <Modal
                onClose={props.onClose}
                open={cropModalDisplayed}
            >
                <Box className={classes_container.root}>
                    <Typography
                        variant="subtitle1"
                        className={classes_heading.root}
                    >EDIT IMAGE</Typography>
                    <Box className={classes_cropArea.root}>
                        <Cropper
                            image={imageURL}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            cropShape="round"
                            showGrid={false}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                        />
                    </Box>
                    <Box className={classes_slider_groups.root}>
                        <Typography
                            variant="body1"
                            className={classes_label.root}
                        >
                            zoom
                        </Typography>
                        <Slider
                            value={zoom}
                            min={1}
                            max={3}
                            step={0.1}
                            aria-labelledby="Zoom"
                            onChange={(e, zoom) => onZoomChange(zoom)}
                            className={classes_slider.root}
                        />
                    </Box>
                    <Box className={classes_footer.root}>
                        <Button
                            variant="contained"
                            className={classes_btn.root + " " + classes_btn.cancel}
                            onClick={props.onClose}
                        >
                            キャンセル
                        </Button>
                        <Button
                            variant="contained"
                            className={classes_btn.root + " " + classes_btn.send}
                            onClick={cropHandleSend}
                        >
                            決定
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
})

export default CropImage