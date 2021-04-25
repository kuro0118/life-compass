import { combineReducers } from 'redux'

import feedbacks from '../reducers/feedbacks';
import bookmarks from '../reducers/bookmarks';

export default combineReducers({
    feedbacks,
    bookmarks
});