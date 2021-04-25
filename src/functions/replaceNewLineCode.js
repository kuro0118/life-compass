import React from 'react'

const replaceNewLineCode = (comment) => {

    const texts = comment.split("\n").map((item, index) => {
        // <></> は key を設定できないので、<React.Fragment /> を使う
        return (
            <React.Fragment key={index}>{item}<br /></React.Fragment>
        );
    });
    return (<span>{texts}</span>);
}

export default replaceNewLineCode;