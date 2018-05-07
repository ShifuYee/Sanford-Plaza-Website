import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return <footer>
      <div className="footer-content">
        <div className="row">
          <div className="column">
            <h1 className="title-40">
              Contact Us
            </h1>
            <h5>
              Main Address:
            </h5>
            <h6>
              144-54 Sanford Ave, Flushing, NY 11355
            </h6>
            <br />
            <h5>
              Remaining 3 building addresses are:
            </h5>
            <h6>
              144-58 Sanford Ave, Flushing, NY 11355
            </h6>
            <h6>
              144-60 Sanford Ave, Flushing, NY 11355
            </h6>
            <h6>
              144-64 Sanford Ave, Flushing, NY 11355
            </h6>
          </div>
        </div>
      </div>
    </footer>
  }
}
