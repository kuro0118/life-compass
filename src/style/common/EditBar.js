import React, { forwardRef } from 'react'
import Box from '@material-ui/core/Box';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Editor, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import '../../css/myProfile/DraftEditor.css'

export const EditBar = forwardRef((props, ref) => {

    const MAX_LENGTH = 250;

    const useFooterStyle = makeStyles((theme) => ({
        paper: {
            backgroundColor: '#1597BB',
            width: '100vw',
            height: '150px',
            position: 'fixed',
            bottom: '0%',
        }
    }))

    const useContainerStyle = makeStyles((theme) => ({
        paper: {
            margin: '0 auto',
            paddingTop: '15px',
            paddingBottom: '15px',
        }
    }))

    // chips: 入力前に別途処理をしたい場合はこちらに定義
    const handleBeforeInput = () => {
        const currentContent = props.editorState.getCurrentContent();
        const currentContentLength = currentContent.getPlainText('').length

        console.log(currentContentLength);

        if (currentContentLength > MAX_LENGTH - 1) {
            console.log('you can type max ten characters');
            return true;
        }
    }

    const handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(props.editorState, command);
    
        if (newState) {
            props.onChange(newState);
          return 'handled';
        }
    
        return 'not-handled';
    }

    const classes_footer_style = useFooterStyle();
    const classes_container_style = useContainerStyle();

    RichUtils.toggleInlineStyle(props.editorState, 'normal')

    return (
        <Box className={classes_footer_style.paper}>
            <Box className={classes_container_style.paper}>
                <Editor
                    editorState={props.editorState}
                    handleKeyCommand={handleKeyCommand}
                    handleBeforeInput={handleBeforeInput}
                    onChange={props.onChange}
                ></Editor>
            </Box>
        </Box>
    )

})