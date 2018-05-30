import React, { Component } from 'react';
import Sanford_Plaza_Sign from '../images/Sanford_Plaza_Sign.jpg';
import Sanford_Courtyard_1 from '../images/Sanford_Courtyard_1.jpg';

export default class Home extends Component {  

  render() {
    return (
      <section className="homepage" >
        <div className="row">
          <div className="column">
            <img className="home-image" alt="Sanford-Plaza-Sign" src={Sanford_Plaza_Sign} />
          </div>
          <div className="column">
            <img className="rotate-img-90 home-image" alt="Sanford-Courtyard" src={Sanford_Courtyard_1} />
          </div>          
        </div>
        <div className="title-row">
          <h1>
            Welcome to Sanford Plaza
          </h1>
          <p>
            Sanford Plaza Apt. Corp. is a residential cooperative that consists of 4 buildings.
            A gated community located in Flushing, NY.  The complex consists of over 150 apartments 
            and each building is six stories high. Sanford Plaza has Studio, 1 and 2 bedrooms apartments.
            The property is maintained by a super and 3 porters. 
            Sanford Plaza is conveniently located close to subways, LIRR, buses, schools, shopping, restaurants and parks.
          </p>
          <h3>
            Amenities:
          </h3>
          <ul>
            <li>An indoor and outdoor parking garage</li>
            <li>Modern Laundry Rooms in each building</li>
            <li>Modern elevators in each building</li>
            <li>A large Courtyard with sitting areas</li>
            <li>Gated entrance for security and privacy</li>
          </ul>
        </div>
    </section>
    );
  }
}
