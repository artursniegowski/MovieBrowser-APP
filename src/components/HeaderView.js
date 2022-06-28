// HeaderView 
// for linking websites with route v6
import { useNavigate ,Link } from "react-router-dom"


// anonymous function going into an constant HeaderView
const HeaderView = ({searchText, setSearchText}) => {


    // for forcing the user every time he types something 
    // into search box - to got o /search route
    const navigate = useNavigate()

    // updating value of searchText from input 
    const updateSearchText = (e) => {
        // rerouting to search
        navigate('search')
        setSearchText(e.target.value)
    }

    // when the button search is pressed go to the searchView
    const goToSearchOptions = () => {
        // rerouting to search
        navigate('search')
    }

    // HEADER
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="https://img.icons8.com/pastel-glyph/344/movie-beginning.png" alt="logo" width="32" height="32" className="d-inline-block align-text-top me-2"/>
                    <span>Movie Browser</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about">About</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search"
                            value={searchText}
                            onChange={updateSearchText} 
                        />
                        <button 
                            className="btn btn-outline-light" 
                            type="button"
                            onClick={goToSearchOptions}
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default HeaderView;


