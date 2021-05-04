import { 
    PATH_AVATOR_ME,
 } from '../const/CommonConst'
import getRelativePath from './getRelativePath';

const getProfileUser = () => {
    return {
        userID: 'kokoro',
        userName: 'こころ',
        avatorURL: getRelativePath(__dirname, PATH_AVATOR_ME)
    }
}

export default getProfileUser;