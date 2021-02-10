import { call, put, takeEvery } from 'redux-saga/effects'
import { toggleLoader } from './actions'
import { FETCH_POSTS, REQUEST_POSTS } from './types'

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
    try {
        yield put(toggleLoader(true))
        const payload = yield call(fetchPosts)
        yield put({type: FETCH_POSTS, payload})
        yield put(toggleLoader(false))
    }
    catch(e) {
        console.error(e.message)
    }
}

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?limit=1')
    return await response.json()
}