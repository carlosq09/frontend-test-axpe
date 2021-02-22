import React from 'react'
import MapComponent from '../MapComponent'
import SearchBar from '../SearchBar';

import './App.scss';

function App() {
  return (
    <div className="maps-container">
      <SearchBar />
      <MapComponent />
    </div>
  );
}

export default App;