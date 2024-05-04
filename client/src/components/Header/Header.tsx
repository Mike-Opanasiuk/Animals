import { NavigationBar, NavigationBarProps } from "../NavigationBar/NavigationBar";
import React from 'react';
import linksData from "../../data/links.json";

export const Header: React.FC = () => {
    const links: NavigationBarProps['links'] = linksData as NavigationBarProps['links'];

    const navProps: NavigationBarProps = {
        links: links,
        logo: "logo.png",
        linksColor: "text-black"
    };

    return (
        <header className="mt-3 mb-3">
            <NavigationBar logo={navProps.logo} links={navProps.links} linksColor={navProps.linksColor} />
        </header>
    );
};