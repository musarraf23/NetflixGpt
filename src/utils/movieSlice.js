import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        trailerVideo:null,
    },
    reducers:{
        addNowplayingMovies:(state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.actionMovies = action.payload;
        },
        addTrailerVideo : (state,action)=>{
            state.trailerVideo = action.payload;
        },

    },
});
export const {addNowplayingMovies,addTrailerVideo , addPopularMovies} = movieSlice.actions;
export default movieSlice.reducer;



