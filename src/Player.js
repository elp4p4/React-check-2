import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl, teamIcon, nationalityIcon}) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        <strong>
            Team: 
            <img src={teamIcon} alt={team} style={{ width: '20px', marginLeft: '10px', verticalAlign: 'middle' }} />
          </strong> {team} <br />
          <strong>
            Nationality: 
            <img src={nationalityIcon} alt={nationality} style={{ width: '20px', marginLeft: '10px', verticalAlign: 'middle' }} />
          </strong> {nationality} <br />
          <strong>Jersey Number:</strong> {jerseyNumber} <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
