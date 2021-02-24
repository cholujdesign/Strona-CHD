import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import { PropTypes } from 'prop-types';
import { Map, TileLayer, FeatureGroup, Circle, Control, setPosition } from 'react-leaflet';
import {Marker, Popup} from 'react-leaflet';



delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),

});



class MapIn extends React.Component {
  
    
    
    componentDidMount() {
    
          const position = [50.06235158810318, 19.938404898418085]
          const map = L.map('map').setView(position, 9)
          
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          }).addTo(map)
          
          L.marker(position)
            .addTo(map)
           .bindPopup('A pretty CSS3 popup. ')



       // return this.setState({
      //      map: map
       // }
       // );
        
       
      
      

    }


    
    
    render() {
        
        return (
          
          
          
            
          <div id="map" style={{ height: 500 }}/>
            
        
        
        )
    }
  }
export default MapIn;



    