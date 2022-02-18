import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <section className="missao-container" data-testid="missions">
        <Title headline="Missões" />
        {missions.map((e) => (
          <MissionCard
            key={ e.name }
            name={ e.name }
            year={ e.year }
            country={ e.country }
            destination={ e.destination }
          />))}
      </section>
    );
  }
}

export default Missions;
