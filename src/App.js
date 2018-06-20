import React, { Component } from 'react';
import Dagobah from './Mixed-Pattern';
import DagobahContainer from './Container-View-Pattern';
import View from './Provider-View';
import { withDagobah, DagobahProvider } from './Provider-Pattern';

const DagobahPlanet = withDagobah(View)
class App extends Component {
  render() {
    return (
      <div>
        <h2>Mixed-Pattern</h2>
        <Dagobah/>
        <h2>Container-View Pattern</h2>
        <DagobahContainer/>

        <h2> Provider Pattern </h2>
        <DagobahProvider>
          <DagobahPlanet/>
        </DagobahProvider>
      </div>
    );
  }
}

export default App;
