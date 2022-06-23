/* eslint-disable no-undef */
/**
 * Marker grouping width markercluster plugin
 */

// config map
let config = {
    minZoom: 6,
    maxZoom: 18,
  };
  // magnification with which the map will start
  const zoom = 6;
  // coordinates
  const lat = 4.68352;
  const lng = -74.06251;
  
  const name1 = "EPS Sanitas"
  // coordinate array with popup text
  let points = [
    [4.68352, -74.06251, name1],
    [4.68046, -74.06408, "Innovar Salud SAS"],
    [4.67995, -74.06482, "Clínica Azul"],
    [4.67973, -74.06035, "Clínica CEMEQ Rehabilitación"],
    [4.68089, -74.05989, "Qualitas Salud"],
    [4.68221, -74.06004, "Terminal Bogotá"],
    [6.238055408071666, -75.57286594491161, "Hospital General"],
    [6.2662110705725365, -75.56651447460074, "Hospital Univertsitario San Vicente"],
    [6.2805442792541175, -75.58213565833832, "Clínica Universitaria Bolivariana"],
    [6.238055408071666, -75.58539722417362, "Clínica Medellín"],
    [6.25221874898088, -75.5641112155642, "Clínica Soma"],
    [6.305455821496278, -75.57801578570422, "Hospital Luis Carlos Galán"],
  ];
  
  // calling map
  const map = L.map("map", config).setView([lat, lng], zoom);
  
  // Used to load and display tile layers on the map
  // Most tile servers require attribution, which you can set under `Layer`
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  
  // L.MarkerClusterGroup extends L.FeatureGroup
  // by clustering the markers contained within
  let markers = L.markerClusterGroup();
  
  // Add markers to the layer
  for (let i = 0; i < points.length; i++) {
    const [lat, lng, title] = points[i];
  
    let marker = L.marker(new L.LatLng(lat, lng)).bindPopup(title);
    markers.addLayer(marker);
  }
  
  // Add all markers to map
  map.addLayer(markers);