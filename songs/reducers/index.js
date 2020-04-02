import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Greatest", duration: "4:05" },
    { title: "Steady Me", duration: "3:59" },
    { title: "Move your body", duration: "2:55" },
    { title: "The cure", duration: "3:15" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
