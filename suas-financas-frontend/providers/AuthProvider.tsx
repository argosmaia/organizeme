import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { AuthProviderProps } from '@/types/props/AuthProviderProps';
import Cookies from "js-cookie";

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = Cookies.get('authToken');
        const expiryDate = Cookies.get('expiryDate');

        if (token && expiryDate) {
            const expiry = new Date(expiryDate);
            if (expiry > new Date()) {
                setIsAuthenticated(true);
            } else {
                Cookies.remove('authToken');
                Cookies.remove('expiryDate');
            }
        }
    }, []);

    const login = () => {
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 30);

        Cookies.set('authToken', 'your-auth-token', { expires: 30 });
        Cookies.set('expiryDate', expiryDate.toISOString(), { expires: 30 });

        setIsAuthenticated(true);
    };

    const logout = () => {
        Cookies.remove('authToken');
        Cookies.remove('expiryDate');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
