// import React, { useEffect, useState, useRef } from "react";
// import mapboxgl from "mapbox-gl";

// function Map() {
//     const mapContainer = useRef(null);
//     const map = useRef(null);
//     const [lng, setLng] = useState(12);
//     const [lat, setLat] = useState(46);
//     const [zoom, setZoom] = useState(3);

//   useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [lng, lat],
//       zoom: zoom
//     });
//   });

//   return (
//     <div>
//       <div ref={mapContainer} className="map-container" />
//     </div>
//   );
// }
//   export default Map;