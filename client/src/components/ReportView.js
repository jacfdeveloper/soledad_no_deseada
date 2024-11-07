import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import musica from "../images/musica.png"
import juegos from "../images/juegos.png"
import manualidades from "../images/manualidades.png"
import reuniones from "../images/reuniones.png"
import bailes from "../images/bailes.png"
import cocina from "../images/cocina.png"

function ReportView(props) {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const [user, setUser] = useState("")
    const [element, setElement] = useState(null)
    const [volunteer, setVolunteer] = useState("")
    const [imgMini, setImgMini] = useState(null)

    useEffect(()=>{
        async function desarmar(){
            let usr = await props.element
            setUser(usr.user)
            setElement(usr.element)
            setVolunteer(usr.volunteer)
        }
        desarmar();
    })

    useEffect(() => {
        if (props.type=="report" && user) {
            let tema = user.theme.split(",")[0];
            switch (tema) {
                case "musica":
                    setImgMini(musica)
                    break;
                case "juegos":
                    setImgMini(juegos)
                    break;
                case "cocina":
                    setImgMini(cocina)
                    break;
                case "reuniones":
                    setImgMini(reuniones)
                    break;
                case "manualidades":
                    setImgMini(manualidades)
                    break;
                case "baile":
                    setImgMini(bailes)
                    break;
                default:
                    break;
            }
        }
    })
    const handleClick = (id)=>{
        if(props.type==="ticket"){
            navigate(`/detalleUsuario/${id}`)
        } else if(props.type==="report") {
            navigate(`/detalleEvento/${id}`)
        }
    }


    return (<div className="ReportView">
        {props.type==="ticket"&&<div className="top-report" >
            <img className="imgReport" src={`/Images/${user.avatar}`} alt="Image" onClick={()=>handleClick(user.id)}/>
            <p className="card-title">{user.first_name} {user.last_name}</p>
        </div>}
        {props.type==="report"&&<div className="top-report" >
        <img className="imgReport" src={imgMini} alt="Image" onClick={()=>handleClick(user.id)}/>
            <p className="card-title">{user.name_}</p>
        </div>}
            {!show && <div className="DropDown-btn" onClick={()=>setShow(true)}><p>ver reporte</p><FontAwesomeIcon icon={faChevronDown} /></div>}
        {show &&
            <div className="sub-report">
                <p className="description">{element.description_}</p>
                <p className="remite-report"> {volunteer.first_name} {volunteer.last_name}</p>
                <div className="sub-button" onClick={()=>setShow(false)}><FontAwesomeIcon icon={faChevronUp} /></div>
            </div>}
    </div>)
}

export default ReportView;