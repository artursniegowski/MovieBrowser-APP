// SearchView 

import InfoBar from "./InfoBar";
import { Link } from "react-router-dom";

// anonymous function going into an constant SearchView
const SearchView = (props) => {

    // updating the title on our search 
    const title = `You are searching for: ${props.searchText}`;

    // checking if objc searchResults is empty
    const foundResultsEmpty = Object.keys(props.searchResults).length === 0;

    // info for the user to notify him that there are no results for his search
    const noResultsFound = ( () => {
        return (
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 fw-normal">
                        No RESULTS FOUND
                    </h1>
                    <p className="lead fw-normal">
                        Try a different search !!
                    </p>
                </div>
            </div>
        )
    })

    // creating our movie card view
    const MovieView = (props) => {

        // creating the URL for the poster for the card
        let posterURL = `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`;

        // if we dont have an poste url then we set a default one
        if (props.movie.poster_path === null) {
            // deafulat image
            posterURL='https://img.icons8.com/pastel-glyph/344/cinema-.png';
        }
        
        // setting the link to a new url - based on the movie id - for deatil view
        const movieDetailUrl = `/movies/${props.movie.id}`

        return (
            // card from bootstrap 5
            <div className="col-lg-2 col-md-3 col-sm-4 col-12 my-3">
                <div className="card">
                    <img src={posterURL} className="card-img-top" alt={props.movie.original_title} />
                    <div className="card-body">
                        <h5 className="card-title">{props.movie.original_title}</h5>
                        <Link  to={movieDetailUrl} className="btn btn-primary">Show details</Link>
                    </div>
                </div>
            </div>
        )
    }


    // looping through our searchResults
    const resultsHtml = props.searchResults.map((obj, index) => {
        return (
            <MovieView key={index.toString()} movie={obj} />
        )
    })

    // SearchView
    return(
        <div>
            <InfoBar info={title} />
            {/* show the results if not empty */}
            {!foundResultsEmpty && resultsHtml &&
                // bootstrap 5 styling
                <div className="container">
                    <div className="row g-3 mt-2">
                        {resultsHtml}
                    </div>
                </div>
            }
            {/* no results found */}
            {foundResultsEmpty && noResultsFound()}
        </div>
    )
}

export default SearchView;


