import {PhoneIcon} from "../Icons/PhoneIcon";
import {EmailIcon} from "../Icons/EmailIcon";
import React from "react";

export const ContactCard = ({ name, phone, email, ...props }) => {
    return (
        <div {...props} className="bg-white rounded-2xl p-8 shadow__card transition-all duration-200 h-80">
            <h3 className="text-lg font-semibold text-gray-800 mb-5">{name}</h3>
            <div className="flex flex-col gap-3.5">
                <div className="flex items-center gap-2.5">
                    <div className="icon flex justify-center">
                        <PhoneIcon />
                    </div>
                    <div className="text-sm text-gray-600 hover:text-indigo-600">{phone}</div>
                </div>
                <div className="flex items-center gap-2.5">
                    <div className="icon flex justify-center">
                        <EmailIcon />
                    </div>
                    <div className="text-sm text-gray-600 hover:text-indigo-600">{email}</div>
                </div>
            </div>
        </div>
    );
};