import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';


import MovieInfo from '../../components/movie/movie-info/MovieInfo';
import MovieTimeTableList from '../../components/movie/movie-timetables/MovieTimeTableList';
import TimeLine from '../../components/time-line/TimeLine';
import AuthContext from '../../store/auth-context';

const MovieDetail = (props) => {
    const param = useParams();
    const [movie, setMovie] = useState({});
    const authCtx = useContext(AuthContext)

    useEffect(() => {
        let url = `http://127.0.0.1:8080/api/staff/movie/${param.movieId}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + authCtx.token,
            },
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
        }).then((data) => {
            console.log(data);
            setMovie(data)
        })

    }, [param.movieId])

    return (<div>
        {/* <Header></Header> */}
        <MovieInfo movie={movie}></MovieInfo>
        <TimeLine></TimeLine>
        <MovieTimeTableList movie={movie}></MovieTimeTableList>
    </div>);
}
export default MovieDetail;