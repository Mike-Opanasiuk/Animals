import { Carousel } from 'react-bootstrap';
import './AnimalsCarousel.css';

export const AnimalCarousel = () => {
    return (
        <Carousel id="carousel" className='ms-auto me-auto'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/carousel-1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Барсік</h3>
                    <p>Любить гратися та гуляти на свіжому повітрі.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/carousel-2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Мурка</h3>
                    <p>Спокійна та лагідна кішка, яка любить тепло та затишок.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/carousel-3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Чарлі</h3>
                    <p>Милий котик, який чекає на свого нового друга.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};
