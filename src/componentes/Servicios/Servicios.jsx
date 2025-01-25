import TarjetaServicios from "../TarjetaServicios/TarjetaServicios"
import "./Servicios.css"

const cards=[
    {
        titulo:"Obstetricia y Atención de Partos 24 Horas",
        image:"/public/img/Pill.svg",
        texto:"Cuidamos de ti y tu bebé en cada etapa del embarazo, con partos seguros las 24 horas del día."
    },
    {
        titulo:"Ecografías 4D Especiales y Generales",
        image:"/public/img/ProtectionMask.svg",
        texto:"Imágenes detalladas en 4D para el seguimiento del embarazo y ecografías generales de alta precisión."
    },
    {
        titulo:"Laboratorio Clínico y Pruebas Especiales",
        image:"/public/img/HeartPulse.svg",
        texto:"Exámenes clínicos y pruebas especializadas con tecnología moderna para resultados rápidos y confiables."
    },
    {
        titulo:"Terapia Física y Rehabilitación",
        image:"/public/img/Hospital.svg",
        texto:"Recupera tu movilidad con programas personalizados de fisioterapia y rehabilitación integral."
    },
    {
        titulo:"Consultas Médicas Generales",
        image:"/public/img/DoctorsBag.svg",
        texto:"Atención personalizada para diagnosticar y tratar problemas de salud comunes, adaptada a tus necesidades."
    }
]

const Servicios= () =>{
    
    return<section className="contenedorServicios">
        <div className="flex justify-center content-center py-10">
                <span className="px-1 text-xl font-bold">Nuestros servicios: </span> 
                <span className="text-sky-600 text-xl font-bold">Salud y bienestar a tu alcance</span>
        </div >
        <div className="flex justify-center ">
        <div className="flex flex-wrap justify-center gap-12 max-w-5xl ">
            {
                cards.map((card,index)=><TarjetaServicios key={index} titulo={card.titulo} texto={card.texto} image={card.image}/>)
            }
        </div>    
        </div>
        <div className="flex justify-center content-center py-10 ">
            <span className="px-1 text-xl font-bold">¿Por qué </span>
            <span className="text-sky-600 text-xl font-bold">elegirnos?</span>
        </div>
        
    </section>
}

export default Servicios



