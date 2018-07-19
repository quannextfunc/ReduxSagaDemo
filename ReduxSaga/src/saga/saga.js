import { FETCH_ALBUM, FETCH_ALBUM_SUCCESS, FETCH_ALBUM_FAILED } from '../actions/types';
import { put, takeEvery, call, fork } from 'redux-saga/effects'
import { fetchAlbum } from '../api/api';


function* fetchData() {
    try {
        yield take(FETCH_ALBUM);
        const data = yield call(fetchAlbum);
        yield put({ type: FETCH_ALBUM_SUCCESS, payload: data});
    }
    catch (error) {
      yield put({ type: FETCH_ALBUM_FAILED, payload: error});
    }
}

function* rootSaga() {
    // yield takeEvery(FETCH_ALBUM, fetchData);
    // while(true) {
    //   yield fetchData;
    // }

    // yield [
    //   fork(fetchData)
    // ]
    fork(fetchData);
}

export default rootSaga;
