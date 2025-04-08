import { useState, useCallback } from 'react';
import UserService from '../API/UserService';

export const useContacts = () => {
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchContacts = useCallback(async (searchQuery) => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await UserService.GetUsers(searchQuery);
            setContacts(data);
        } catch (err) {
            setError(err.message);
            setContacts([]);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {
        contacts,
        isLoading,
        error,
        fetchContacts
    };
}; 