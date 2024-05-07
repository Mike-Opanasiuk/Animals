import { NavigationBar, NavigationBarProps } from "../NavigationBar/NavigationBar";
import React from 'react';
import linksData from "../../data/links.json";
import { useAlert } from "../../hooks/useAlert";
import { AlertDismissable } from "../AlertDismissable/AlertDismissable";

export const Header: React.FC = () => {
    const links: NavigationBarProps['links'] = linksData as NavigationBarProps['links'];

    const navProps: NavigationBarProps = {
        links: links,
        logo: "logo.png",
        linksColor: "text-black"
    };

    const {alerts, dismissAlert} = useAlert();

    return (
        <header className="mt-3 mb-3">
            {alerts.map((alert, index) => (
                <AlertDismissable
                    key={alert.id}
                    displayTime={5}
                    message={alert.message}
                    isDisplay={true}
                    setIsDisplay={() => dismissAlert(alert.id)}
                    isDismissable={true}
                    top={`${4 + index * 10}%`}
                />
            ))}
            <NavigationBar logo={navProps.logo} links={navProps.links} linksColor={navProps.linksColor} />
        </header>
    );
};