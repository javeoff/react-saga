import { CREATE_POST, FETCH_POSTS, HIDE_LOADER, REQUEST_POSTS, SHOW_LOADER } from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function toggleLoader(flag) {
    console.log(flag);
    return {
        type: flag ? SHOW_LOADER : HIDE_LOADER
    }
}

export function fetchPosts() {
    return {
        type: REQUEST_POSTS
    }

    return async dispatch => {
        dispatch(toggleLoader(true))

        const asyncCallback = setTimeout(async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?limit=1')
            const json = await response.json()
            dispatch({type: FETCH_POSTS, payload: json})
    
            dispatch(toggleLoader(false))
        }, 1000)

        Promise.resolve(asyncCallback)

    }
}