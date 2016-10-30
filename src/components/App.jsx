import React, { Component, PropTypes } from 'react';
import Navbar from './Navbar.jsx';
import $ from "jquery";
import 'fullpage.js/dist/jquery.fullPage.js';

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div>
        <div id="fullpage">
          <div className="section">
            <video
                   className="background-video"
                   autoPlay
                   loop>
              <source
                      src="videos/cirque-marchets-compressed.mp4"
                      type="video/mp4" />
            </video>
            <div id="logos-container">
              <ul>
                <li>
                  <img
                       id="logo-accomp"
                       src="images/logo-accompagnateurs.png" />
                </li>
                <li>
                  <img
                       id="logo-snam"
                       src="images/logo_snam.png" />
                </li>
              </ul>
            </div>
          </div>
          <div className="section">
            nian
          </div>
        </div>
        <header>
          <Navbar items={ ['Qui suis-je?', 'Mes randonnées', 'Galerie', 'Réservations'] } />
        </header>
      </div>
      );
  }
}

$(document).ready(function() {
  $('#fullpage').fullpage();
});
