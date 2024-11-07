import { useContext, useEffect, useState } from "react";
import CardHome from "./CardHome";
import usuarios_asignados from '../images/usuarios_asignados.png'
import talleres from '../images/talleres.png'
import agenda from '../images/agenda.png'
import UserContext from "../context/UserContext";


function VolunteerHome() {
    const {user} = useContext(UserContext)

    return (<div className="VolunteerHome">
        <CardHome title="Listado de usuaria/os" subtitle="Los usuarios esperan tu llamada" image={usuarios_asignados} view={`usuariosAsignados`}/>
        <CardHome title="Talleres y eventos" subtitle="Asiste y pasa un buen rato" image={talleres} view={`talleres`}/>
    </div>)
}


export default VolunteerHome;