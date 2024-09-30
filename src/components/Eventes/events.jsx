import "../../components/Eventes/event.css"
import events from "../../data/events";

function EventsSchedule({ eventday, subject, eventdesc, eventleader }) {
    return (
        <div className="availableevents">
            <h2 className="event-day">{eventday}</h2>
            <h3 className="events-subject" subject="event-subject">{subject}</h3>
            <p className="event-descrition">{eventdesc}</p>
            <h2 eventleader="event-leader">{eventleader}</h2>
        </div>
    );
}

function EventOffered() {
    return (
        <div className="event-container">


                {events.map((eventi, i) => (
                    <EventsSchedule
                        eventday={eventi.eventday}
                        subject={eventi.subject}
                        eventdesc={eventi.eventdesc}
                        eventleader={eventi.eventleader}
                        key={i} 
                    />
                ))}
        </div>
    );
}

export default EventOffered;
