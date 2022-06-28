// HomeView 

import InfoBar from "./InfoBar";

// anonymous function going into an constant HomeView
const HomeView = () => {

    // HomeView
    return(
        <div>
            <InfoBar info="Welcome to the Movie Browser Website" backdrop="https://i.pinimg.com/736x/e7/58/fe/e758fe99a7edb555e767080ad23cd11c.jpg"/>
            <div className="p-4 p-md-5 text-white bg-dark">
                <p className="lead">
                Search for a movie.
                </p>
            </div>
        </div>
    )
}

export default HomeView;


