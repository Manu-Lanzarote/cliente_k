import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import myKeys from "../myKeys";

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${myKeys.mapsKey}&callback=initMap&libraries=&v=weekly`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `80vh`, width: `80%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 43.58798744170005, lng: 3.933169599138603 }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: 43.58798744170005, lng: 3.933169599138603 }} />
    )}
  </GoogleMap>
));

export default MyMapComponent;
