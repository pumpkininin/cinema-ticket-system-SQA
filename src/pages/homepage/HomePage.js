import { Fragment } from "react";
import Carousel from "../../components/carousel/Carousel";
import Category from "../../components/category/Category";
import MovieList from "../../components/movie-lsit/MovieList"

const HomePage = (props) => {
    return (
        <div>
            <Carousel></Carousel>
            <Category></Category>
            <MovieList></MovieList>
        </div>
    );
} 
export default HomePage;