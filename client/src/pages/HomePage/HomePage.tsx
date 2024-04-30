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
          <h1 className='display-3'>Врятуйте життя сьогодні!</h1>
          <h5 className='lead ps-1'>Долучайтесь до нашої місії по захисту безпритульних та врятованих тварин.</h5>
          <Container>
            <Row className='justify-content-center'>
              <Col lg="6">
                <Button variant="outline-light" className='mt-3' size="lg">
                  <span className='m-5'>Дізнатися більше</span>
                </Button>
              </Col>
            </Row>
          </Container>
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