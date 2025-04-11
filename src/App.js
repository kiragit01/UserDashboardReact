import React, { useEffect } from 'react';
import ContactsGrid from './components/ContactsGrid';
import { QueryProvider } from './Context/QueryProvider';
import { useContacts } from './hooks/useContacts';
import { ContactModalManager } from './components/ContactModal/ContactModalManager';
import debounce from 'lodash/debounce';
import {useQueryContext} from "./hooks/useQueryContext";

const ContactsContainer = () => {
    const { query } = useQueryContext();
    const { contacts, isLoading, error, fetchContacts } = useContacts();
    const { handleCardClick, PopupComponent } = ContactModalManager();

    useEffect(() => {
        const debouncedFetch = debounce((searchQuery) => {
            fetchContacts(searchQuery);
        }, 300);

        debouncedFetch(query);
        return () => debouncedFetch.cancel();
    }, [query, fetchContacts]);

    return (
        <>
            {PopupComponent}
            {error && (
                <div className="text-red-500 text-center p-4">
                    {error}
                </div>
            )}
            <ContactsGrid
                contacts={contacts}
                handleCardClick={handleCardClick}
                isLoading={isLoading}
            />
        </>
    );
};

function App() {
    return (
        <QueryProvider>
            <ContactsContainer />
        </QueryProvider>
    );
}

export default App;
