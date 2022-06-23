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

  // Used to load and display tile layers on the map
  // Most tile servers require attribution, which you can set under `Layer`
  const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const osmURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const orm = L.tileLayer(osmURL, { attribution }).addTo(map);

//Plugin magic goes here! Note that you cannot use the same layer object again, as that will confuse the two map controls

const osm2 = new L.TileLayer(osmURL, { minZoom: 0, maxZoom: 13, attribution });
const miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true }).addTo(map);

map
  .locate({
    // https://leafletjs.com/reference-1.7.1.html#locate-options-option
    setView: true,
    enableHighAccuracy: true,
  })
  // if location found show marker and circle
  .on("locationfound", (e) => {
    console.log(e);
    // marker
    const marker = L.marker([e.latitude, e.longitude]).bindPopup(
      "Your are here :)"
    );
    // circle
    const circle = L.circle([e.latitude, e.longitude], e.accuracy / 2, {
      weight: 2,
      color: "red",
      fillColor: "red",
      fillOpacity: 0.1,
    });
    // add marker
    map.addLayer(marker);
    // add circle
    map.addLayer(circle);
  })
  // if error show alert
  .on("locationerror", (e) => {
    console.log(e);
    alert("Location access denied.");
  });

  // create custom button
const customControl = L.Control.extend({
  // button position
  options: {
    position: "topleft",
  },

  // method
  onAdd: function (map) {
    console.log(map.getCenter());
    // create button
    const btn = L.DomUtil.create("button");
    btn.title = "back to home";
    btn.innerHTML = htmlTemplate;
    btn.className += "leaflet-bar back-to-home hidden";

    return btn;
  },
});

// adding new button to map controll
map.addControl(new customControl());

// on drag end
map.on("moveend", getCenterOfMap);

const buttonBackToHome = document.querySelector(".back-to-home");

function getCenterOfMap() {
  buttonBackToHome.classList.remove("hidden");

  buttonBackToHome.addEventListener("click", () => {
    map.flyTo([lat, lng], zoom);
  });

  map.on("moveend", () => {
    const { lat: latCenter, lng: lngCenter } = map.getCenter();

    const latC = latCenter.toFixed(3) * 1;
    const lngC = lngCenter.toFixed(3) * 1;

    const defaultCoordinate = [+lat.toFixed(3), +lng.toFixed(3)];

    const centerCoordinate = [latC, lngC];

    if (compareToArrays(centerCoordinate, defaultCoordinate)) {
      buttonBackToHome.classList.add("hidden");
    }
  });
}

const compareToArrays = (a, b) => JSON.stringify(a) === JSON.stringify(b);

