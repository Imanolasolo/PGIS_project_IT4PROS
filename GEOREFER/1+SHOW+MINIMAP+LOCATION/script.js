/* eslint-disable no-undef */
/**
 * PGIS Georreferencing project
 */

// config map
let config = {
    minZoom: 6,
    maxZoom: 18,
  };
  // magnification with which the map will start
  const zoom = 6;
  // Starting map coordinates
  const lat = 4.68352;
  const lng = -74.06251;
  
  const nameHSP = "CLÍNICA VASCULAR NAVARRA LTDA"
  // coordinate array with popup text
  let points = [
    [4.69387, -74.05550, nameHSP],
    [4.66861, -74.05756, "IMÁGENES DIAGNÓSTICAS DEL COUNTRY"],
    [4.57102, -74.1072, "FUNDACIÓN HOSPITAL SAN CARLOS"],
    [6.27723, -75.57980, "HOSPITAL PABLO TOBÓN URIBE"],
    [6.26675, -75.56442, "IPS UNIVERSITARIA CLÍNICA LEÓN XIII (Bloque 2)"],
    [5.84615, -76.00930, "E.S.E. HOSPITAL LA MERCED"],
    [6.34533, -75.51664, "E.S.E. HOSPITAL SANTA MARGARITA"],
    [3.42708, -76.53271, "KAMEX FISIOTERAPIA"],
    [3.46059, -76.53013, "CLÍNICA DE OCCIDENTE"],
    [3.41163, -76.48473, "HOSPITAL ISAIAS DUARTE CANCINO E.S.E"],
    [3.53398, -76.29692, "REHABILITACION FISICA INTEGRAL IPS EU"],
    [11.01668, -74.84599, "CLÍNICA PORTOAZUL S.A SIGLA CPA"],
    [10.98973, -74.95579, "IPS UNIDAD MEDICA ETICA E.U"],
    [7.06974, -73.16930, "CLÍNICA GIRÓN E.S.E"],
    [7.11386, -73.10769, "CENTRO DE ATENCIÓN Y DIAGNÓSTICO DE ENFERMEDADES INFECCIOSAS CDI S.A."],
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
  'IT4PROS 2022 &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
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
      "You are here :)"
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

