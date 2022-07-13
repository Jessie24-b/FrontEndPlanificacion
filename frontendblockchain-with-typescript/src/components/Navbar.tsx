
import { Link } from "react-router-dom";
import { FaTools } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";



function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Blockchain</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <FaHome className="icons" />
                    <li className="nav-item active">
                        <Link className="nav-link" to="/Home">Inicio </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"></a>
                    </li>
                    <FaFolder className="icons" />
                    <li className="nav-item">
                        <Link className="nav-link" to="/Portafolio">Mempool</Link>
                    </li>
                    <li className="nav-item">

                        <Link className="nav-link" to="/Configuracion">Configuraci&oacute;n </Link>

                    </li>
                    <li className="nav-item">

                        <Link className="nav-link" to="/Bloques">Bloques</Link>

                    </li>
                    <FaTools className="icons" />

                    <li className="nav-item">

                        <Link className="nav-link sesion" to="/">Cerrar sesi&oacute;n </Link>

                    </li>


                </ul>
            </div>
        </nav>

    );
}

export default Navbar