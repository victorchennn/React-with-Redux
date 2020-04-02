export const selectSong = song => {
  return {
    type: "SONG_SELECTED", // necessary
    payload: song
  };
};
