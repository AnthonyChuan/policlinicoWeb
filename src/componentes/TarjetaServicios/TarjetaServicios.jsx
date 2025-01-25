import "./TarjetaServicio.css"
import PropTypes from "prop-types"


const TarjetaServicios =({titulo,image,texto})=>{
    
    return <div className="box-content h-auto w-52 p-4 my-2 rounded-xl bg-white shadow-figma-hover ">
        <div className="justify-self-center m-4 p-3 rounded-full border-2 border-sky-400">
            <img src={image} alt="foto" className="justify-self-center"/>
        </div>
        <div className="text-center mx-5">
        <h2 className="font-bold to-blue-950 py-3 ">{titulo}</h2>
        <p className="">{
        texto ? texto: "Cuidamos de ti y tu bebé en cada etapa del embarazo, con partos seguros las 24 horas del día."}</p>
        </div>
    </div>
}

TarjetaServicios.prototype={
    titulo:PropTypes.string,
    image:PropTypes.string,
    texto:PropTypes.string
}



export default TarjetaServicios