import React, { useContext, forwardRef } from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import '../../css/myProfile/DraftEditor.css'
import ProfileContext from '../../contexts/ProfileContext';
import { SendIconButton } from './ToolBar';

export const EditBar = forwardRef((props, ref) => {

    const MAX_LENGTH = 250;

    const {editorState, setEditorState} = useContext(ProfileContext);

    const useFooterStyle = makeStyles((theme) => ({
        paper: {
            backgroundColor: '#1597BB',
            width: '100vw',
            position: 'fixed',
            bottom: '0%',
        }
    }))

    const useContainerStyle = makeStyles((theme) => ({
        paper: {
            margin: '0 auto',
            paddingTop: '15px',
            paddingBottom: '15px',
            width: '900px',
            position: 'relative'
        }
    }))

    // chips: 入力前に別途処理をしたい場合はこちらに定義
    const handleBeforeInput = () => {
        const currentContent = editorState.getCurrentContent();
        const currentContentLength = currentContent.getPlainText('').length

        if (currentContentLength > MAX_LENGTH - 1) {
            console.log('you can type max ten characters');
            return true;
        }
    }

    const handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if (newState) {
            setEditorState(newState);
            return 'handled';
        }

        return 'not-handled';
    }

    const classes_footer_style = useFooterStyle();
    const classes_container_style = useContainerStyle();

    return (
        <Box className={classes_footer_style.paper}>
            <Box className={classes_container_style.paper}>
                <Editor
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    handleBeforeInput={handleBeforeInput}
                    onEditorStateChange={setEditorState}
                />
                <SendIconButton />
            </Box>
        </Box>
    )
})