// NotFoundView 
import InfoBar from "./InfoBar";

// anonymous function going into an constant NotFoundView
const NotFoundView = () => {

    // NotFoundView
    return(
        <>
            <InfoBar info="Error" backdrop="https://i.pinimg.com/736x/e7/58/fe/e758fe99a7edb555e767080ad23cd11c.jpg"/>
            <div className="container-fluid text-center text-white bg-dark">
                <div className="row py-5 d-flex align-items-center">
                    <div className="col-lg-6 col-12 ">
                        <h1>ERROR 404</h1>
                        <p className="lead">Page not found.</p>
                        <p className="lead">Looks like this page dosen't exists.</p>
                    </div>
                    <div className="col-lg-6 col-12">
                        <img src="https://img.icons8.com/external-berkahicon-lineal-color-berkahicon/344/external-unplugged-save-earth-berkahicon-lineal-color-berkahicon.png" class="rounded mx-auto img-fluid" alt="no connection"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFoundView;


