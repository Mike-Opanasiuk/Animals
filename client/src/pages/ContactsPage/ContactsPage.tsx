import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 49.83826,
    lng: 24.02324
};

export const ContactsPage = () => {
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || 'empty maps api key';
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Контакти</h2>
            <p><i className="bi bi-envelope me-3"></i><a href="mailto:tailofgoodness@gmail.com" className="text-decoration-none text-reset">tailofgoodness@gmail.com</a></p>
            <p><i className="bi bi-phone me-3"></i><a href="tel:+380673331111" className="text-decoration-none text-reset">+380 67 333 11 11</a></p>
            <LoadScript googleMapsApiKey={googleMapsApiKey}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
            <p>Завітайте до нас за адресою: вул. Добровольців, корпус 1</p>
        </div>
    );
};