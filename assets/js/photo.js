import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

(function (window) {
  // Load Mapbox map if necessary
  const mapElementId = 'map';
  const mapElement = window.document.querySelector(`#${mapElementId}`);
  const mapLatitude = mapElement.dataset.latitude;
  const mapLongitude = mapElement.dataset.longitude;

  if (mapElement) {
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
    let map = new mapboxgl.Map({
      container: mapElementId,
      style: 'mapbox://styles/nhoizey/cjese953v0peh2spcgq64caff',
      center: [mapLongitude, mapLatitude],
      zoom: 6,
      attributionControl: false,
    });
    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();

    let marker = document.createElement('div');
    marker.className = 'marker';
    new mapboxgl.Marker({ element: marker, draggable: false })
      .setLngLat([mapLongitude, mapLatitude])
      .addTo(map);

    map.addControl(
      new mapboxgl.NavigationControl({ showCompass: false }),
      'top-right'
    );
    map.addControl(new mapboxgl.FullscreenControl());
  }
})(window);