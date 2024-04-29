import Button from 'react-bootstrap/Button';

import { Container, Row, Col } from 'react-bootstrap';
import './HomePage.css';
import { AnimalCarousel } from '../../components/AnimalsCarousel/AnimalsCarousel';
import { MissionStatement } from '../../components/MissionStatement/MissionStatement';
import { WaysToHelp } from '../../components/WaysToHelp/WaysToHelp';

export const HomePage = () => {
  return (
    <div>
      <div className="full-screen-background">
        <div className="overlay-text">
          <h1>Врятуйте життя сьогодні!</h1>
          <p>Долучайтесь до нашої місії по захисту безпритульних та врятованих тварин.</p>
          <Button variant="primary">Дізнатися більше</Button>
        </div>
      </div>
      <Container>
        <MissionStatement />
        <AnimalCarousel />
        <WaysToHelp />
      </Container>
    </div>
  );
};