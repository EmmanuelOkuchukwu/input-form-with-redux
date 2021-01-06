import { FETCH_POSTS, NEW_POSTS } from './types';

export const fetchPosts = () => dispatch => {
    console.log('Fetching...')
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts =>
            dispatch ({
                type: FETCH_POSTS,
                payload: posts
            })
        );
};

export const createPost = (post) => dispatch => {
    console.log('Action called')
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(post)
    })
        .then(res => res.json())
        .then(posts => dispatch ({
            type: NEW_POSTS,
            payload: posts
        }))
        .catch(err => console.log(err));
};
