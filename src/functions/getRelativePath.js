import path from 'path'

const getRelativePath = (fromPath, toPath) => {
    const relativePath = path.relative(fromPath, toPath)
    return relativePath
}   

export default getRelativePath