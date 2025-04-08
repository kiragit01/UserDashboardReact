import React, { memo } from 'react';
import { SearchBar } from "./Search/SearchBar";
import { ContactCard } from "./Cards/ContactCard";

const LoadingPlaceholder = () => (
  <div className="animate-pulse bg-gray-200 rounded-lg h-32"></div>
);

const ContactsGrid = memo(({ contacts, handleCardClick, isLoading }) => {
  if (isLoading) {
    return (
      <div className="p-5">
        <SearchBar />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[...Array(6)].map((_, index) => (
            <LoadingPlaceholder key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-5">
      <SearchBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {contacts.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 py-8">
            Контакты не найдены
          </div>
        ) : (
          contacts.map(contact => (
            <ContactCard
              onClick={() => handleCardClick(contact)}
              key={contact.email}
              name={contact.name}
              phone={contact.phone}
              email={contact.email}
            />
          ))
        )}
      </div>
    </div>
  );
});

ContactsGrid.displayName = 'ContactsGrid';

export default ContactsGrid;