import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';
import 'react-leaflet';                                
import 'leaflet/dist/leaflet.css';
import 'react-materialize'

// import "react-image-gallery/styles/scss/image-gallery.scss";
// import "react-image-gallery/styles/css/image-gallery.css";


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
