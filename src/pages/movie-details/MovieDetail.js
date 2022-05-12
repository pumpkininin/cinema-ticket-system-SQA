import { useLocation } from 'react-router-dom';

import Header from '../../UI/header/Header'
import MovieInfo from '../../components/movie/movie-info/MovieInfo';
import MovieTimeTableList from '../../components/movie/movie-timetables/MovieTimeTableList';
import TimeLine from '../../components/time-line/TimeLine';

const MovieDetail = (props) => {
    return (<div>
        {/* <Header></Header> */}
        <MovieInfo></MovieInfo>
        <TimeLine></TimeLine>
        <MovieTimeTableList></MovieTimeTableList>
    </div>);
} 
export default MovieDetail;