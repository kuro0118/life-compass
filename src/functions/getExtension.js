const getExtension = (filePath) => {
    return filePath.match(/[^.]+$/);
}

export default getExtension