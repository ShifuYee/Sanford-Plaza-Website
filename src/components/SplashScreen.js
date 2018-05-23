import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const SplashScreen = (props) => {
  return (
    <div className="splashScreen">
        <h1>Loading</h1>
        <CircularProgress size={100} thickness={25} />
    </div>
  )
};

export default SplashScreen;