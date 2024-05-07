import React, { createContext, useContext, useState, useCallback } from 'react';

interface AlertInfo {
    id: number;
    message: string;
}

interface AlertContextType {
    alerts: AlertInfo[];
    showAlert: (message: string) => void;
    dismissAlert: (id: number) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [alerts, setAlerts] = useState<AlertInfo[]>([]);

    const showAlert = useCallback((message: string) => {
        setAlerts(prev => [...prev, { id: Date.now(), message }]);
    }, []);

    const dismissAlert = useCallback((id: number) => {
        setAlerts(prev => prev.filter(alert => alert.id !== id));
    }, []);

    return (
        <AlertContext.Provider value={{ alerts, showAlert, dismissAlert }}>
            {children}
        </AlertContext.Provider>
    );
};

export const useAlert = () => {
    const context = useContext(AlertContext);
    if (!context) {
        throw new Error('useAlert must be used within an AlertProvider');
    }
    return context;
};
