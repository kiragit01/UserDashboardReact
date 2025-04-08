import React, { useState, useCallback } from 'react';
import { ContactPopup } from '../Popup/ContactPopup';

export const ContactModalManager = () => {
    const [selectedContact, setSelectedContact] = useState(null);

    const handleCardClick = useCallback((contact) => {
        setSelectedContact(contact);
    }, []);

    const handleClosePopup = useCallback(() => {
        setSelectedContact(null);
    }, []);

    return {
        selectedContact,
        handleCardClick,
        handleClosePopup,
        PopupComponent: selectedContact && (
            <ContactPopup
                contact={selectedContact}
                onClose={handleClosePopup}
            />
        )
    };
}; 