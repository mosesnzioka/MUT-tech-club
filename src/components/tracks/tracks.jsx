import React from "react";
import tracks from "../../data/tracks";

function AvailableTracks({ icon, eventname, description }) {
    return (
        <div className="availableevents">
            <img src={icon} alt={`${eventname} icon`} />
            <h3 className="event-title">{eventname}</h3>
            <p className="event-description">{description}</p>
        </div>
    );
}

function TracksOffered() {
    return (
        <div className="event-container">

                {tracks.map((track, i) => (
                    <AvailableTracks
                        icon={track.icon}
                        eventname={track.eventname}
                        description={track.description}
                        key={i} 
                    />
                ))}
        </div>
    );
}

export default TracksOffered;
