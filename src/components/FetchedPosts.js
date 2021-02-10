import React from 'react';
import Post from './Post'
import {fetchPosts} from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';

export default () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.postsReducer.fetchedPosts)
    const loading = useSelector(state => state.appReducer.loading)

    const fetchPostsHandler = () => {
        dispatch(fetchPosts())
    }

    if (loading) {
        return <div>Loading</div>
    }

    if (!posts.length) {
        return <button className="btn btn-primary"onClick={fetchPostsHandler}>Загрузить</button>
    }
    if (posts.length > 0) {
        return posts.map(post => <Post post={post} key={post.id} />)
    }
        

}