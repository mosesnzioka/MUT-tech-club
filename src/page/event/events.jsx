import EventOffered from "../../components/Eventes/events";
import Title from "../../components/title/Title"

function Event(){
    return(
        <div className="event-container-2">
            <Title maintitle="event schedule"/>
            <EventOffered/>
        </div>
    )
}
export default Event;