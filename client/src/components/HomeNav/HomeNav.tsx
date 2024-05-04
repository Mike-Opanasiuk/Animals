import { NavigationBar, NavigationBarProps } from "../NavigationBar/NavigationBar"
import linksData from "../../data/links.json";
import './HomeNav.css'

export const HomeNav : React.FC = () => {
    const links: NavigationBarProps['links'] = linksData as NavigationBarProps['links'];

    const navProps: NavigationBarProps = {
        links: links,
        logo: "logo-invert.png",
        linksColor: "text-white"
    };

    return (
        <header className="mt-3 mb-3">
            <NavigationBar logo={navProps.logo} links={navProps.links} linksColor={navProps.linksColor} />
        </header>
    );
}