import React from 'react';

export default class Dagobah extends React.Component{
  state = { laoding: true };

  componentDidMount() {
    fetch("https://swapi.co/api/planets/5")
      .then(res => res.json())
      .then(
        planet => this.setState({ laoding: false, planet }),
        error => this.setState({ laoding: false, error })
      )
  }

  renderLoading() {
    return <div>Loading...</div>
  }

  renderError() {
    return <div>I'm sorry! Please try again.</div>
  }

  renderPlanet() {
    const { name, climate, terrain } = this.state.planet;
    return (
      <div>
        <h2>{name}</h2>
        <div>Climate: {climate}</div>
        <div>terrain: {terrain}</div>
      </div>
    );
  }
  render() {
    if(this.state.laoding) {
      return this.renderLoading();
    } else if (this.state.planet) {
      return this.renderPlanet();
    } else {
      return this.renderError();
    }
  }
}