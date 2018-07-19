import { FETCH_ALBUM, FETCH_ALBUM_SUCCESS, FETCH_ALBUM_FAILED } from './types';
import Data from '../components/Data.json';
export const fetchData = () => {
    return { type: FETCH_ALBUM_SUCCESS, payload: Data };
}
