import { IoMdClose } from "react-icons/io";

const Modal = ({onclose, count}) => {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-black/60 fixed top-0 left-0">
            <div className="w-full max-w-[45rem] h-[70%] relative flex flex-col gap-5 bg-white-shade px-8 py-8 rounded-2xl">
                <h2 className="text-4xl font-bold">This is a Modal</h2>

                <p className="text-xl">
                    Current count is {count}
                </p>

                <button className="text-xl border w-10 h-10 rounded-full absolute right-4 top-6 flex justify-center items-center cursor-pointer bg-white-shade hover:brightness-95 duration-200" onClick={onclose}>
                    <IoMdClose />
                </button>
            </div>
        </div>
    )
}

export default Modal;