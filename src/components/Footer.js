import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return <footer className="footer-bg">
      <div className="container">
        <div className="col-md-4 col-sm-6">
          <h5 className="title-20">
            Contact Us
          </h5>
          <h5>
            Tel:
          </h5>
          <br />
          <h5>
            Email:
          </h5>
        </div>
        <div className="col-md-4 col-sm-6">
          <h5 className="title-20">
            Addresses:
          </h5>
          <h6>
            144-54 Sanford Ave, Flushing, NY 11355
          </h6>
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
    </footer>
  }
}
