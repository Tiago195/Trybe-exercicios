import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <section data-testid="mission-card">
        <h3 data-testid="mission-name">{name}</h3>
        <ul>
          <li data-testid="mission-year">{year}</li>
          <li data-testid="mission-country">{country}</li>
          <li data-testid="mission-destination">{destination}</li>
        </ul>
      </section>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
