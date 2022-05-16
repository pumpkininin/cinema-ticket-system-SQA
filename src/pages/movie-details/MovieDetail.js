import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';


import MovieInfo from '../../components/movie/movie-info/MovieInfo';
import AuthContext from '../../store/auth-context';
import { TicketContextProvider } from '../../store/ticket-context';
import Processing from '../../components/processing/Processing';



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
            setMovie(data)
        })

    }, [param.movieId])

    return (<TicketContextProvider>
            <MovieInfo movie={movie}></MovieInfo>
            <Processing movie={movie} />
    </TicketContextProvider>);
}
export default MovieDetail;
