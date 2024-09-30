import "../../components/tracks/tracks.css"
import Title from "../../components/title/Title";
import TracksOffered from "../../components/tracks/tracks";

function Tracks(){
    return(
        <div className="trackscont">
            <Title maintitle="tracks offered"/>
            <TracksOffered/>
        </div>
    )
}
export default Tracks;