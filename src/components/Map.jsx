
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
    const apiKey = import.meta.env.REACT_APP_MAP_KEY;
  const mapStyles = {
    height: "50vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 23.6345,
    lng: 102.5528
  };

  return (
    <LoadScript
      googleMapsApiKey={apiKey}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={100}
        center={defaultCenter}
        mapTypeId="satellite"
      />
    </LoadScript>
  );
};

export default MapContainer;
