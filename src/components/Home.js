import React, { Component } from 'react';
import Sanford_Plaza_Sign from '../images/Sanford_Plaza_Sign.jpg';
import Sanford_Courtyard_1 from '../images/Sanford_Courtyard_1.jpg';
import Sanford_Courtyard_2 from '../images/Sanford_Courtyard_2.jpg';

export default class Home extends Component {  

  render() {
    return (
      <section className="homepage" >
        <div className="row">
          <div class="column">
            <img className="rotate-img-90 home-image" src={Sanford_Courtyard_1} />
          </div>
          <div class="column">
            <img className="home-image" src={Sanford_Plaza_Sign} />
          </div>
        </div>
        <div className="title-row">
          <h1 className="title-40">
            Welcome to Sanford Plaza
          </h1>
          <p>
          Sanford Plaza Apt. Corp. is a residential cooperative that consists of 4 buildings.
          A gated community located in Flushing, NY.  The complex consists of over 150 apartments 
          and each building is six stories high. Sanford Plaza has Studio, 1 and 2 bedrooms apartments.
          It has an inside garage and an outdoor parking lot for residents. 
          Each building has its own laundry facilities. The property is maintained by a super and 3 porters. 
          Sanford Plaza is conveniently located close to subways, LIRR, buses, schools, shopping, restaurants and parks.
          </p>
        </div>
    </section>
    );
  }
}
