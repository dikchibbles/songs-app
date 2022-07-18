import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: "Let's get down", duration: '4:05' },
        { title: 'Gangsta paradise', duration: '3:45' },
        { title: 'All star', duration: '2:55' },
        { title: 'I want it now', duration: '3:22' }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SELECTED_SONG') {
        return action.payload;
    }

    return selectedSong;
}; 


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});



