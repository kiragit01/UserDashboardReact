import { createContext, useContext } from "react";

export const QueryContext = createContext({
    query: '',
    setQuery: (query) => {},
});

export const useQueryContext = () => {
    const context = useContext(QueryContext);
    if (!context) {
        throw new Error('useQueryContext must be used within a QueryProvider');
    }
    return context;
};