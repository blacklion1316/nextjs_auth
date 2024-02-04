'use client'
import { useState, useEffect } from 'react';

const ToggleModes = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.querySelector('body').setAttribute('data-bs-theme', 'dark');
        } else {
            document.querySelector('body').setAttribute('data-bs-theme', 'light');
        }
    }, [isDarkMode]);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div>
            <button onClick={toggleMode}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <p>
                Current mode: {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </p>
        </div>
    );
};

export default ToggleModes;
