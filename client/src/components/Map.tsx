import { useMemo, useState, useEffect } from "react";
import { getGeocode, getLatLng } from "use-places-autocomplete";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  TrafficLayer,
  DirectionsRenderer,
  DistanceMatrixService,
} from "@react-google-maps/api";
import "../styles/Map.css";

// types allowing access to google's directions service through types/google.maps npm package
type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;

const Map = ({ destination }) => {
  // store latitude/longitude
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  //   store store directions polyline result
  const [directions, setDirections] = useState<DirectionsResult>();
  //   store converted destination address string as latitude/longitude
  const [destLat, setDestLat] = useState(0);
  const [destLng, setDestLng] = useState(0);
  // store current location from browser to display location marker
  const [myLoc, setMyLoc] = useState({
    lat: latitude,
    lng: longitude,
  });
  //   store results from distance matrix api
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  // gets users latitude and longitude from browser
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setMyLoc({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  //   memoize map center to only load on dependency change
  const center = useMemo(
    () => ({ lat: latitude, lng: longitude }),
    [latitude, longitude]
  );

  // sets map directions from point A to point B
  const fetchDirections = (loc: LatLngLiteral) => {
    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: myLoc,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        }
      }
    );
  };

  // converts destination from address string to latitude and longitude
  const handleEndpoint = async (val: string) => {
    const results = await getGeocode({ address: val });
    const { lat, lng } = await getLatLng(results[0]);
    setDestLat(lat);
    setDestLng(lng);
    console.log(destLat, destLng);
  };

  // function required for TrafficLayer component to display color coded conditions
  const onLoad = (trafficLayer: any) => {
    console.log("trafficLayer: ", trafficLayer);
  };

  //   load map with api key
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  if (destination) {
    fetchDirections(myLoc);
    handleEndpoint(destination);
  }

  return (
    <div>
      {distance && duration && (
        <div className="flex flex-wrap justify-around block bg-black text-white text-2xl">
          <h6>Distance: {distance}</h6>
          <h6>Duration: {duration}</h6>
        </div>
      )}
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        <TrafficLayer onLoad={onLoad} />
        <MarkerF position={center} />
        {directions && <DirectionsRenderer directions={directions} />}
        {destination && (
          <DistanceMatrixService
            options={{
              destinations: [{ lat: destLat, lng: destLng }],
              origins: [{ lat: latitude, lng: longitude }],
              travelMode: google.maps.TravelMode.DRIVING,
              unitSystem: google.maps.UnitSystem.IMPERIAL,
            }}
            callback={(response) => {
              if (response) {
                console.log(response);
                setDistance(response.rows[0].elements[0].distance.text);
                setDuration(response.rows[0].elements[0].duration.text);
              }
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
};

export default Map;
