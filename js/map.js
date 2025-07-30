// Initialize the map
const map = L.map("map").setView([31.5204, 74.3587], 12); // Lahore coordinates

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

// Add markers for the two locations
const locations = [
  {
    coords: [31.531, 74.3457],
    name: "Factory 1",
    address: "175-D, Wahdat Road, Lahore, Pakistan",
  },
  {
    coords: [31.3989, 74.2175],
    name: "Factory 2",
    address: "35-B, Sundar Industrial Estate 2, Lahore, Pakistan",
  },
];

locations.forEach((location) => {
  L.marker(location.coords)
    .addTo(map)
    .bindPopup(`<h6>${location.name}</h6><p>${location.address}</p>`)
    .openPopup();
});
