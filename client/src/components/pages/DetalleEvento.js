import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";
import ReportOverlay from "../ReportOverlay";
import UserContext from "../../context/UserContext";
import ResumeCall from "../ResumeCall"
import musica from "../../images/musica.png"
import juegos from "../../images/juegos.png"
import manualidades from "../../images/manualidades.png"
import reuniones from "../../images/reuniones.png"
import bailes from "../../images/bailes.png"
import cocina from "../../images/cocina.png"
import EventReportOverlay from "../EventReportOverlay";

function DetalleEvento() {
    const [show, setShow] = useState(false)
    const [eventData, setEventData] = useState("")
    const { id } = useParams()
    const { user } = useContext(UserContext)
    const [imgMini, setImgMini] = useState(null)
    const [date, setDate] = useState("")



    useEffect(() => {
        async function geteventData() {
          
            if (!eventData) {
                const res = await fetch(`/getEvent/${id}`)
                const eventDataf = await res.json()
               
                setEventData(eventDataf)
                let dateString = new Date(eventDataf.date_)
                setDate(dateString.toLocaleString("es-ES"))
            }
        }
        geteventData();
    })

    const handleShow = () => {
        setShow(true)
    }
    useEffect(() => {
        if (eventData) {
            let tema = eventData.theme.split(",")[0];
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

    return (<div className="Home">
        {show && <EventReportOverlay setShow={setShow} id={id} />}
        {eventData && <div>
            <img className="img-event-detalle" src={imgMini} alt="Avatar" />
            <div className="banner-event">
                <p className="banner-event-name">{eventData.name_}</p>

            </div>
            <div className="detail-group">
                <label>Fecha programada:</label>
                <p>{date}</p>
            </div>

            <div className="detail-group">
                <label>Localización:</label>
                <p>{eventData.location}</p>
            </div>
            <div className="detail-group">
                <label>Descripción:</label>
                <p>{eventData.description_}</p>
            </div>
            <div className="user-functions">
                <button className="centrado" onClick={handleShow}>REPORTAR</button>

            </div>
        </div>}
        <NavBar />
    </div>)
}


export default DetalleEvento;