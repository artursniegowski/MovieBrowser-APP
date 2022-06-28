// InfoBar

// anonymous arrow function going into a const InfoBar
const InfoBar = (props) => {
    return (
        <header className="container-fluid bg-dark">
            <div className="d-flex justify-content-center bg-dark hero-container">
                <h2 className="text-primary fw-bold p-4 hero-text">{props.info}</h2>
                {/* showing backdrop only if it is not empty */}
                {props.backdrop &&
                    <div className="hero-backdrop" style={{backgroundImage: `url(${props.backdrop})`}}></div>
                }
            </div>
        </header>
    )
}

export default InfoBar;