import React, { Component } from 'react'
import { GoogleMapLoader, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={14}
    defaultCenter={{ lat: 28.2340, lng: 83.9934 }}
    onClick={props.onMapClick}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
))

class TaskMap extends Component{

  state = {
      markers: [{
        position: {
          lat: 28.2340,
          lng: 83.9934,
        },
        key: `Taiwan`,
        defaultAnimation: 2
      }],
    }

    handleMapLoad = this.handleMapLoad.bind(this)
    handleMapClick = this.handleMapClick.bind(this)
    handleMarkerRightClick = this.handleMarkerRightClick.bind(this)

    handleMapLoad(map) {
      this._mapComponent = map
      if (map) {
        console.log(map.getZoom())
      }
    }

    handleMapClick(event) {
      const nextMarkers = [
        ...this.state.markers,
        {
          position: event.latLng,
          defaultAnimation: 2,
          key: Date.now(),
        },
      ]
      this.setState({
        markers: nextMarkers,
      })

      if (nextMarkers.length === 3) {
        this.props.toast(
          `Right click on the marker to remove it`,
          `Also check the code!`
        )
      }
    }

    handleMarkerRightClick(targetMarker) {
      const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker)
      this.setState({
        markers: nextMarkers,
      })
    }

  render(){
    return(
      <GettingStartedGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
        onMapLoad={this.handleMapLoad}
        onMapClick={this.handleMapClick}
        markers={this.state.markers}
        onMarkerRightClick={this.handleMarkerRightClick}
      />
    )
  }
}

export default TaskMap
