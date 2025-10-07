import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import useCount from "../../hooks/useCount";
import Alert from "../Alert/Alert";

const Card = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [alert, setAlert] = useState({
        type: "",
        message: "",
        heading: ""
    });
    const {count, inc, dec} = useCount();

    useEffect(() => {
        if (count >= 15){
            setAlert({
                type: {success: true},
                message: `Acceptable count value: ${count}`,
                heading: "Success"
            });
        } else {
            setAlert({
                type: {error: true},
                message: `Low count value: ${count}`,
                heading: "Low Score"
            });
        }
    }, [count]);

    return (
        <>
            <div 
                className="bg-blue-600 text-white-shade w-[30rem] py-10 px-6 flex flex-col gap-12"
                onClick={() => setIsModalOpen(true)}
            >
                <h1 className="font-bold text-4xl">Count Score: {count} </h1>

                <button 
                    className="bg-yellow-400 text-black py-3 text-xl px-10 rounded-2xl cursor-pointer hover:brightness-95 active:scale-95 "
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsAlertOpen(true);
                        inc();
                    }}
                >
                    Increase Count using zustand
                </button>

                <button 
                    className="bg-yellow-400 text-black py-3 text-xl px-10 rounded-2xl cursor-pointer hover:brightness-95 active:scale-95 "
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsAlertOpen(true);
                        dec();
                    }}
                >
                    Decrease Count using zustand
                </button>
            </div>

            {
                isModalOpen &&
                <Modal 
                    onclose={() => setIsModalOpen(false)}
                    count={`${count}`}
                />
            }

            {
                isAlertOpen && 
                <Alert 
                    heading={alert.heading}
                    message={alert.message}
                    type={alert.type}
                    onClose={() => setIsAlertOpen(false)}
                />
            }
        </>
    )
}

export default Card;