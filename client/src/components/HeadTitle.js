import isologo from "../images/isologo.png"
function HeadTitle(props) {

    return (
    <div className="head-combo">
    <div className="head-title">
        <img className="isologo" src={isologo} alt="Logo" />
        <p className="head-title-text">{props.title}</p>    
    </div>
    <div className="head-margin"></div>
    </div>)
}


export default HeadTitle; 