import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Box } from "@mui/material";
import { LatLng } from "leaflet";
const icon = L.icon({
  iconUrl: "/marker.jpg",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const center = new LatLng(51.507, -0.127); // Coordinates of the center location
const nearby1 = new LatLng(51.529, -0.111); // Coordinates of a nearby location
const nearby2 = new LatLng(51.486, -0.104); // Coordinates of another nearby location
const nearby3 = new LatLng(51.5, -0.168); //
function Map() {
  return (
    <Box
      sx={{
        height: "350px",
        width: "700px",
        border: "3px solid #DFDFDF",
        borderRadius: "10px",
      }}>
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={nearby1} icon={icon} />
        <Marker position={nearby2} icon={icon} />
        <Marker position={nearby3} icon={icon} />
      </MapContainer>
    </Box>
  );
}

export default Map;
