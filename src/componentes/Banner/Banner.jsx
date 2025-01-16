import "./Banner.css"

const Banner = ()=>{

    return <div className="banner">

        <img className="ban" src="/public/img/Banner.jpg" alt="Banner" />
        {
            /*
            <img className="rectangulo" src="/public/img/Rectangle.svg" alt="rectangulo"></img>
        
            <img className="policlinico" src="/public/img/frente policlinico.svg" alt="imagen policlinico"></img>
            */
        }
        <div className="textBox">
            <h1>hoalmundo</h1>
        </div>
        
        
    </div>
}

export default Banner