import React, { Fragment, useState, useEffect } from 'react'
import MapComponent from './components/map'

import './App.scss';

function App(props) {
  return (
      <MapComponent  width={'30%'} height={'100%'} />
  );
}

export default App;