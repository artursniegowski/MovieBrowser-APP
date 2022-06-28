// AboutView 

import InfoBar from "./InfoBar";

// anonymous function going into an constant AboutView
const AboutView = () => {

    // AboutView
    return(
        <div>
            <InfoBar info="About us"  backdrop="https://i.pinimg.com/736x/e7/58/fe/e758fe99a7edb555e767080ad23cd11c.jpg"/>
            <div className="p-4 p-md-5 text-white bg-dark">
                <p className="lead">
                Movie Browser allows you to browse, search movies and read synopsis.
                Search for a movie.
                </p>
            </div>
        </div>
    )
}

export default AboutView;


