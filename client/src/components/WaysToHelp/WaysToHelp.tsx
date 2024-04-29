import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export const WaysToHelp = () => {
    return (
        <div className="ways-to-help p-4">
            <h2 className="text-center mb-4">Як ви можете допомогти</h2>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card className="h-100 text-center">
                        <Card.Img variant="top" src="adoption.jpg" />
                        <Card.Body>
                            <Card.Title>Адопція</Card.Title>
                            <Card.Text>
                                Відкрийте свій дім для тварини, яка потребує любові та піклування.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 text-center">
                        <Card.Img variant="top" src="volunteer.png" />
                        <Card.Body>
                            <Card.Title>Волонтерство</Card.Title>
                            <Card.Text>
                                Долучайтесь до нашої команди волонтерів і допоможіть на місці або з дому.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 text-center">
                        <Card.Img variant="top" src="donation.jpg" />
                        <Card.Body>
                            <Card.Title>Пожертвування</Card.Title>
                            <Card.Text>
                                Ваші фінансові внески допоможуть нам забезпечити краще майбутнє для тварин.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};
