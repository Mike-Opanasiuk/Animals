import React, { useEffect } from 'react';
import { Alert, AlertHeading } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AlertDismissable.css'

interface AlertDismissableProps {
    displayTime: number;
    message: string;
    description?: string;
    link?: string;
    isDismissable?: boolean;
    isDisplay: boolean;
    setIsDisplay: (display: boolean) => void,
    top: string
}

export const AlertDismissable: React.FC<AlertDismissableProps> = ({
    displayTime,
    message,
    description,
    link,
    isDismissable,
    isDisplay,
    setIsDisplay,
    top
}) => {

    useEffect(() => {
        if (isDisplay) {
            const timer = setTimeout(() => {
                setIsDisplay(false);
            }, displayTime * 1000);
            return () => clearTimeout(timer);
        }
    }, [isDisplay, displayTime, setIsDisplay]);

    if (!isDisplay) {
        return null;
    }

    return (
        <div className="alert-container" style={{ top }}>
            <Alert dismissible={isDismissable ?? true} onClose={() => setIsDisplay(false)}>
                <AlertHeading style={{fontSize: "18px"}}>{message}</AlertHeading>
                {description && <div>{description}</div>}
                {link && <Link to="/" className="alert-link text-reset">{link}</Link>}
            </Alert>
        </div>
    );
};
