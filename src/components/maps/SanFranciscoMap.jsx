import React from 'react';
import ReactMapGL from 'react-map-gl';

import config from 'config';

// Code courtesy of react-map-gl examples
class SanFranciscoMap extends React.Component {
  constructor(props) {
    super(props);

    const {
      latitude,
      longitude,
      zoom,
      bearing,
      pitch,
      width,
      height,
    } = config.maps.sanFrancisco;

    this.state = {
      viewport: {
        latitude,
        longitude,
        zoom,
        bearing,
        pitch,
        width,
        height,
      },
    };
  }

  render() {
    const {viewport} = this.state;
    return (
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={config.mapbox.accessToken}
      />
    );
  }
}

export default SanFranciscoMap;
