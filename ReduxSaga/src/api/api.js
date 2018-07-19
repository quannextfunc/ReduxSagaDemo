import axios from 'axios';

export const fetchAlbum = () => {
    return axios.get('https://rallycoding.herokuapp.com/api/music_albums');
}
