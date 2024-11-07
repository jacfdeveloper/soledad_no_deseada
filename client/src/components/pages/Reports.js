import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import HeadTitle from "../HeadTitle";
import ReportView from "../ReportView";



function Reports() {
    const navigate = useNavigate()
    const [view, setView] = useState("tickets")
    useEffect(()=>{
        var overbtn = document.getElementById("over-btn-reportes")
        if(overbtn){overbtn.style.visibility="visible"}
      }) 

    useEffect(() => {
        async function rstBold() {
            const buttons = [].slice.call(document.getElementsByClassName("select-date-filter"));
            buttons.map((e) => {
                if (e.id === `${view}`) {
                    e.style.fontWeight = "bold"
                    e.style.borderBottom = "4px solid"
                    e.style.borderBottomColor = "#e20613"
                } else {
                    e.style.fontWeight = "normal"
                    e.style.borderBottom = ""
                    e.style.borderBottomColor = ""
                }
            })
        }
        rstBold()
    }, [view])

    const [reports, setReports] = useState(false);
    const [tickets, setTickets] = useState(false);

    useEffect(() => {
        async function getReports() {
            if (!reports) {
                const res = await fetch(`/getReports`)
                const reportsFinded = await res.json();
                const report = reportsFinded.map(async (element) => {
                    let userRes = await fetch(`/getEvent/${element.fk_id_event}`)
                    var user = await userRes.json()
                    let volunteerRes = await fetch(`/volunteer/${element.fk_id_volunteer}`)
                    var volunteer = await volunteerRes.json();
                    return { element, user, volunteer }
                })
                setReports(report)
            }
        }
        async function getTickets() {
            if (!tickets) {
                const res = await fetch(`/getTickets`)
                const ticketsFinded = await res.json();
                const ticket = await ticketsFinded.map(async (element) => {
                    let userRes = await fetch(`/getUser/${element.fk_id_user}`)
                    var user = await userRes.json()
                    let volunteerRes = await fetch(`/volunteer/${element.fk_id_volunteer}`)
                    var volunteer = await volunteerRes.json();
                    return { element, user, volunteer }
                })
                setTickets(ticket)
            }
        }
        getReports();
        getTickets();
    }, [view])



    return (<div className="Home">
        <HeadTitle title={"Reportes"} />
        <div className="select-bar">
            <div className="select-date-filter" id="tickets" onClick={() => setView("tickets")}><p>Usuarios</p> </div>
            <div className="select-date-filter" id="reports" onClick={() => setView("reports")}><p> Eventos</p></div>
        </div>
        {(view === "tickets" && tickets) && tickets.map((element, i) => {
            return <ReportView type={"ticket"} element={element} key={i} />
        })
        }
        {(view === "reports" && reports) && reports.map((element, i) => {
            return <ReportView type={"report"} element={element} key={i} />
        })
        }
        <div className="bottom-margin"></div>
        <NavBar />
    </div>)
}


export default Reports;