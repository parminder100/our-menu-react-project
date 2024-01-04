import "../Header/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Header = () =>{
    return(
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="project-name">Our Menu</div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;