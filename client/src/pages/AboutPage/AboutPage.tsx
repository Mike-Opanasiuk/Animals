import { useAlert } from '../../hooks/useAlert';

export const AboutPage = () => {
    const { showAlert } = useAlert();

    return (
        <>
            <h1>About Page</h1>
            <button onClick={() => showAlert("Some about page warning")}>Show Alert</button>
        </>
    );
};
