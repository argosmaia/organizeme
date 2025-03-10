import React, { useState } from 'react';
// import { loginService } from '../services/Auth'; // Importe o serviço de login

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleSubmit = async (event: React.FormEvent) => {
    //     event.preventDefault();
    //     try {
    //         const response = await loginService(email, password); // Use o serviço de login
    //         console.log('Login successful:', response);
    //     } catch (error) {
    //         console.error('Login failed:', error);
    //     }
    // };

    return (
        <>
        </>
    );
};

export default Login;