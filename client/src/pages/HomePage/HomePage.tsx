import { Container, Row, Col, Nav, Button } from 'react-bootstrap';

import './HomePage.css';
import { AnimalCarousel } from '../../components/AnimalsCarousel/AnimalsCarousel';
import { MissionStatement } from '../../components/MissionStatement/MissionStatement';
import { WaysToHelp } from '../../components/WaysToHelp/WaysToHelp';
import { HomeNav } from '../../components/HomeNav/HomeNav';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      <div className="full-screen-background">

        <div className='p-5'>
          <HomeNav></HomeNav>
        </div>

        <div className="overlay-text ps-5 pe-5">
          <h1 className='display-3'><span className='bold-sm'>Врятуйте життя сьогодні!</span></h1>
          <h5 className='lead'>Долучайтесь до нашої місії по захисту безпритульних та врятованих тварин.</h5>
          <Container>
            <Row className='justify-content-center'>
              <Button variant="outline-light" className='mt-3 col-10 col-md-5' size="lg">
                <span className=''>Дізнатися більше</span>
              </Button>
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
