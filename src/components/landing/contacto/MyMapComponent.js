import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=""""""AQUÍ MI KEY""""""&callback=initMap&libraries=&v=weekly",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh`, width: `40vw` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 28.92106576250419, lng: -13.644772672933705 }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: 28.92106576250419, lng: -13.644772672933705 }} />
    )}
  </GoogleMap>
));

export default MyMapComponent;
