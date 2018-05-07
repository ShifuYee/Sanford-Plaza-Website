import React, { Component } from 'react';

export default class Home extends Component {  

  render() {
    return (
      <section className="homepage" >
        <div className="title-home">
          <div className="title-row">
            <h1 className="title-40">
              Sanford Plaza
            </h1>
            <p className="info-home">
              Welcome to the Sanford Plaza Website. 
              Built in 1945, Sanford Plaza consists of 4 buildings, 6 floors, made up of 180 apartments.
              Located in Queen's Flushing neightborhood, features of this building include a garage, 
              laundry room, and outdoor parking.
            </p>
          </div>
        </div>
    </section>
    );
  }
}
