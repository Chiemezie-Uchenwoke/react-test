import { useEffect } from "react";

const Alert = ({type, heading, message, onClose}) => {

    useEffect(() => {
        if (message){
            const timer = setTimeout(() => {
                onClose();
            }, 3000);

            return () => clearTimeout(timer);
        }

    }, [message, onClose]);

    return (
        <div className={`w-full max-w-80 ${type.success ? "bg-green-500 text-white-shade": ""} ${type.error ? "bg-red-500 text-white-shade" : ""} fixed bottom-4 right-4 py-8 px-4 lg:px-6 rounded-2xl shadow-xl`}>
            <h2 className="font-bold"> {heading} </h2>

            <p>
                {message}
            </p>
        </div>
    )
}

export default Alert;