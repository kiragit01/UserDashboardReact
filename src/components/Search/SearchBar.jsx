import React from "react";
import { useQueryContext } from "../../Context/Query";

export const SearchBar = () => {
    const { query, setQuery } = useQueryContext();
    
    return (
        <div className="relative max-w-6xl mx-auto my-5">
            <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                type="text"
                className="w-full h-12 px-5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all"
                placeholder=""
            />
            <svg
                className="absolute right-5 top-1/2 transform -translate-y-1/2 text-indigo-600 w-5 h-5"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M17.5 17.5L12.5 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};