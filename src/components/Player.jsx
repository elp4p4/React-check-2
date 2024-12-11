import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name = "Alessandro Costacurta", 
  team = "AC Milan", 
  nationality = "Italian", 
  jerseyNumber = 5, 
  age = 58, 
  imageUrl = "https://media.gettyimages.com/id/78979414/photo/8th-november-1998-italian-league-serie-a-milan-ac-milan-v-inter-milan-alessandro-costacurta-ac.jpg?s=612x612&w=0&k=20&c=ztnT431IxQvR1XgAXkZEDSx0tidGkxQ7jq57XPvarew=", 
  teamIcon = "https://icons.iconarchive.com/icons/giannis-zographos/italian-football-club/256/AC-Milan-icon.png", 
  nationalityIcon = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/20px-Flag_of_Italy.svg.png"}) => {
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
