import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <section className="solarSystem-container" data-testid="solar-system">
        <Title headline="Planetas" />
        <section>
          {planets.map((e) => (
            <PlanetCard
              key={ e.name }
              planetName={ e.name }
              planetImage={ e.image }
            />))}
        </section>
      </section>
    );
  }
}

export default SolarSystem;
