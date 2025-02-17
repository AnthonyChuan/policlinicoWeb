import "./navbar.css"

const Navbar = () =>{

    return <header> 
        <div className="contenedor">
            <div className="logo-clase">
                    <a href="/index.html" className="logo"><img src="../img/logo.png" alt="logo policlinico"/></a>
                <span>POLICLINICO ESPECIALIZADO SAN GABRIEL</span>
            </div>
        <nav>   
            <ul className="nav-links">
                <div><a href="#">NOSOTROS</a></div>
                <div><a href="#">CONTACTO</a></div>
                <div><a href="#">ESPECIALIDADES</a></div>
                <div><a href="#">SERVICIOS</a></div>
                <div><a href="#">INICIO</a></div>
            </ul>
        </nav>
        </div>
    </header>
}

export default Navbar