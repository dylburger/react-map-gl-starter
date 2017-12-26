import React from 'react';
import ReactMapGL from 'react-map-gl';

// Code courtesy of react-map-gl examples
const SanFranciscoMap = () => (
  <ReactMapGL
    width={700}
    height={700}
    latitude={37.7577}
    longitude={-122.4376}
    zoom={11}
  />
);

export default SanFranciscoMap;
