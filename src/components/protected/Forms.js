import React, { Component } from 'react';

export default class Forms extends Component {
  render() {
    return (
      <div>
        This is a protected route. You can only see this if you're authed.
      </div>
    );
  }
}
