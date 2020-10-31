import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder'

const FETCH_POSTS = 'FETCH_POSTS'
const FETCH_USER = 'FETCH_USER'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)));
}

const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder('/posts');
    const json = await response.json();
    dispatch({type: FETCH_POSTS,payload: json})
}
  
const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder(`/users/${id}`);
    const json = await response.json();
    dispatch({type: FETCH_USER, payload: json});
}