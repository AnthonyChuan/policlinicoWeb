import TarjetaServicios from "../TarjetaServicios/TarjetaServicios"
import "./Servicios.css"


const Servicios= () =>{
    return<section className="contenedorServicios">
        <div className="titulo">
            <h2 className="primer">
                <span className="highlight-black">Nuestros servicios: </span> 
                <span className="highlight-blue">Salud y bienestar a tu alcance</span>
                </h2>
        </div >
        <div className="tarjetas">
            <TarjetaServicios></TarjetaServicios>
        </div>
    </section>


}

export default Servicios