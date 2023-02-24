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

function Map() {
  return (
    <Box
      sx={{
        height: "400px",
        width: { xs: "100%", lg: "700px" },
        my: 8,
        bgcolor: "white",
        padding: 4,
        border: "1px solid #DFDFDF",
      }}>
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={nearby1} icon={icon} />
      </MapContainer>
    </Box>
  );
}

export default Map;
