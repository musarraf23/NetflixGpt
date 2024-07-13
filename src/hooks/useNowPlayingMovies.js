import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addNowplayingMovies } from '../utils/movieSlice'
const useNowPlayingMovies = () => {
    //ftehc data from TMDB API and ipdate store
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(
        (store)=>store.movies.nowPlayingMovies
    );
    const getNowPlayingMovies = async() =>{
        const data = await fetch(
         "https://api.themoviedb.org/3/movie/now_playing?page=1",
         API_OPTIONS
        );
        const json = await data.json();
        dispatch(addNowplayingMovies(json.results));
    };
    useEffect (()=>{
        !nowPlayingMovies && getNowPlayingMovies();
    },[]);
};
export default useNowPlayingMovies;



