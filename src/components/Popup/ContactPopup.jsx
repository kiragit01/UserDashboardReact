import {CloseIcon} from "../Icons/CloseIcon";

export const ContactPopup = ({ contact, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
             onClick={onClose}>
            <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-8 relative"
                onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">{contact.name}</h2>
                    <button
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        onClick={onClose}>
                        <CloseIcon />
                    </button>
                </div>

                <div className="mb-8">
                    <div className="flex mb-5">
                        <span className="w-2/5 text-gray-800 font-medium">Телефон:</span>
                        <span className="w-3/5 text-gray-600">{contact.phone}</span>
                    </div>

                    <div className="flex mb-5">
                        <span className="w-2/5 text-gray-800 font-medium">Почта:</span>
                        <span className="w-3/5 text-gray-600">{contact.email}</span>
                    </div>

                    <div className="flex mb-5">
                        <span className="w-2/5 text-gray-800 font-medium">Дата приема:</span>
                        <span className="w-3/5 text-gray-600">{contact.hire_date}</span>
                    </div>

                    <div className="flex mb-5">
                        <span className="w-2/5 text-gray-800 font-medium">Должность:</span>
                        <span className="w-3/5 text-gray-600">{contact.position_name}</span>
                    </div>

                    <div className="flex mb-5">
                        <span className="w-2/5 text-gray-800 font-medium">Подразделение:</span>
                        <span className="w-3/5 text-gray-600">{contact.department}</span>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Дополнительная информация:</h3>
                    <p className="text-gray-600">
                        Разработчики используют текст в качестве заполнителя
                        макета страницы. Разработчики используют текст в качестве
                        заполнителя макета страницы.
                    </p>
                </div>
            </div>
        </div>
    );
};