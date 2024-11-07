import HeadTitle from "../HeadTitle"
import NavBar from "../NavBar"
import {Estadisticas} from "../Estadisticas"
function Stats(){
return (
    (<div className="App">
            <HeadTitle title={"Estadisticas"}/>
            <Estadisticas/>
            <div className="bottom-margin"></div>
        <NavBar />
        </div>)
)
}

export default Stats