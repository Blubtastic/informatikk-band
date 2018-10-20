import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 63.416323,
      lng: 10.402961
    },
    zoom: 15,
  };

  render() {
    function renderMarkers(map, maps) {
      let marker = new maps.Marker({
        position: {lat: 63.416323, lng: 10.402961},
        map,
        title: '',
      });
    }

    function createMapOptions (maps) {
      return {
        panControl: false,
        mapTypeControl: false,
        scrollwheel: false,
        fullscreenControl: false,
        zoomControl: false,
        styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.2 }, { 'lightness': -40 }] }]
      }
    }
    return (
      // Important! Always set the container height explicitly
      <div className="footerMap">
        <GoogleMapReact
          options={createMapOptions}
          bootstrapURLKeys={{ key: 'AIzaSyCmG4SWnoWtnwPBqp_g9EjeopZ8jVGVnY0'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
        >
        </GoogleMapReact>
      </div>
    );
  }
}
export default SimpleMap;
