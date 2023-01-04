import { Link, NavLink, useNavigate } from 'react-router-dom';


export const NavbarComponent = () => {
    const navigate = useNavigate();

    function onLogout() {
        /** Vamos redireccionar al login y configuramos que el boton de atras del navegador sea reemplazado por el login */
        navigate('/login', {
            replace: true
        });
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/superheroes/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/superheroes/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/superheroes/search"
                    >
                        Buscador
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">Jesús</span>
                    <button className='btn btn-danger' onClick={ onLogout }>Logout</button>
                </ul>
            </div>
        </nav>
    )
}
