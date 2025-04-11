import {useContext} from "react";
import {QueryContext} from "../Context/Query";

export const useQueryContext = () => {
    const context = useContext(QueryContext);
    if (!context) {
        throw new Error('useQueryContext must be used within a QueryProvider');
    }
    return context;
};