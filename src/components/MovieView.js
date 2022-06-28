// MovieView 

import InfoBar from "./InfoBar";
// for getting the parameter id out of the URL
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// anonymous function going into an constant MovieView
const MovieView = () => {

    // getting the parameter id from the URL
    const { id } = useParams()

    // setting default value of empty object
    // variable - movieDetails , method to set this variable - setMovieDetails
    const [movieDetails, setMovieDetails] = useState({})
    // loading state - default value set to = true
    const [isLoading, setIsLoading] = useState(true)

    // called / render every time the id will change / 
    useEffect(() => {
        // requesting data from the API with the detail url with the id
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_THEMOVIEDB_API_KEY}&language=en-US`)
            .then(response => response.json())
            .then(data => {
                // populating the variable movieDetails with API respond
                setMovieDetails(data)
                // when the data was populated we can change the state of
                // isLoading to false
                setIsLoading(false)
            })
    },[id])

    // rendering the data from the API
    function renderMovieDetail() {

        if (isLoading) { //if the status of loading didnt update - it means the data is still updating
            return <InfoBar info="Loading..."/>
        }
        if (movieDetails) { //checking if actually movie detail has data in it

            // setting the url for poster path frm the data retrived from API
            let posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            
            // handling - missing poster url case
            if (movieDetails.poster_path === null){
                // setting a default value for the url
                // deafulat image
                posterPath='https://img.icons8.com/pastel-glyph/344/cinema-.png';
            }

            // creating a backdrop URL
            const backdropURL = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`


            return (
                <>
                    <InfoBar info={movieDetails.original_title} backdrop={backdropURL}/>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3 my-md-0 col-12 my-3">
                                <img src={posterPath} alt="..." className="img-fluid shadow rounded"/>
                            </div>
                            <div className="col-md-9 col-12">
                                <h2>{movieDetails.original_title}</h2>
                                <p className="lead fw-bold">{movieDetails.overview}</p>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }

    // MovieView
    return renderMovieDetail()
}

export default MovieView;


