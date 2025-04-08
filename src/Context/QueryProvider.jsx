import React, { useState, useCallback } from 'react';
import { QueryContext } from './Query';

export const QueryProvider = ({ children }) => {
    const [query, setQuery] = useState('');

    const handleQueryChange = useCallback((newQuery) => {
        setQuery(newQuery);
    }, []);

    return (
        <QueryContext.Provider value={{
            query,
            setQuery: handleQueryChange
        }}>
            {children}
        </QueryContext.Provider>
    );
}; 